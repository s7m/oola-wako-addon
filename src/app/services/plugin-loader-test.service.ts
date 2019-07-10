import { ComponentFactoryResolver, Injectable, Injector, NgModuleFactory, NgModuleRef, ViewContainerRef } from '@angular/core';

import { switchMap, tap } from 'rxjs/operators';

import { forkJoin, from, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { EpisodeDetailBaseComponent, MovieDetailBaseComponent, PluginBaseService, WakoBaseHttpService } from '@wako-app/mobile-sdk';
import { ModuleLoaderService } from './module-loader.service';

@Injectable({
  providedIn: 'root'
})
export class PluginLoaderTestService {
  private pluginsMap = new Map<string, PluginMap>();

  constructor(
    private translateService: TranslateService,
    private storage: Storage,
    private moduleLoaderService: ModuleLoaderService,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  install(manifestUrl: string, lang: string) {
    let pluginId = null;
    return WakoBaseHttpService.get<PluginManifest>(manifestUrl).pipe(
      switchMap(manifest => {
        pluginId = manifest.id;
        console.log('manifest', manifest);

        const paths = manifestUrl.split('/');
        paths.pop();
        const baseUrl = paths.join('/');

        const pluginUrl = manifest.entryPoint.match('http') ? manifest.entryPoint : baseUrl + '/plugins-open-button.umd.min.js';

        const pluginObjectStored = new PluginObjectStored();
        pluginObjectStored.manifestUrl = manifestUrl;
        pluginObjectStored.manifest = manifest;

        return WakoBaseHttpService.get<string>(pluginUrl).pipe(
          switchMap(pluginSource => {
            pluginObjectStored.source = pluginSource;
            if (manifest.languages) {
              pluginObjectStored.languages = {};
              const obss = [];
              Object.keys(manifest.languages).forEach(langKey => {
                const langUrl = manifest.languages[langKey].match('http')
                  ? manifest.languages[langKey]
                  : baseUrl + manifest.languages[langKey];

                const obs = WakoBaseHttpService.get(langUrl).pipe(
                  tap(data => {
                    pluginObjectStored.languages[langKey] = data;
                  })
                );

                obss.push(obs);
              });

              return forkJoin(obss);
            }
            return of(true);
          }),
          switchMap(() => {
            return from(this.storage.set(pluginObjectStored.manifest.id, pluginObjectStored));
          })
        );
      }),

      switchMap(() => {
        return from(this.addToList(pluginId));
      }),
      switchMap(() => {
        return this.load(pluginId, lang, true);
      })
    );
  }

  private getAllInstalled(): Promise<string[]> {
    return this.storage.get('plugin_list').then(data => {
      if (!data) {
        data = [];
      }
      return data;
    });
  }

  private addToList(pluginId: string) {
    return from(this.getAllInstalled()).pipe(
      switchMap(list => {
        if (list.includes(pluginId)) {
          return of(true);
        }
        list.push(pluginId);
        return from(this.storage.set('plugin_list', list));
      })
    );
  }

  loadAll(lang: string) {
    this.translateService.use(lang);

    return from(this.getAllInstalled()).pipe(
      switchMap(list => {
        const obss = [];

        list.forEach(pluginId => {
          obss.push(this.load(pluginId, lang, false));
        });

        return forkJoin(obss);
      })
    );
  }

  private load<T>(pluginId: string, lang: string, isFirstLoad: boolean) {
    return from(this.storage.get(pluginId)).pipe(
      tap((plugin: PluginObjectStored) => {
        const exports = this.moduleLoaderService.loadModule(plugin.source) as any;

        this.initialize(plugin, lang, exports[`PluginModule`], isFirstLoad);
      })
    );
  }

  private initialize(plugin: PluginObjectStored, lang: string, moduleType: any, isFirstLoad: boolean) {
    const pluginService = this.injector.get(moduleType.pluginService) as PluginBaseService;

    this.pluginsMap.set(plugin.manifest.id, { plugin, moduleFactory: moduleType, moduleRef: null });

    pluginService.initialize();

    if (isFirstLoad) {
      pluginService.afterInstall();
    }

    if (plugin.languages.hasOwnProperty(lang)) {
      pluginService.setTranslation(lang, plugin.languages[lang]);
    }
  }

  createComponent(action: PluginAction | 'settings', viewContainerRef: ViewContainerRef, data?: any) {
    this.pluginsMap.forEach(pluginMap => {
      const moduleType = pluginMap.moduleFactory as any;
debugger;
      if (action === 'movies' && moduleType.movieComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<MovieDetailBaseComponent>(moduleType.movieComponent);
        const movieComponent = viewContainerRef.createComponent<MovieDetailBaseComponent>(compFactory);

        movieComponent.instance.setMovie(data.movie);
      } else if (action === 'episodes' && moduleType.episodeComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<EpisodeDetailBaseComponent>(moduleType.episodeComponent);
        const episodeComponent = viewContainerRef.createComponent<EpisodeDetailBaseComponent>(compFactory);

        episodeComponent.instance.setShowEpisode(data.show, data.episode);
      } else if (action === 'settings' && moduleType.settingsComponent) {
        const compFactory = this.componentFactoryResolver.resolveComponentFactory<any>(moduleType.settingsComponent);
        viewContainerRef.createComponent<any>(compFactory);
      }
    });
  }
}

declare type PluginAction = 'movies' | 'episodes';

export interface PluginMap {
  plugin: PluginObjectStored;
  moduleFactory: NgModuleFactory<any>;
  moduleRef: NgModuleRef<any>;
}

export class PluginObjectStored {
  manifest: PluginManifest;
  manifestUrl: string;
  source: string;
  languages: { [key: string]: {} };
}

export interface PluginManifest {
  version: string;
  id: string;
  name: string;
  description: string;
  actions: PluginAction[];
  entryPoint: string;
  languages: { [key: string]: string };
}
!function(n,l){"object"==typeof exports&&"object"==typeof module?module.exports=l(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):"function"==typeof define&&define.amd?define(["ng.common","tslib","ng.forms","ng.router","ngx-translate.core","wako-app.mobile-sdk","ng.core","ionic.angular"],l):"object"==typeof exports?exports.plugin=l(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):n.plugin=l(n["ng.common"],n.tslib,n["ng.forms"],n["ng.router"],n["ngx-translate.core"],n["wako-app.mobile-sdk"],n["ng.core"],n["ionic.angular"])}("undefined"!=typeof self?self:this,function(n,l,e,t,o,u,r,i){return function(n){var l={};function e(t){if(l[t])return l[t].exports;var o=l[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=l,e.d=function(n,l,t){e.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,l){if(1&l&&(n=e(n)),8&l)return n;if(4&l&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&l&&"string"!=typeof n)for(var o in n)e.d(t,o,(function(l){return n[l]}).bind(null,o));return t},e.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(l,"a",l),l},e.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},e.p="",e(e.s=0)}({0:function(n,l,e){n.exports=e("zUnb")},"0S4P":function(l,e){l.exports=n},"17wl":function(n,e){n.exports=l},"3xDq":function(n,l){n.exports=e},JAnZ:function(n,l){n.exports=t},TGDj:function(n,l){n.exports=o},doF0:function(n,l){n.exports=u},vOrQ:function(n,l){n.exports=r},z1lQ:function(n,l){n.exports=i},zUnb:function(n,l,e){"use strict";e.r(l);var t=e("17wl"),o=e("doF0"),u=e("TGDj");function r(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];Object(o.wakoLog)("plugin.my-plugin",n)}var i=function(n){function l(l){var e=n.call(this)||this;return e.translate=l,e}return t.__extends(l,n),l.prototype.initialize=function(){r("plugin initialized")},l.prototype.afterInstall=function(){r("plugin installed")},l.prototype.afterUpdate=function(){r("plugin updated")},l.prototype.setTranslation=function(n,l){this.translate.setDefaultLang(n),this.translate.use(n),this.translate.setTranslation(n,l)},l}(o.PluginBaseService),a=e("z1lQ"),c=e("vOrQ"),d=function(){function n(n){this.modalCtrl=n}return n.prototype.ngOnInit=function(){},n.prototype.dismiss=function(){this.modalCtrl.dismiss()},n}(),s=function(n){function l(l){var e=n.call(this)||this;return e.modalCtrl=l,e}return t.__extends(l,n),l.prototype.setMovie=function(n){this.movie=n},l.prototype.openMovie=function(){this.modalCtrl.create({component:d,componentProps:{movie:this.movie}}).then(function(n){n.present()})},l}(o.MovieDetailBaseComponent),p=function(){function n(n){this.translate=n}return n.prototype.ngOnInit=function(){r("Current lang",this.translate.currentLang),r("Test instant translate",this.translate.instant("settings.title"))},n}(),f=function(n){function l(l){var e=n.call(this)||this;return e.modalCtrl=l,e}return t.__extends(l,n),l.prototype.setShowEpisode=function(n,l){this.show=n,this.episode=l},l.prototype.openEpisode=function(){this.modalCtrl.create({component:d,componentProps:{show:this.show,episode:this.episode}}).then(function(n){n.present()})},l}(o.EpisodeDetailBaseComponent),m=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return t.__extends(l,n),l.pluginService=i,l.settingsComponent=p,l.movieComponent=s,l.episodeComponent=f,l}(o.PluginBaseModule),g=e("0S4P");e("JAnZ");var v=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function h(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var C=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function y(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var _=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function T(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var R=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function b(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var I=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var D=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var E=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var k=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var P=c["\u0275crt"]({encapsulation:2,styles:[],data:{}});function w(n){return c["\u0275vid"](2,[c["\u0275ncd"](null,0)],null,null)}var q=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function j(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openMovie()&&t),t},h,v)),c["\u0275did"](1,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" My movie : "," ","\n"]))],null,function(n,l){var e=l.component;n(l,2,0,e.movie.title,e.movie.traktId)})}function Z(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,j,q)),c["\u0275did"](1,49152,null,0,s,[a.ModalController],null,null)],null,null)}var L=c["\u0275ccf"]("ng-component",s,Z,{},{},[]),O=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openEpisode()&&t),t},h,v)),c["\u0275did"](1,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" Show : "," - Episode ","\n"]))],null,function(n,l){var e=l.component;n(l,2,0,e.show.title,e.episode.code)})}function A(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,F,O)),c["\u0275did"](1,49152,null,0,f,[a.ModalController],null,null)],null,null)}var U=c["\u0275ccf"]("ng-component",f,A,{},{},[]),z=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function B(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),c["\u0275ted"](1,null,[" ","\n"])),c["\u0275pid"](131072,u.TranslatePipe,[u.TranslateService,c.ChangeDetectorRef]),(n()(),c["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c["\u0275ted"](-1,null,["My plugin"]))],null,function(n,l){n(l,1,0,c["\u0275unv"](l,1,0,c["\u0275nov"](l,2).transform("settings.title")))})}function G(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,B,z)),c["\u0275did"](1,114688,null,0,p,[u.TranslateService],null,null)],function(n,l){n(l,1,0)},null)}var H=c["\u0275ccf"]("ng-component",p,G,{},{},[]),J=c["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Q(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,3,"ion-card-content",[],null,null,null,b,R)),c["\u0275did"](1,49152,null,0,a.IonCardContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" "," "])),c["\u0275pid"](0,g.JsonPipe,[])],null,function(n,l){var e=l.component;n(l,2,0,c["\u0275unv"](l,2,0,c["\u0275nov"](l,3).transform(e.movie)))})}function V(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,3,"ion-card-content",[],null,null,null,b,R)),c["\u0275did"](1,49152,null,0,a.IonCardContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](2,0,[" "," "])),c["\u0275pid"](0,g.JsonPipe,[])],null,function(n,l){var e=l.component;n(l,2,0,c["\u0275unv"](l,2,0,c["\u0275nov"](l,3).transform(e.show)))})}function K(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,12,"ion-header",[],null,null,null,x,D)),c["\u0275did"](1,49152,null,0,a.IonHeader,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](2,0,null,0,10,"ion-toolbar",[],null,null,null,w,P)),c["\u0275did"](3,49152,null,0,a.IonToolbar,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,N,k)),c["\u0275did"](5,49152,null,0,a.IonTitle,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275ted"](6,0,[" "," "])),(n()(),c["\u0275eld"](7,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,y,C)),c["\u0275did"](8,49152,null,0,a.IonButtons,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](9,0,null,0,3,"ion-button",[["color","light"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.dismiss()&&t),t},h,v)),c["\u0275did"](10,49152,null,0,a.IonButton,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],{color:[0,"color"]},null),(n()(),c["\u0275eld"](11,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,S,E)),c["\u0275did"](12,49152,null,0,a.IonIcon,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],{name:[0,"name"]},null),(n()(),c["\u0275eld"](13,0,null,null,7,"ion-content",[],null,null,null,M,I)),c["\u0275did"](14,49152,null,0,a.IonContent,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275eld"](15,0,null,0,5,"ion-card",[],null,null,null,T,_)),c["\u0275did"](16,49152,null,0,a.IonCard,[c.ChangeDetectorRef,c.ElementRef,c.NgZone],null,null),(n()(),c["\u0275and"](16777216,null,0,1,null,Q)),c["\u0275did"](18,16384,null,0,g.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),c["\u0275and"](16777216,null,0,1,null,V)),c["\u0275did"](20,16384,null,0,g.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,10,0,"light"),n(l,12,0,"close"),n(l,18,0,e.movie),n(l,20,0,e.show)},function(n,l){var e=l.component;n(l,6,0,e.movie?e.movie.title:e.show.title+" "+e.episode.code)})}function W(n){return c["\u0275vid"](0,[(n()(),c["\u0275eld"](0,0,null,null,1,"app-media-modal",[],null,null,null,K,J)),c["\u0275did"](1,114688,null,0,d,[a.ModalController],null,null)],function(n,l){n(l,1,0)},null)}var X=c["\u0275ccf"]("app-media-modal",d,W,{},{},[]),Y=e("3xDq"),$=c["\u0275cmf"](m,[],function(n){return c["\u0275mod"]([c["\u0275mpd"](512,c.ComponentFactoryResolver,c["\u0275CodegenComponentFactoryResolver"],[[8,[L,U,H,X]],[3,c.ComponentFactoryResolver],c.NgModuleRef]),c["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[c.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),c["\u0275mpd"](4608,Y["\u0275angular_packages_forms_forms_j"],Y["\u0275angular_packages_forms_forms_j"],[]),c["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[c.NgZone,c.ApplicationRef]),c["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,c.ComponentFactoryResolver,c.Injector]),c["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,c.ComponentFactoryResolver,c.Injector]),c["\u0275mpd"](5120,c.APP_INITIALIZER,function(n,l,e){return[a["\u0275e"](n,l,e)]},[a["\u0275a"],g.DOCUMENT,c.NgZone]),c["\u0275mpd"](4608,u.TranslateLoader,u.TranslateFakeLoader,[]),c["\u0275mpd"](4608,u.TranslateCompiler,u.TranslateFakeCompiler,[]),c["\u0275mpd"](4608,u.TranslateParser,u.TranslateDefaultParser,[]),c["\u0275mpd"](4608,u.MissingTranslationHandler,u.FakeMissingTranslationHandler,[]),c["\u0275mpd"](4608,u.TranslateStore,u.TranslateStore,[]),c["\u0275mpd"](4608,u.TranslateService,u.TranslateService,[u.TranslateStore,u.TranslateLoader,u.TranslateCompiler,u.TranslateParser,u.MissingTranslationHandler,u.USE_DEFAULT_LANG,u.USE_STORE]),c["\u0275mpd"](4608,i,i,[u.TranslateService]),c["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),c["\u0275mpd"](1073742336,Y["\u0275angular_packages_forms_forms_bc"],Y["\u0275angular_packages_forms_forms_bc"],[]),c["\u0275mpd"](1073742336,Y.FormsModule,Y.FormsModule,[]),c["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),c["\u0275mpd"](1073742336,u.TranslateModule,u.TranslateModule,[]),c["\u0275mpd"](1073742336,m,m,[]),c["\u0275mpd"](256,a["\u0275a"],void 0,[]),c["\u0275mpd"](256,u.USE_STORE,void 0,[]),c["\u0275mpd"](256,u.USE_DEFAULT_LANG,void 0,[])])});e.d(l,"PluginModule",function(){return m}),e.d(l,"PluginModuleNgFactory",function(){return $}),l.default=$}})});
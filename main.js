(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/actor/actor.module": [
		"./src/app/modules/actor/actor.module.ts",
		"modules-actor-actor-module~modules-movie-movie-module",
		"modules-actor-actor-module"
	],
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/movie/movie.module": [
		"./src/app/modules/movie/movie.module.ts",
		"modules-actor-actor-module~modules-movie-movie-module",
		"modules-movie-movie-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'movies',
        loadChildren: './modules/movie/movie.module#MovieModule'
    },
    {
        path: 'actors',
        loadChildren: './modules/actor/actor.module#ActorModule'
    },
    {
        path: 'user',
        loadChildren: './modules/auth/auth.module#AuthModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app__navbar\">\n  <app-navbar></app-navbar>\n  <app-search></app-search>\n</header>\n\n\n<section class=\"app__section\">\n  <router-outlet></router-outlet>\n</section>\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app__navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 2; }\n\n.app__section {\n  margin-top: 9rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.interceptor.ts":
/*!************************************!*\
  !*** ./src/app/app.interceptor.ts ***!
  \************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppInterceptor = /** @class */ (function () {
    function AppInterceptor() {
    }
    AppInterceptor.prototype.intercept = function (request, next) {
        var token = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey;
        request = request.clone({
            setParams: {
                api_key: token,
                language: 'en-US',
            }
        });
        return next.handle(request);
    };
    AppInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppInterceptor);
    return AppInterceptor;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.interceptor */ "./src/app/app.interceptor.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _pipes_duration_time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/duration-time.pipe */ "./src/app/pipes/duration-time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Firebase






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__["TruncatePipe"],
                _pipes_duration_time_pipe__WEBPACK_IMPORTED_MODULE_14__["DurationTimePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_8__["AppInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/actor/actor-home-top5/actor-home-top5.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\n  <mat-divider></mat-divider>\n  <mat-list-item role=\"listitem\">\n    <a routerLink=\"/actors/{{actor.id}}\" class=\"a\">\n      {{ actor.name }}\n    </a>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/actor/actor-home-top5/actor-home-top5.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/actor/actor-home-top5/actor-home-top5.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActorHomeTop5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorHomeTop5Component", function() { return ActorHomeTop5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActorHomeTop5Component = /** @class */ (function () {
    function ActorHomeTop5Component() {
    }
    ActorHomeTop5Component.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActorHomeTop5Component.prototype, "actor", void 0);
    ActorHomeTop5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-home-top5',
            template: __webpack_require__(/*! ./actor-home-top5.component.html */ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.html"),
            styles: [__webpack_require__(/*! ./actor-home-top5.component.scss */ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActorHomeTop5Component);
    return ActorHomeTop5Component;
}());



/***/ }),

/***/ "./src/app/modules/actor/services/actor.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/actor/services/actor.service.ts ***!
  \*********************************************************/
/*! exports provided: ActorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorService", function() { return ActorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types_actor_detail_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/actor-detail.type */ "./src/app/modules/actor/types/actor-detail.type.ts");
/* harmony import */ var _types_actor_credits_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/actor-credits.type */ "./src/app/modules/actor/types/actor-credits.type.ts");
/* harmony import */ var _types_actor_list_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/actor-list.type */ "./src/app/modules/actor/types/actor-list.type.ts");
/* harmony import */ var _types_actor_images_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/actor-images.type */ "./src/app/modules/actor/types/actor-images.type.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/types/favorite.type */ "./src/app/modules/shared/types/favorite.type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ActorService = /** @class */ (function () {
    function ActorService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
    }
    ActorService.prototype.url = function (endpoint) {
        return "https://api.themoviedb.org/3/person/" + endpoint;
    };
    ActorService.prototype.getListActors = function (endpoint, page) {
        endpoint = endpoint + "?page=" + page;
        return this.http.get(this.url(endpoint))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_actor_list_type__WEBPACK_IMPORTED_MODULE_5__["ActorListDescriptor"].import(data);
        }));
    };
    ActorService.prototype.getDetailActor = function (id) {
        return this.http.get(this.url(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_actor_detail_type__WEBPACK_IMPORTED_MODULE_3__["ActorDetailDescriptor"].import(data);
        }));
    };
    ActorService.prototype.getCreditsActor = function (id) {
        var _this = this;
        return this.http.get(this.url(id + "/movie_credits"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // tslint:disable-next-line:prefer-const
            var result = _types_actor_credits_type__WEBPACK_IMPORTED_MODULE_4__["ActorCreditsDescriptor"].import(data);
            // order movies by vote_count
            _this.sortData(result.cast, 'vote_count');
            return result;
        }));
    };
    ActorService.prototype.getImagesActor = function (id) {
        var _this = this;
        return this.http.get(this.url(id + "/images"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // tslint:disable-next-line:prefer-const
            var result = _types_actor_images_type__WEBPACK_IMPORTED_MODULE_6__["ActorImagesDescriptor"].import(data);
            // order images by vote_average
            _this.sortData(result.images, 'vote_average');
            return result;
        }));
    };
    ActorService.prototype.saveFavoriteActor = function (actor) {
        this.afDB.database.ref("actors/" + actor.id).set(actor);
    };
    ActorService.prototype.getFavoriteActor = function (id) {
        return this.afDB.object("actors/" + id).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_8__["FavoriteDescriptor"].import(data);
        }));
    };
    ActorService.prototype.getFavoriteActors = function () {
        return this.afDB.list('actors').valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_8__["FavoriteListDescriptor"].import(data);
        }));
    };
    ActorService.prototype.sortData = function (lst, key) {
        lst.sort(function (a, b) {
            if (a[key] < b[key]) {
                return 1;
            }
            else if (a[key] > b[key]) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    ActorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]])
    ], ActorService);
    return ActorService;
}());



/***/ }),

/***/ "./src/app/modules/actor/types/actor-credits.type.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/actor/types/actor-credits.type.ts ***!
  \***********************************************************/
/*! exports provided: ActorCreditsDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorCreditsDescriptor", function() { return ActorCreditsDescriptor; });
/* harmony import */ var _movie_types_movie_list_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../movie/types/movie-list.type */ "./src/app/modules/movie/types/movie-list.type.ts");

var ActorCreditsDescriptor = /** @class */ (function () {
    function ActorCreditsDescriptor() {
        this.cast = [];
    }
    ActorCreditsDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var credits = new ActorCreditsDescriptor();
        var movie;
        if (rawData.hasOwnProperty('cast')) {
            for (var i = 0; i < rawData.cast.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.cast[i];
                movie = _movie_types_movie_list_type__WEBPACK_IMPORTED_MODULE_0__["MovieSummaryDescriptor"].import(row);
                credits.cast.push(movie);
            }
        }
        return credits;
    };
    return ActorCreditsDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/actor/types/actor-detail.type.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/actor/types/actor-detail.type.ts ***!
  \**********************************************************/
/*! exports provided: ActorDetailDescriptor, ActorDetailHeaderDescriptor, ActorDetailInfoDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailDescriptor", function() { return ActorDetailDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailHeaderDescriptor", function() { return ActorDetailHeaderDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailInfoDescriptor", function() { return ActorDetailInfoDescriptor; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

var ActorDetailDescriptor = /** @class */ (function () {
    function ActorDetailDescriptor() {
    }
    ActorDetailDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var actor = new ActorDetailDescriptor();
        actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        actor.header = ActorDetailHeaderDescriptor.import({
            name: rawData.name,
            biography: rawData.biography,
            profile_path: rawData.profile_path ? rawData.profile_path : ''
        });
        actor.info = ActorDetailInfoDescriptor.import({
            gender: rawData.gender,
            birthday: rawData.birthday,
            place_of_birth: rawData.place_of_birth,
            homepage: rawData.homepage
        });
        return actor;
    };
    return ActorDetailDescriptor;
}());

var ActorDetailHeaderDescriptor = /** @class */ (function () {
    function ActorDetailHeaderDescriptor() {
    }
    ActorDetailHeaderDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var header = new ActorDetailHeaderDescriptor();
        var profile_path_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
        var profile_path_url_default = 'https://icdn-0.motor1.com/custom/share/default-user.png';
        header.title = rawData.hasOwnProperty('name') ? rawData.name : '';
        header.subtitle = 'Biography';
        header.summary = rawData.hasOwnProperty('biography') ? rawData.biography : 'Biography not available';
        header.poster_path = rawData.hasOwnProperty('profile_path') ?
            "" + profile_path_url + rawData.profile_path : profile_path_url_default;
        return header;
    };
    return ActorDetailHeaderDescriptor;
}());

var ActorDetailInfoDescriptor = /** @class */ (function () {
    function ActorDetailInfoDescriptor() {
    }
    ActorDetailInfoDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var info = new ActorDetailInfoDescriptor();
        // tslint:disable-next-line:prefer-const
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        info.gender = rawData.hasOwnProperty('gender') ? ActorDetailInfoDescriptor.genderText(rawData.gender) : '';
        info.birthday = rawData.hasOwnProperty('birthday') ? date.transform(rawData.birthday) : '';
        info.place_of_birth = rawData.hasOwnProperty('place_of_birth') ? rawData.place_of_birth : '';
        info.homepage = rawData.hasOwnProperty('homepage') && rawData.homepage != null ? rawData.homepage : 'None';
        return info;
    };
    ActorDetailInfoDescriptor.genderText = function (id) {
        return id === 1 ? 'Female' : 'Male';
    };
    return ActorDetailInfoDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/actor/types/actor-images.type.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/actor/types/actor-images.type.ts ***!
  \**********************************************************/
/*! exports provided: ActorImagesDescriptor, ActorImageDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorImagesDescriptor", function() { return ActorImagesDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorImageDescriptor", function() { return ActorImageDescriptor; });
var ActorImagesDescriptor = /** @class */ (function () {
    function ActorImagesDescriptor() {
        this.images = [];
    }
    ActorImagesDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var images = new ActorImagesDescriptor();
        var image;
        if (rawData.hasOwnProperty('profiles')) {
            for (var i = 0; i < rawData.profiles.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.profiles[i];
                image = ActorImageDescriptor.import(row);
                images.images.push(image);
            }
        }
        return images;
    };
    return ActorImagesDescriptor;
}());

var ActorImageDescriptor = /** @class */ (function () {
    function ActorImageDescriptor() {
    }
    ActorImageDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var image = new ActorImageDescriptor();
        var file_path_url = 'https://image.tmdb.org/t/p/w220_and_h330_bestv2';
        var file_url_external = 'https://image.tmdb.org/t/p/original';
        image.file_path = rawData.hasOwnProperty('file_path') ? "" + file_path_url + rawData.file_path : '';
        image.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        image.file_url = rawData.hasOwnProperty('file_path') ? "" + file_url_external + rawData.file_path : '';
        return image;
    };
    return ActorImageDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/actor/types/actor-list.type.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/actor/types/actor-list.type.ts ***!
  \********************************************************/
/*! exports provided: ActorListDescriptor, ActorPaginatorDescriptor, ActorSummaryDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListDescriptor", function() { return ActorListDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorPaginatorDescriptor", function() { return ActorPaginatorDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorSummaryDescriptor", function() { return ActorSummaryDescriptor; });
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");

var ActorListDescriptor = /** @class */ (function () {
    function ActorListDescriptor() {
        this.actors = [];
    }
    ActorListDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var list = new ActorListDescriptor();
        list.paginator = ActorPaginatorDescriptor.import({
            total_pages: rawData.total_pages,
            page_size: rawData.results.length
        });
        var actor;
        if (rawData.hasOwnProperty('results')) {
            for (var i = 0; i < rawData.results.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.results[i];
                actor = ActorSummaryDescriptor.import(row);
                list.actors.push(actor);
            }
        }
        return list;
    };
    return ActorListDescriptor;
}());

var ActorPaginatorDescriptor = /** @class */ (function () {
    function ActorPaginatorDescriptor() {
    }
    ActorPaginatorDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var paginator = new ActorPaginatorDescriptor();
        paginator.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        paginator.page_size = rawData.hasOwnProperty('page_size') ? rawData.page_size : 0;
        return paginator;
    };
    return ActorPaginatorDescriptor;
}());

var ActorSummaryDescriptor = /** @class */ (function () {
    function ActorSummaryDescriptor() {
    }
    ActorSummaryDescriptor.import = function (rawData, profile_path_url) {
        if (profile_path_url === void 0) { profile_path_url = 'https://image.tmdb.org/t/p/w235_and_h235_face'; }
        // tslint:disable-next-line:prefer-const
        var actor = new ActorSummaryDescriptor();
        // const profile_path_url = 'https://image.tmdb.org/t/p/w235_and_h235_face';
        var profile_path_url_default = 'https://icdn-0.motor1.com/custom/share/default-user.png';
        // tslint:disable-next-line:prefer-const
        var truncate = new _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__["TruncatePipe"]();
        actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        actor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        actor.character = rawData.hasOwnProperty('character') ? truncate.transform(rawData.character, '13') : '';
        actor.profile_path = rawData.hasOwnProperty('profile_path') && rawData.profile_path != null ?
            "" + profile_path_url + rawData.profile_path : profile_path_url_default;
        actor.vote_count = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        return actor;
    };
    return ActorSummaryDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth, router) {
        this.angularFireAuth = angularFireAuth;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (res) {
            alert('User logged in');
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            alert('An error has occurred');
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            alert('Registered user');
            _this.router.navigate(['']);
        })
            .catch(function (err) {
            alert('An error has occurred');
        });
    };
    AuthService.prototype.isLogged = function () {
        return this.angularFireAuth.authState;
    };
    AuthService.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
        alert('Closed session');
        this.router.navigate(['']);
    };
    AuthService.prototype.getUser = function () {
        return this.angularFireAuth.auth;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/movie/services/movie.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/movie/services/movie.service.ts ***!
  \*********************************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types_movie_list_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/movie-list.type */ "./src/app/modules/movie/types/movie-list.type.ts");
/* harmony import */ var _types_movie_detail_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/movie-detail.type */ "./src/app/modules/movie/types/movie-detail.type.ts");
/* harmony import */ var _types_movie_credits_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/movie-credits.type */ "./src/app/modules/movie/types/movie-credits.type.ts");
/* harmony import */ var _types_movie_videos_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/movie-videos.type */ "./src/app/modules/movie/types/movie-videos.type.ts");
/* harmony import */ var _types_movie_recommendation_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/movie-recommendation.type */ "./src/app/modules/movie/types/movie-recommendation.type.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/types/favorite.type */ "./src/app/modules/shared/types/favorite.type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MovieService = /** @class */ (function () {
    function MovieService(http, afDB) {
        this.http = http;
        this.afDB = afDB;
    }
    MovieService.prototype.url = function (endpoint) {
        return "https://api.themoviedb.org/3/movie/" + endpoint;
    };
    MovieService.prototype.getListMovies = function (endpoint, page) {
        endpoint = endpoint + "?page=" + page;
        return this.http.get(this.url(endpoint))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_list_type__WEBPACK_IMPORTED_MODULE_3__["MovieListDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getDetailMovie = function (id) {
        return this.http.get(this.url(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_detail_type__WEBPACK_IMPORTED_MODULE_4__["MovieDetailDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getCreditsMovie = function (id) {
        return this.http.get(this.url(id + "/credits"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_credits_type__WEBPACK_IMPORTED_MODULE_5__["MovieCreditsDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getVideosMovie = function (id) {
        return this.http.get(this.url(id + "/videos"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_videos_type__WEBPACK_IMPORTED_MODULE_6__["MovieVideosDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getRecommendationsMovie = function (id) {
        return this.http.get(this.url(id + "/recommendations"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_recommendation_type__WEBPACK_IMPORTED_MODULE_7__["MovieRecommendationsDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getDiscoverMovie = function (value) {
        var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
        var geners = {
            'action': 28,
            'animation': 16,
            'family': 10751,
            'horror': 27,
            'romance': 10749,
            'thriller': 53
        };
        return this.http.get(url + "&with_genres=" + geners[value])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _types_movie_list_type__WEBPACK_IMPORTED_MODULE_3__["MovieListDescriptor"].import(data);
        }));
    };
    MovieService.prototype.saveFavoriteMovie = function (movie) {
        this.afDB.database.ref("movies/" + movie.id).set(movie);
    };
    MovieService.prototype.getFavoriteMovie = function (id) {
        return this.afDB.object("movies/" + id).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_9__["FavoriteDescriptor"].import(data);
        }));
    };
    MovieService.prototype.getFavoriteMovies = function () {
        return this.afDB.list('movies').valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_9__["FavoriteListDescriptor"].import(data);
        }));
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/modules/movie/types/movie-credits.type.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/movie/types/movie-credits.type.ts ***!
  \***********************************************************/
/*! exports provided: MovieCreditsDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCreditsDescriptor", function() { return MovieCreditsDescriptor; });
/* harmony import */ var _actor_types_actor_list_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actor/types/actor-list.type */ "./src/app/modules/actor/types/actor-list.type.ts");

var MovieCreditsDescriptor = /** @class */ (function () {
    function MovieCreditsDescriptor() {
        this.cast = [];
    }
    MovieCreditsDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var credits = new MovieCreditsDescriptor();
        var actor;
        if (rawData.hasOwnProperty('cast')) {
            for (var i = 0; i < rawData.cast.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.cast[i];
                actor = _actor_types_actor_list_type__WEBPACK_IMPORTED_MODULE_0__["ActorSummaryDescriptor"].import(row);
                credits.cast.push(actor);
            }
        }
        return credits;
    };
    return MovieCreditsDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/movie/types/movie-detail.type.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/movie/types/movie-detail.type.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailDescriptor, MovieDetailHeaderDescriptor, MovieDetailInfoDescriptor, GenreDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailDescriptor", function() { return MovieDetailDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailHeaderDescriptor", function() { return MovieDetailHeaderDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailInfoDescriptor", function() { return MovieDetailInfoDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreDescriptor", function() { return GenreDescriptor; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_duration_time_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/duration-time.pipe */ "./src/app/pipes/duration-time.pipe.ts");


var MovieDetailDescriptor = /** @class */ (function () {
    function MovieDetailDescriptor() {
        this.genres = [];
    }
    MovieDetailDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new MovieDetailDescriptor();
        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.header = MovieDetailHeaderDescriptor.import({
            title: rawData.title,
            overview: rawData.overview,
            poster_path: rawData.poster_path,
            backdrop_path: rawData.backdrop_path,
        });
        movie.info = MovieDetailInfoDescriptor.import({
            status: rawData.status,
            release_date: rawData.release_date,
            original_language: rawData.original_language,
            runtime: rawData.runtime,
            budget: rawData.budget,
            revenue: rawData.revenue,
            homepage: rawData.homepage
        });
        var genre;
        if (rawData.hasOwnProperty('genres')) {
            for (var i = 0; i < rawData.genres.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                movie.genres.push(genre);
            }
        }
        return movie;
    };
    return MovieDetailDescriptor;
}());

var MovieDetailHeaderDescriptor = /** @class */ (function () {
    function MovieDetailHeaderDescriptor() {
    }
    MovieDetailHeaderDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new MovieDetailHeaderDescriptor();
        var poster_path_url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
        var backdrop_path_url = 'https://image.tmdb.org/t/p/w1400_and_h450_face';
        movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        movie.subtitle = 'Overview';
        movie.summary = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        movie.poster_path = rawData.hasOwnProperty('poster_path') ? "" + poster_path_url + rawData.poster_path : '';
        movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? "" + backdrop_path_url + rawData.backdrop_path : '';
        return movie;
    };
    return MovieDetailHeaderDescriptor;
}());

var MovieDetailInfoDescriptor = /** @class */ (function () {
    function MovieDetailInfoDescriptor() {
    }
    MovieDetailInfoDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new MovieDetailInfoDescriptor;
        // tslint:disable-next-line:prefer-const
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        // tslint:disable-next-line:prefer-const
        var duration = new _pipes_duration_time_pipe__WEBPACK_IMPORTED_MODULE_1__["DurationTimePipe"]();
        movie.status = rawData.hasOwnProperty('status') ? rawData.status : '';
        movie.release_date = rawData.hasOwnProperty('release_date') ? date.transform(rawData.release_date) : '';
        movie.original_language = rawData.hasOwnProperty('original_language') ?
            MovieDetailInfoDescriptor.language(rawData.original_language) : '';
        movie.runtime = rawData.hasOwnProperty('runtime') ? duration.transform(rawData.runtime) : '';
        movie.budget = rawData.hasOwnProperty('budget') ? "$ " + rawData.budget : '';
        movie.revenue = rawData.hasOwnProperty('revenue') ? "$ " + rawData.revenue : '';
        movie.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';
        return movie;
    };
    MovieDetailInfoDescriptor.language = function (str) {
        return str === 'en' ? 'English' : str;
    };
    return MovieDetailInfoDescriptor;
}());

var GenreDescriptor = /** @class */ (function () {
    function GenreDescriptor() {
    }
    GenreDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new GenreDescriptor();
        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        return movie;
    };
    return GenreDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/movie/types/movie-list.type.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/movie/types/movie-list.type.ts ***!
  \********************************************************/
/*! exports provided: MovieListDescriptor, MoviePaginatorDescriptor, MovieSummaryDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListDescriptor", function() { return MovieListDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePaginatorDescriptor", function() { return MoviePaginatorDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSummaryDescriptor", function() { return MovieSummaryDescriptor; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");


var MovieListDescriptor = /** @class */ (function () {
    function MovieListDescriptor() {
        this.movies = [];
    }
    MovieListDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var list = new MovieListDescriptor();
        list.paginator = MoviePaginatorDescriptor.import({
            total_pages: rawData.total_pages,
            page_size: rawData.results.length
        });
        var movie;
        if (rawData.hasOwnProperty('results')) {
            for (var i = 0; i < rawData.results.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.results[i];
                movie = MovieSummaryDescriptor.import(row);
                list.movies.push(movie);
            }
        }
        return list;
    };
    return MovieListDescriptor;
}());

var MoviePaginatorDescriptor = /** @class */ (function () {
    function MoviePaginatorDescriptor() {
    }
    MoviePaginatorDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var paginator = new MoviePaginatorDescriptor();
        paginator.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        paginator.page_size = rawData.hasOwnProperty('page_size') ? rawData.page_size : 0;
        return paginator;
    };
    return MoviePaginatorDescriptor;
}());

var MovieSummaryDescriptor = /** @class */ (function () {
    function MovieSummaryDescriptor() {
    }
    MovieSummaryDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new MovieSummaryDescriptor();
        // tslint:disable-next-line:prefer-const
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        // tslint:disable-next-line:prefer-const
        var truncate = new _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncatePipe"]();
        var poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
        var poster_path_null = 'http://kineto.ca/wp-content/uploads/2017/03/null-movie-poster.png';
        var backdrop_path_url = 'https://image.tmdb.org/t/p/w500_and_h282_face';
        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        movie.release_date = rawData.hasOwnProperty('release_date') ? date.transform(rawData.release_date) : '';
        movie.overview = rawData.hasOwnProperty('overview') ? truncate.transform(rawData.overview, '213') : '';
        movie.poster_path = rawData.hasOwnProperty('poster_path') && rawData.poster_path != null ?
            "" + poster_path_url + rawData.poster_path : poster_path_null;
        movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') && rawData.backdrop_path != null ?
            "" + backdrop_path_url + rawData.backdrop_path : '';
        movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;
        return movie;
    };
    return MovieSummaryDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/movie/types/movie-recommendation.type.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/movie/types/movie-recommendation.type.ts ***!
  \******************************************************************/
/*! exports provided: MovieRecommendationsDescriptor, MovieRecommendationDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRecommendationsDescriptor", function() { return MovieRecommendationsDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRecommendationDescriptor", function() { return MovieRecommendationDescriptor; });
var MovieRecommendationsDescriptor = /** @class */ (function () {
    function MovieRecommendationsDescriptor() {
        this.recommendation = [];
    }
    MovieRecommendationsDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var recommendation = new MovieRecommendationsDescriptor();
        var movie;
        if (rawData.hasOwnProperty('results')) {
            for (var i = 0; i < 6; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.results[i];
                movie = MovieRecommendationDescriptor.import(row);
                recommendation.recommendation.push(movie);
            }
        }
        return recommendation;
    };
    return MovieRecommendationsDescriptor;
}());

var MovieRecommendationDescriptor = /** @class */ (function () {
    function MovieRecommendationDescriptor() {
    }
    MovieRecommendationDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var movie = new MovieRecommendationDescriptor();
        var poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
        movie.poster_path = rawData.hasOwnProperty('poster_path') ? "" + poster_path_url + rawData.poster_path : '';
        return movie;
    };
    return MovieRecommendationDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/movie/types/movie-videos.type.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/movie/types/movie-videos.type.ts ***!
  \**********************************************************/
/*! exports provided: MovieVideosDescriptor, TrailerDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieVideosDescriptor", function() { return MovieVideosDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerDescriptor", function() { return TrailerDescriptor; });
var MovieVideosDescriptor = /** @class */ (function () {
    function MovieVideosDescriptor() {
        this.trailer = [];
    }
    MovieVideosDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var videos = new MovieVideosDescriptor();
        var video;
        if (rawData.hasOwnProperty('results')) {
            for (var i = 0; i < rawData.results.length; i++) {
                if (rawData.results[i].type === 'Trailer') {
                    // tslint:disable-next-line:prefer-const
                    var row = rawData.results[i];
                    video = TrailerDescriptor.import(row);
                    videos.trailer.push(video);
                }
            }
        }
        return videos;
    };
    return MovieVideosDescriptor;
}());

var TrailerDescriptor = /** @class */ (function () {
    function TrailerDescriptor() {
    }
    TrailerDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var video = new TrailerDescriptor();
        var iframe_url = 'http://www.youtube.com/embed/';
        var youtube = 'https://www.youtube.com/watch?v=';
        video.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        video.url = rawData.hasOwnProperty('key') ? "" + iframe_url + rawData.key : '';
        video.url_youtube = rawData.hasOwnProperty('key') ? "" + youtube + rawData.key : '';
        video.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        return video;
    };
    return TrailerDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/shared/card-actor/card-actor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/card-actor/card-actor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!hideName; else card_search\">\n  <mat-card [ngClass]=\"{\n    'actor__card--movie': styleMovie,\n    'actor__card': !styleMovie\n  }\">\n    <a routerLink=\"/actors/{{ actor.id }}\">\n      <img mat-card-image src=\"{{ actor.profile_path || actor.poster_path }}\" alt=\"{{ actor.name }}\">\n    </a>\n    <mat-card-footer>\n      <mat-card-title [ngClass]=\"{\n              'actor__card--movie-title': styleMovie,\n              'actor__card-title': !styleMovie\n            }\">\n        <a routerLink=\"/actors/{{ actor.id }}\" class=\"a\">\n          {{ actor.name || actor.title }}\n        </a>\n      </mat-card-title>\n      <mat-card-subtitle *ngIf=\"styleMovie\" class=\"actor__card--movie-subtitle\">\n        {{ actor.character }}\n      </mat-card-subtitle>\n    </mat-card-footer>\n  </mat-card>\n</ng-container>\n\n<ng-template #card_search>\n  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"movie__card--actor-container\">\n    <a routerLink=\"/actors/{{ actor.id }}\" style=\"line-height: 0\">\n      <img class=\"movie__card--actor-image\" src=\"{{ actor.profile_path }}\" alt=\"{{ actor.name }}\">\n    </a>\n    <a routerLink=\"/actors/{{ actor.id }}\" class=\"a movie__card--actor-title\">\n      {{ actor.name }}\n    </a>\n  </mat-card>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/shared/card-actor/card-actor.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/card-actor/card-actor.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actor__card {\n  width: 180px;\n  margin: 2rem 0;\n  text-align: center; }\n  .actor__card-title {\n    margin-bottom: 0 !important;\n    font-size: 1.2rem;\n    padding: 0.5rem 0; }\n  .mat-card-image {\n  margin-bottom: 0 !important; }\n  .actor__card--movie {\n  width: 100px;\n  margin: 1.5rem 1rem 1rem 0;\n  text-align: center; }\n  .actor__card--movie-title {\n    margin-bottom: 0 !important;\n    font-size: 1rem;\n    padding: 0.5rem 0; }\n  .actor__card--movie-subtitle {\n    margin-bottom: 0.5rem !important; }\n  .movie__card--actor-container {\n  padding: 0;\n  overflow: hidden;\n  height: 225px;\n  text-align: center; }\n  .movie__card--actor-image {\n  width: 150px; }\n  .movie__card--actor-title {\n  margin-bottom: 0 !important;\n  font-size: 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/card-actor/card-actor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/card-actor/card-actor.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActorComponent", function() { return CardActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardActorComponent = /** @class */ (function () {
    function CardActorComponent() {
    }
    CardActorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardActorComponent.prototype, "actor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardActorComponent.prototype, "styleMovie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardActorComponent.prototype, "hideName", void 0);
    CardActorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-actor',
            template: __webpack_require__(/*! ./card-actor.component.html */ "./src/app/modules/shared/card-actor/card-actor.component.html"),
            styles: [__webpack_require__(/*! ./card-actor.component.scss */ "./src/app/modules/shared/card-actor/card-actor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardActorComponent);
    return CardActorComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/card-movie/card-movie.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/card-movie/card-movie.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [ngClass]=\"{\n  'movie__card--actor-container': styleActor,\n  'movie__card-container': !styleActor\n}\" fxLayout=\"row\">\n\n  <div [ngClass]=\"{'movie__card-image': !styleActor}\">\n    <a routerLink=\"/movies/{{ movie.id }}\">\n      <img [ngClass]=\"{'movie__card--actor-image': styleActor}\" src=\"{{ movie.poster_path }}\" alt=\"{{ movie.title }}\">\n    </a>\n  </div>\n\n  <ng-container *ngIf=\"!compactView\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-between\" class=\"movie__card-content\">\n      <div>\n        <mat-card-header>\n          <mat-card-title>\n            <a routerLink=\"/movies/{{ movie.id }}\" class=\"a\">\n              {{ movie.title }}\n            </a>\n          </mat-card-title>\n          <mat-card-subtitle>{{ movie.release_date }}</mat-card-subtitle>\n        </mat-card-header>\n\n        <mat-card-content>\n          <p class=\"movie__card-content-overview\">\n            {{ movie.overview }}\n          </p>\n        </mat-card-content>\n      </div>\n    </div>\n  </ng-container>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/shared/card-movie/card-movie.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/card-movie/card-movie.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  padding: 0; }\n\n.mat-card-header-text {\n  margin: 0 !important; }\n\n.movie__card-container {\n  max-width: 450px;\n  overflow: hidden;\n  margin: 2rem 0;\n  height: 275px; }\n\n.movie__card-image {\n  line-height: 0; }\n\n.movie__card-content {\n  padding: 1.2rem 1rem; }\n\n.movie__card-content-overview {\n    white-space: normal;\n    color: #4d4d4d;\n    font-size: 0.8rem;\n    line-height: 1.2rem;\n    margin: 0 8px; }\n\n.movie__card--actor-container {\n  overflow: hidden;\n  height: 225px; }\n\n.movie__card--actor-image {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/modules/shared/card-movie/card-movie.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/card-movie/card-movie.component.ts ***!
  \*******************************************************************/
/*! exports provided: CardMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMovieComponent", function() { return CardMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardMovieComponent = /** @class */ (function () {
    function CardMovieComponent(router) {
        this.router = router;
    }
    CardMovieComponent.prototype.ngOnInit = function () {
    };
    CardMovieComponent.prototype.goToMovies = function (id) {
        this.router.navigate(['/movies']);
        console.log(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardMovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardMovieComponent.prototype, "compactView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardMovieComponent.prototype, "styleActor", void 0);
    CardMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-movie',
            template: __webpack_require__(/*! ./card-movie.component.html */ "./src/app/modules/shared/card-movie/card-movie.component.html"),
            styles: [__webpack_require__(/*! ./card-movie.component.scss */ "./src/app/modules/shared/card-movie/card-movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CardMovieComponent);
    return CardMovieComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/detail-header/detail-header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/detail-header/detail-header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail__cover\" [ngStyle]=\"{ 'background': 'url(' + data.backdrop_path + ')'}\">\n  <div [ngClass]=\"{'detail__shadow': data.subtitle == 'Overview'}\" fxLayout=\"row\">\n    <div class=\"container\" fxLayoutAlign=\"space-between\">\n\n      <div class=\"detail__container--one\">\n        <div class=\"detail__poster\">\n          <img class=\"detail__poster-image\" src=\"{{ data.poster_path }}\" alt=\"{{ data.title }}\">\n        </div>\n      </div>\n\n      <div class=\"detail__container--two\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" class=\"detail__info\" [ngStyle]=\"{color: data.subtitle == 'Overview' ? '#fff' : 'rgba(0, 0, 0, 0.87)' }\">\n          <div>\n            <div class=\"detail__info-title\">\n              <h2>{{ data.title }}</h2>\n            </div>\n            <div class=\"detail__info-subtitle\">\n              <h3>{{ data.subtitle }}</h3>\n            </div>\n            <div class=\"detail__info-summary\">\n              <p>{{ data.summary }}</p>\n            </div>\n          </div>\n          <div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/detail-header/detail-header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/detail-header/detail-header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail__container--one {\n  width: 30%; }\n\n.detail__container--two {\n  width: 70%; }\n\n.detail__cover {\n  background: no-repeat center;\n  background-position: 50% 50%;\n  background-size: cover;\n  height: auto;\n  width: 100%;\n  position: relative;\n  z-index: -1; }\n\n.detail__shadow {\n  height: 450px;\n  width: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)); }\n\n.detail__poster {\n  display: block;\n  width: 250px;\n  height: 400px;\n  position: relative;\n  z-index: 2;\n  margin-top: 2rem; }\n\n.detail__poster-image {\n    height: 100%; }\n\n.detail__info {\n  min-height: 450px;\n  width: 700px;\n  color: #fff;\n  font-family: Roboto; }\n\n.detail__info-title {\n    width: 100%;\n    margin-bottom: 30px;\n    font-size: 2rem;\n    line-height: 1.1rem;\n    font-weight: 700; }\n\n.detail__info-subtitle {\n    width: 100%;\n    margin: 0 0 8px 0; }\n\n.detail__info-summary {\n    white-space: normal;\n    line-height: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/detail-header/detail-header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/detail-header/detail-header.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHeaderComponent", function() { return DetailHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailHeaderComponent = /** @class */ (function () {
    function DetailHeaderComponent() {
    }
    DetailHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailHeaderComponent.prototype, "data", void 0);
    DetailHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-header',
            template: __webpack_require__(/*! ./detail-header.component.html */ "./src/app/modules/shared/detail-header/detail-header.component.html"),
            styles: [__webpack_require__(/*! ./detail-header.component.scss */ "./src/app/modules/shared/detail-header/detail-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailHeaderComponent);
    return DetailHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/detail-info/detail-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/detail-info/detail-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail__info\" fxLayout=\"row\">\n  <mat-list role=\"list\">\n    <ng-container *ngFor=\"let item of info | keys\">\n      <mat-list-item role=\"listitem\">\n        <strong>{{ item.key | titlecase }}: </strong>\n      </mat-list-item>\n      <mat-list-item class=\"detail__info-list-item--value\">\n        <span *ngIf=\"item.key == 'homepage'; else other_span\" [innerHtml]=\"item.value | linkifystr\"></span>\n        <ng-template #other_span>\n          <span>{{ item.value }}</span>\n        </ng-template>\n      </mat-list-item>\n    </ng-container>\n\n    <ng-container *ngIf=\"genres\">\n      <mat-list-item role=\"listitem\">\n        <strong>Genres:</strong>\n      </mat-list-item>\n\n      <mat-list-item role=\"listitem\">\n        <div fxLayout=\"row wrap\" style=\"margin-top: 3rem;\">\n          <ng-container *ngFor=\"let genre of genres\">\n            <button class=\"detail__info-btn\" mat-raised-button color=\"accent\">{{ genre.name }}</button>\n          </ng-container>\n        </div>\n      </mat-list-item>\n    </ng-container>\n\n    <mat-list-item role=\"listitem\" style=\"margin-top: 3rem;\">\n      <ng-container *ngIf=\"loggedIn\">\n        <mat-checkbox color=\"warn\" (change)=\"listenCheckbox($event)\" [checked]=\"favorite\">\n          <strong>Add to Favorite</strong>\n        </mat-checkbox>\n      </ng-container>\n    </mat-list-item>\n\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/detail-info/detail-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/detail-info/detail-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail__info {\n  width: 100%;\n  margin-top: 2rem; }\n  .detail__info-btn {\n    margin: 0 1rem 1rem 0; }\n  .detail__info-list-item--value {\n    margin-top: -1rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/detail-info/detail-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/detail-info/detail-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailInfoComponent", function() { return DetailInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailInfoComponent = /** @class */ (function () {
    function DetailInfoComponent(authService) {
        this.authService = authService;
        this.saveFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loggedIn = false;
        this.userIsLogged();
    }
    DetailInfoComponent.prototype.ngOnInit = function () {
    };
    DetailInfoComponent.prototype.userIsLogged = function () {
        var _this = this;
        this.authService.isLogged()
            .subscribe(function (res) {
            if (res && res.uid) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    DetailInfoComponent.prototype.listenCheckbox = function (event) {
        this.saveFavorite.emit(event.checked);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailInfoComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailInfoComponent.prototype, "genres", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailInfoComponent.prototype, "favorite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DetailInfoComponent.prototype, "saveFavorite", void 0);
    DetailInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-info',
            template: __webpack_require__(/*! ./detail-info.component.html */ "./src/app/modules/shared/detail-info/detail-info.component.html"),
            styles: [__webpack_require__(/*! ./detail-info.component.scss */ "./src/app/modules/shared/detail-info/detail-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DetailInfoComponent);
    return DetailInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/favorite-list/favorite-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/favorite-list/favorite-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div fxLayout=\"row\" class=\"list__menu\">\n    <button mat-button color=\"accent\" (click)=\"showFavoritesMovies()\">Movies</button>\n    <button mat-button color=\"accent\" (click)=\"showFavoritesActors()\">Actors</button>\n  </div>\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n    <ng-container *ngIf=\"showData; else actors_template\">\n      <ng-container *ngFor=\"let movie of movies.favorites\">\n        <app-card-movie [movie]=\"movie.info\" [compactView]=\"true\"></app-card-movie>\n      </ng-container>\n    </ng-container>\n    <ng-template #actors_template>\n      <ng-container *ngFor=\"let actor of actors.favorites\">\n        <app-card-actor [actor]=\"actor.info\"></app-card-actor>\n      </ng-container>\n    </ng-template>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/favorite-list/favorite-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/favorite-list/favorite-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list__menu {\n  padding: 2rem 0 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/favorite-list/favorite-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/favorite-list/favorite-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: FavoriteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListComponent", function() { return FavoriteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie/services/movie.service */ "./src/app/modules/movie/services/movie.service.ts");
/* harmony import */ var _actor_services_actor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actor/services/actor.service */ "./src/app/modules/actor/services/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteListComponent = /** @class */ (function () {
    function FavoriteListComponent(movieService, actorService) {
        this.movieService = movieService;
        this.actorService = actorService;
        this.showData = true;
        this.getMovies();
        this.getActors();
    }
    FavoriteListComponent.prototype.ngOnInit = function () {
    };
    FavoriteListComponent.prototype.showFavoritesMovies = function () {
        this.showData = true;
    };
    FavoriteListComponent.prototype.showFavoritesActors = function () {
        this.showData = false;
    };
    FavoriteListComponent.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getFavoriteMovies()
            .subscribe(function (res) {
            _this.movies = res;
        }, function (error) {
            console.log(error);
        });
    };
    FavoriteListComponent.prototype.getActors = function () {
        var _this = this;
        this.actorService.getFavoriteActors()
            .subscribe(function (res) {
            _this.actors = res;
            console.log(_this.actors);
        }, function (error) {
            console.log(error);
        });
    };
    FavoriteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorite-list',
            template: __webpack_require__(/*! ./favorite-list.component.html */ "./src/app/modules/shared/favorite-list/favorite-list.component.html"),
            styles: [__webpack_require__(/*! ./favorite-list.component.scss */ "./src/app/modules/shared/favorite-list/favorite-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_movie_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _actor_services_actor_service__WEBPACK_IMPORTED_MODULE_2__["ActorService"]])
    ], FavoriteListComponent);
    return FavoriteListComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <mat-divider></mat-divider>\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" class=\"footer__text\">\n      <p>Created by\n        <a href=\"https://github.com/dejuata\" target=\"_blank\">Juan David Pino</a>\n      </p>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <mat-icon color=\"warn\" class=\"footer__icon\">favorite</mat-icon>\n        <p>AlertLogic</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-top: 2rem; }\n  .footer__text {\n    padding: 1rem 0; }\n  .footer__icon {\n    margin-right: 0.5rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/form/form.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/form/form.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div fxLayout=\"column\" class=\"form__container\">\n    <h2 class=\"form__title\">Welcome to Al Movie</h2>\n    <mat-form-field>\n      <input matInput [formControl]=\"emailFormControl\" placeholder=\"Email\" [(ngModel)]=\"data.email\" (ngModelChange)=\"checkData()\">\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [formControl]=\"passwordFormControl\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"data.password\" (ngModelChange)=\"checkData()\">\n      <mat-error *ngIf=\"passwordFormControl.hasError('minLength')\">\n        The password must have a minimum of\n        <strong>6 characters</strong>\n      </mat-error>\n      <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n        Password is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <br>\n    <button mat-raised-button color=\"primary\" class=\"form__btn\" value=\"\" (click)=\"sendData()\" [disabled]=\"disabled\">\n      <ng-container *ngIf=\"login; else register\">\n        Login\n      </ng-container>\n      <ng-template #register>\n        Register\n      </ng-template>\n    </button>\n    <button mat-raised-button class=\"form__btn\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/form/form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/form/form.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form__container {\n  width: 50%;\n  margin: 11.5rem auto 0;\n  text-align: center;\n  background-color: #f4f4f4;\n  padding: 2rem;\n  border-radius: 2px; }\n\n.form__title {\n  margin-top: 0; }\n\n.form__btn {\n  margin-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/shared/form/form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/form/form.component.ts ***!
  \*******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.data = {
            'email': '',
            'password': ''
        };
        this.disabled = true;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
        ]);
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.sendData = function () {
        this.disabled = false;
        return this.user.emit(this.data);
    };
    FormComponent.prototype.checkData = function () {
        if (this.data.email !== '' && this.data.password !== '') {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "login", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "user", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/modules/shared/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/modules/shared/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/home/home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/home/home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between\" style=\"padding-bottom: 3rem;\">\n  <div dragScroll drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\" class=\"home__carousel-header\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n      <ng-container *ngFor=\"let movie of popularMovies\">\n        <div class=\"home__cover\" [ngStyle]=\"{ 'background': 'url(' + movie.backdrop_path + ')'}\">\n          <div class=\"home__shadow\" fxLayout=\"column-reverse\">\n            <div class=\"home__info\">\n              <a routerLink=\"/movies/{{movie.id}}\" class=\"a\">\n                <h3 class=\"home__title\">{{ movie.title }}</h3>\n                <h5 class=\"home__subtitle\">{{ movie.release_date }}</h5>\n              </a>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <ng-container *ngFor=\"let genre of genres\">\n      <mat-divider></mat-divider>\n      <h3>{{ genre | titlecase }} movie</h3>\n      <div class=\"home__carousel\" dragScroll drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\" #nav>\n          <div fxLayout=\"row\">\n            <ng-container *ngFor=\"let movie of movies[genre]\">\n              <div class=\"home__card\">\n                <app-card-movie [movie]=\"movie\" [compactView]=\"true\"></app-card-movie>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/home/home.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/home/home.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home__cover {\n  height: 282px;\n  width: 500px;\n  background: no-repeat center;\n  background-size: cover;\n  position: relative;\n  transition: .3s; }\n\n.home__shadow {\n  height: 282px;\n  width: 500px;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)); }\n\n.home__info {\n  padding: 2rem; }\n\n.home__title {\n  margin: 0;\n  font-size: 1.5rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  color: #fff; }\n\n.home__subtitle {\n  margin: 0;\n  color: #fff; }\n\n.home__container--one {\n  width: 30%;\n  padding: 0 2rem 0 0; }\n\n.home__container--two {\n  width: 70%;\n  padding: 0 0 0 2rem; }\n\n.home__card {\n  margin: -2rem 0 0;\n  padding: 1rem; }\n\n.home__carousel {\n  height: 320px; }\n\n.home__carousel-header {\n  overflow-x: hidden !important; }\n"

/***/ }),

/***/ "./src/app/modules/shared/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie/services/movie.service */ "./src/app/modules/movie/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService) {
        this.movieService = movieService;
        this.leftNavDisabled = false;
        this.rightNavDisabled = false;
        // public movies: any[] = [];
        this.genres = ['action', 'animation', 'family', 'horror', 'romance', 'thriller'];
        this.movies = {};
        this.popularMovies = [];
        this.getPopularMovies();
        // this.getGenresMovies('action');
        // console.log(this.movies);
        this.getAllGenresMovies();
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.getAllGenresMovies();
    };
    HomeComponent.prototype.getPopularMovies = function () {
        var _this = this;
        this.movieService.getListMovies('popular', 1)
            .subscribe(function (data) {
            _this.popularMovies = data.movies;
        }, function (error) {
            console.error(error);
        });
    };
    HomeComponent.prototype.getGenresMovies = function (value) {
        var _this = this;
        this.movieService.getDiscoverMovie(value)
            .subscribe(function (data) {
            // this.movies.push(data.movies);
            _this.movies[value] = data.movies;
        }, function (error) {
            console.error(error);
        });
    };
    HomeComponent.prototype.getAllGenresMovies = function () {
        for (var i = 0; i < this.genres.length; i++) {
            this.getGenresMovies(this.genres[i]);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/shared/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/shared/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_movie_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/navbar/navbar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/navbar/navbar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" role=\"heading\">\n  <mat-toolbar-row class=\"nav-header\">\n    <button mat-button class=\"nav-brand\" routerLink=\"\">\n      Al Movie\n    </button>\n\n    <button mat-button routerLink=\"/movies\">\n      <mat-icon>movie</mat-icon>\n      Movies\n    </button>\n\n    <button mat-button routerLink=\"/actors\">\n      <mat-icon>face</mat-icon>\n      Actors\n    </button>\n\n    <span class=\"nav-spacer\"></span>\n\n    <ng-container *ngIf=\"!loggedIn\">\n      <button mat-button routerLink=\"/user/login\">\n        <mat-icon class=\"example-icon\">people</mat-icon>\n        Login\n      </button>\n\n      <button mat-button routerLink=\"/user/register\">\n        <mat-icon class=\"example-icon\">rowing</mat-icon>\n        Sign Up\n      </button>\n    </ng-container>\n\n    <ng-container *ngIf=\"loggedIn\">\n      <button mat-button routerLink=\"/user/favorites\">\n        <mat-icon class=\"example-icon\">favorite</mat-icon>\n        Favorites\n      </button>\n      <button mat-button (click)=\"logout()\">\n        <mat-icon class=\"example-icon\">input</mat-icon>\n        Logout\n      </button>\n    </ng-container>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/modules/shared/navbar/navbar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/navbar/navbar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-header {\n  height: 80px; }\n\n.nav-brand {\n  font-size: 2rem;\n  height: 100%; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.mat-toolbar-row, .mat-toolbar-single-row {\n  padding: 0 5rem !important; }\n\n.search-bar {\n  background-color: #222; }\n\n.search-bar * {\n  color: white !important; }\n\n.search-bar input {\n  border-bottom-color: white; }\n\n.md-errors-spacer {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/modules/shared/navbar/navbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.loggedIn = false;
        this.userIsLogged();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.userIsLogged = function () {
        var _this = this;
        this.authService.isLogged()
            .subscribe(function (res) {
            if (res && res.uid) {
                _this.loggedIn = true;
            }
            else {
                _this.loggedIn = false;
            }
        }, function (error) {
            _this.loggedIn = false;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/modules/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/modules/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/paginator/paginator.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/paginator/paginator.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" (page)=\"page($event)\" >\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/modules/shared/paginator/paginator.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/paginator/paginator.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shared/paginator/paginator.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/paginator/paginator.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
        this.pageIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent.prototype.page = function (event) {
        return this.pageIndex.emit(event.pageIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "length", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "pageIndex", void 0);
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/modules/shared/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/modules/shared/paginator/paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/search/search.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/search/search.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container alternative\">\n\n  <mat-form-field class=\"search-form\">\n    <button class=\"search-btn\" mat-button matPrefix mat-icon-button>\n      <mat-icon>search</mat-icon>\n    </button>\n\n    <input type=\"text\" placeholder=\"Search your favorite movies and actors\" class=\"search-input\"\n      matInput [formControl]=\"searchTerm\" [matAutocomplete]=\"auto\" [(ngModel)]=\"value\">\n\n    <button class=\"search-btn\" mat-button matSuffix mat-icon-button (click)=\"clearResults()\">\n      <mat-icon>close</mat-icon>\n    </button>\n\n    <mat-autocomplete #auto=\"matAutocomplete\" class=\"mat-autocomplete-panel\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly\">\n        <mat-option *ngFor=\"let item of searchResult\" [value]=\"item.title || item.name\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n            <ng-container *ngIf=\"item.name; else card_movie\">\n              <app-card-actor [actor]=\"item\" [styleMovie]=\"true\" [hideName]=\"true\"></app-card-actor>\n            </ng-container>\n            <ng-template #card_movie>\n              <app-card-movie [movie]=\"item\" [compactView]=\"true\" [styleActor]=\"true\"></app-card-movie>\n            </ng-template>\n          </div>\n        </mat-option>\n      </div>\n    </mat-autocomplete>\n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shared/search/search.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/search/search.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  width: 100%;\n  background-color: #222;\n  text-align: center;\n  color: #fff; }\n\n.search-form {\n  width: 80%; }\n\n.search-input {\n  padding: 0; }\n\n.search-btn {\n  color: #fff; }\n\n.mat-option {\n  height: 278px !important; }\n"

/***/ }),

/***/ "./src/app/modules/shared/search/search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/search/search.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "./src/app/modules/shared/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.value = '';
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchResult = [];
        // this.searchMovieOrActor('scarlett');
        this.searchTerm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400))
            .subscribe(function (value) {
            _this.searchMovieOrActor(value.toLowerCase());
        });
    }
    SearchComponent.prototype.searchMovieOrActor = function (value) {
        var _this = this;
        this.searchService.getMultiSearch(value)
            .subscribe(function (data) {
            _this.searchResult = data.results;
            console.log(data);
        });
    };
    SearchComponent.prototype.clearResults = function () {
        this.value = '';
        this.searchResult = [];
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/shared/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/modules/shared/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/services/search.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/services/search.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _types_search_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/search.type */ "./src/app/modules/shared/types/search.type.ts");
/* harmony import */ var _actor_services_actor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actor/services/actor.service */ "./src/app/modules/actor/services/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchService = /** @class */ (function () {
    function SearchService(http, actorService) {
        this.http = http;
        this.actorService = actorService;
    }
    SearchService.prototype.url = function (endpoint) {
        return "https://api.themoviedb.org/3/search/" + endpoint;
    };
    SearchService.prototype.getMultiSearch = function (value) {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var endpoint = "multi?query=" + value;
        return this.http.get(this.url(endpoint))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // tslint:disable-next-line:prefer-const
            var result = _types_search_type__WEBPACK_IMPORTED_MODULE_3__["SearchDescriptor"].import(data);
            // console.log(result);
            _this.actorService.sortData(result.results, 'vote_count');
            console.log(result);
            return result;
        }));
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _actor_services_actor_service__WEBPACK_IMPORTED_MODULE_4__["ActorService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/shared-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/shared/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var SharedRoutingModule = /** @class */ (function () {
    function SharedRoutingModule() {
    }
    SharedRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SharedRoutingModule);
    return SharedRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-routing.module */ "./src/app/modules/shared/shared-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _pipes_linkifystr_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../pipes/linkifystr.pipe */ "./src/app/pipes/linkifystr.pipe.ts");
/* harmony import */ var _actor_actor_home_top5_actor_home_top5_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../actor/actor-home-top5/actor-home-top5.component */ "./src/app/modules/actor/actor-home-top5/actor-home-top5.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/shared/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/modules/shared/navbar/navbar.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/search.component */ "./src/app/modules/shared/search/search.component.ts");
/* harmony import */ var _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./detail-info/detail-info.component */ "./src/app/modules/shared/detail-info/detail-info.component.ts");
/* harmony import */ var _detail_header_detail_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./detail-header/detail-header.component */ "./src/app/modules/shared/detail-header/detail-header.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/modules/shared/paginator/paginator.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/shared/footer/footer.component.ts");
/* harmony import */ var _card_movie_card_movie_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./card-movie/card-movie.component */ "./src/app/modules/shared/card-movie/card-movie.component.ts");
/* harmony import */ var _card_actor_card_actor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./card-actor/card-actor.component */ "./src/app/modules/shared/card-actor/card-actor.component.ts");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/index.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./form/form.component */ "./src/app/modules/shared/form/form.component.ts");
/* harmony import */ var _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./favorite-list/favorite-list.component */ "./src/app/modules/shared/favorite-list/favorite-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Flex

// Material












// Pipes


// Component Actor

// Component












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_29__["DragScrollModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_17__["KeysPipe"],
                _pipes_linkifystr_pipe__WEBPACK_IMPORTED_MODULE_18__["LinkifystrPipe"],
                _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_23__["DetailInfoComponent"],
                _detail_header_detail_header_component__WEBPACK_IMPORTED_MODULE_24__["DetailHeaderComponent"],
                _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__["PaginatorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _card_movie_card_movie_component__WEBPACK_IMPORTED_MODULE_27__["CardMovieComponent"],
                _actor_actor_home_top5_actor_home_top5_component__WEBPACK_IMPORTED_MODULE_19__["ActorHomeTop5Component"],
                _card_actor_card_actor_component__WEBPACK_IMPORTED_MODULE_28__["CardActorComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_30__["FormComponent"],
                _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_31__["FavoriteListComponent"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _card_movie_card_movie_component__WEBPACK_IMPORTED_MODULE_27__["CardMovieComponent"],
                _card_actor_card_actor_component__WEBPACK_IMPORTED_MODULE_28__["CardActorComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _detail_info_detail_info_component__WEBPACK_IMPORTED_MODULE_23__["DetailInfoComponent"],
                _detail_header_detail_header_component__WEBPACK_IMPORTED_MODULE_24__["DetailHeaderComponent"],
                _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_25__["PaginatorComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_30__["FormComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/types/favorite.type.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shared/types/favorite.type.ts ***!
  \*******************************************************/
/*! exports provided: FavoriteListDescriptor, FavoriteDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListDescriptor", function() { return FavoriteListDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteDescriptor", function() { return FavoriteDescriptor; });
var FavoriteListDescriptor = /** @class */ (function () {
    function FavoriteListDescriptor() {
        this.favorites = [];
    }
    FavoriteListDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var favorites = new FavoriteListDescriptor();
        var favorite;
        for (var i = 0; i < rawData.length; i++) {
            // tslint:disable-next-line:prefer-const
            var row = rawData[i];
            favorite = FavoriteDescriptor.import(row);
            favorites.favorites.push(favorite);
        }
        return favorites;
    };
    return FavoriteListDescriptor;
}());

var FavoriteDescriptor = /** @class */ (function () {
    function FavoriteDescriptor() {
        this.favorite = false;
    }
    FavoriteDescriptor.import = function (rawData) {
        if (rawData != null) {
            // tslint:disable-next-line:prefer-const
            var favorite = new FavoriteDescriptor();
            favorite.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
            favorite.favorite = rawData.hasOwnProperty('favorite') ? rawData.favorite : false;
            if (rawData.info) {
                var path = rawData.info.poster_path;
                path = path.replace('w600', 'w185');
                path = path.replace('h900', 'h278');
                rawData.info.poster_path = path;
            }
            favorite.info = rawData.hasOwnProperty('info') ? rawData.info : {};
            return favorite;
        }
        else {
            return null;
        }
    };
    return FavoriteDescriptor;
}());



/***/ }),

/***/ "./src/app/modules/shared/types/search.type.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shared/types/search.type.ts ***!
  \*****************************************************/
/*! exports provided: SearchDescriptor, ActorCardMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDescriptor", function() { return SearchDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorCardMovie", function() { return ActorCardMovie; });
/* harmony import */ var _movie_types_movie_list_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../movie/types/movie-list.type */ "./src/app/modules/movie/types/movie-list.type.ts");
/* harmony import */ var _actor_types_actor_list_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actor/types/actor-list.type */ "./src/app/modules/actor/types/actor-list.type.ts");


var SearchDescriptor = /** @class */ (function () {
    function SearchDescriptor() {
        this.results = [];
    }
    SearchDescriptor.import = function (rawData) {
        // tslint:disable-next-line:prefer-const
        var list = new SearchDescriptor();
        list.paginator = _movie_types_movie_list_type__WEBPACK_IMPORTED_MODULE_0__["MoviePaginatorDescriptor"].import({
            total_pages: rawData.total_pages,
            page_size: rawData.results.length
        });
        var result;
        if (rawData.hasOwnProperty('results')) {
            for (var i = 0; i < rawData.results.length; i++) {
                // tslint:disable-next-line:prefer-const
                var row = rawData.results[i];
                if (row.media_type === 'movie') {
                    result = _movie_types_movie_list_type__WEBPACK_IMPORTED_MODULE_0__["MovieSummaryDescriptor"].import(row);
                    list.results.push(result);
                }
                if (row.media_type === 'person') {
                    result = _actor_types_actor_list_type__WEBPACK_IMPORTED_MODULE_1__["ActorSummaryDescriptor"].import(row, 'https://image.tmdb.org/t/p/w138_and_h175_face');
                    list.results.push(result);
                }
            }
        }
        return list;
    };
    return SearchDescriptor;
}());

var ActorCardMovie = /** @class */ (function () {
    function ActorCardMovie() {
    }
    return ActorCardMovie;
}());



/***/ }),

/***/ "./src/app/pipes/duration-time.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/duration-time.pipe.ts ***!
  \*********************************************/
/*! exports provided: DurationTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationTimePipe", function() { return DurationTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationTimePipe = /** @class */ (function () {
    function DurationTimePipe() {
    }
    DurationTimePipe.prototype.transform = function (value) {
        var hours = Math.floor(value / 60);
        var minutes = value % 60;
        return hours + "h " + minutes + "m";
    };
    DurationTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'durationTime'
        })
    ], DurationTimePipe);
    return DurationTimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        // tslint:disable-next-line:prefer-const
        var keys = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            keys.push({ key: key.split('_').join(' '), value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/linkifystr.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/linkifystr.pipe.ts ***!
  \******************************************/
/*! exports provided: LinkifystrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkifystrPipe", function() { return LinkifystrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var linkifyjs_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! linkifyjs/string */ "./node_modules/linkifyjs/string.js");
/* harmony import */ var linkifyjs_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_string__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LinkifystrPipe = /** @class */ (function () {
    function LinkifystrPipe() {
    }
    LinkifystrPipe.prototype.transform = function (str) {
        return str ? linkifyjs_string__WEBPACK_IMPORTED_MODULE_1___default()(str, { target: '_system' }) : str;
    };
    LinkifystrPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'linkifystr'
        })
    ], LinkifystrPipe);
    return LinkifystrPipe;
}());



/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limite) {
        // tslint:disable-next-line:radix
        var limit = parseInt(limite);
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiKey: '5421a9a38653bf083798a7f242aa143b',
    firebase: {
        apiKey: 'AIzaSyDL-VfFqD1KhTP73WkEATmZBH3OBlR7BHM',
        authDomain: 'almovie-7615a.firebaseapp.com',
        databaseURL: 'https://almovie-7615a.firebaseio.com',
        projectId: 'almovie-7615a',
        storageBucket: 'almovie-7615a.appspot.com',
        messagingSenderId: '1003940179396'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dejuata/Escritorio/alert_logic/project/al-movie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
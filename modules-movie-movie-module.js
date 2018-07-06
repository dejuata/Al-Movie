(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-movie-movie-module"],{

/***/ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail-video/movie-detail-video.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"video__card\">\n  <iframe mat-card-image id=\"player\" [src]=\"video.url | safe\" type=\"text/html\" width=\"560\" height=\"340\"\n    frameborder=\"0\" allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" oallowfullscreen=\"true\" msallowfullscreen=\"true\">\n  </iframe>\n  <mat-card-footer>\n    <a href=\"{{video.url_youtube}}\" target=\"_blank\" class=\"a\">\n      <mat-card-title class=\"video__title\">{{ video.name }}</mat-card-title>\n    </a>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail-video/movie-detail-video.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video__card {\n  width: 600px;\n  margin: 2rem 0; }\n\n.video__title {\n  margin-bottom: 0 !important;\n  font-size: 1.2rem;\n  padding: 0 1rem 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail-video/movie-detail-video.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MovieDetailVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailVideoComponent", function() { return MovieDetailVideoComponent; });
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

var MovieDetailVideoComponent = /** @class */ (function () {
    function MovieDetailVideoComponent() {
    }
    MovieDetailVideoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieDetailVideoComponent.prototype, "video", void 0);
    MovieDetailVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-detail-video',
            template: __webpack_require__(/*! ./movie-detail-video.component.html */ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail-video.component.scss */ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieDetailVideoComponent);
    return MovieDetailVideoComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-detail/movie-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail/movie-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-detail-header [data]=\"movie.header\"></app-detail-header>\n\n<div fxLayout=\"row\" fxlayoutalign=\"space-between center\" class=\"container\">\n\n  <div class=\"detail__container--one\">\n    <app-detail-info [info]=\"movie.info\" [genres]=\"movie.genres\" (saveFavorite)=\"listenFavorite($event)\" [favorite]=\"favorite.favorite\"></app-detail-info>\n  </div>\n\n  <div class=\"detail__container--two\">\n    <mat-tab-group mat-stretch-tabs class=\"detail__tabs\" (selectedTabChange)=\"tabChange($event)\">\n      <mat-tab label=\"Casting\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"detail__slide\">\n          <mat-slide-toggle (change)=\"changeSlide($event)\">Full Cast</mat-slide-toggle>\n        </div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n          <ng-container *ngFor=\"let actor of cast\">\n            <app-card-actor [actor]=\"actor\" [styleMovie]=\"true\"></app-card-actor>\n          </ng-container>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Trailers\">\n        <ng-container *ngFor=\"let video of videos.trailer\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <app-movie-detail-video [video]=\"video\"></app-movie-detail-video>\n          </div>\n        </ng-container>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n\n<div fxLayout=\"column\" fxLayoutAlign=\"start\" class=\"container detail__container--three\">\n  <mat-divider></mat-divider>\n  <h2>Recommendations</h2>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n    <ng-container *ngFor=\"let movie of recommendation\">\n      <app-card-movie [movie]=\"movie\" [compactView]=\"true\" [styleActor]=\"true\"></app-card-movie>\n    </ng-container>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-detail/movie-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail/movie-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail__container--one {\n  width: 30%; }\n\n.detail__container--two {\n  width: 70%; }\n\n.detail__container--three {\n  padding: 4rem 0 0; }\n\n.detail__tabs {\n  width: 100%; }\n\n.detail__slide {\n  padding: 2rem 0 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-detail/movie-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/movie/movie-detail/movie-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/modules/movie/services/movie.service.ts");
/* harmony import */ var _types_movie_videos_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/movie-videos.type */ "./src/app/modules/movie/types/movie-videos.type.ts");
/* harmony import */ var _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/types/favorite.type */ "./src/app/modules/shared/types/favorite.type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService) {
        var _this = this;
        this.route = route;
        this.movieService = movieService;
        this.cast = [];
        this.videos = new _types_movie_videos_type__WEBPACK_IMPORTED_MODULE_3__["MovieVideosDescriptor"];
        this.recommendation = [];
        this.favorite = new _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_4__["FavoriteDescriptor"]();
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.getDetailMovie(_this.id);
            _this.getCreditsMovie(_this.id);
            _this.getRecommendationsMovie(_this.id);
            _this.isFavorite(_this.id);
        });
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    MovieDetailComponent.prototype.getDetailMovie = function (id) {
        var _this = this;
        this.movieService.getDetailMovie(id)
            .subscribe(function (data) {
            _this.movie = data;
        }, function (error) {
            console.error(error);
        });
    };
    MovieDetailComponent.prototype.getCreditsMovie = function (id) {
        var _this = this;
        this.movieService.getCreditsMovie(id)
            .subscribe(function (data) {
            _this.casting = data;
            _this.cast = _this.casting.cast.slice(0, 12);
        }, function (error) {
            console.error(error);
        });
    };
    MovieDetailComponent.prototype.getVideosMovie = function (id) {
        var _this = this;
        this.movieService.getVideosMovie(id)
            .subscribe(function (data) {
            _this.videos = data;
        }, function (error) {
            console.error(error);
        });
    };
    MovieDetailComponent.prototype.getRecommendationsMovie = function (id) {
        var _this = this;
        this.movieService.getRecommendationsMovie(id)
            .subscribe(function (data) {
            _this.recommendation = data.recommendation;
        }, function (error) {
            console.error(error);
        });
    };
    MovieDetailComponent.prototype.tabChange = function (event) {
        if (event.tab.textLabel === 'Trailers' && this.videos.trailer.length === 0) {
            this.getVideosMovie(this.id);
            console.log(this.videos);
        }
    };
    MovieDetailComponent.prototype.changeSlide = function (event) {
        if (!event.checked) {
            this.cast = this.casting.cast.slice(0, 12);
        }
        else {
            this.cast = this.casting.cast;
        }
    };
    MovieDetailComponent.prototype.listenFavorite = function (event) {
        var data = {
            id: this.movie.id,
            info: this.movie.header,
            favorite: event
        };
        this.movieService.saveFavoriteMovie(data);
    };
    MovieDetailComponent.prototype.isFavorite = function (id) {
        var _this = this;
        this.movieService.getFavoriteMovie(id)
            .subscribe(function (res) {
            if (res != null) {
                _this.favorite = res;
            }
        }, function (error) {
            console.error(error);
        });
    };
    MovieDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/modules/movie/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/modules/movie/movie-detail/movie-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/movie/movie-list-menu/movie-list-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let option of options\">\n  <button mat-button color=\"accent\" (click)=\"optionClicked(option)\">{{ option | titlecase }}</button>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/movie/movie-list-menu/movie-list-menu.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/movie/movie-list-menu/movie-list-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: MovieListMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListMenuComponent", function() { return MovieListMenuComponent; });
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

var MovieListMenuComponent = /** @class */ (function () {
    function MovieListMenuComponent() {
        this.optionMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MovieListMenuComponent.prototype.optionClicked = function (opt) {
        return this.optionMenu.emit(opt);
    };
    MovieListMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MovieListMenuComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MovieListMenuComponent.prototype, "optionMenu", void 0);
    MovieListMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list-menu',
            template: __webpack_require__(/*! ./movie-list-menu.component.html */ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-menu.component.scss */ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieListMenuComponent);
    return MovieListMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-list/movie-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/movie/movie-list/movie-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"list__menu\">\n    <app-movie-list-menu [options]=\"menu\" (optionMenu)=\"listenMenu($event)\"></app-movie-list-menu>\n    <mat-slide-toggle (change)=\"changeSlide($event)\">Compact View</mat-slide-toggle>\n  </div>\n\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n    <ng-container *ngFor=\"let movie of movies.movies\">\n      <app-card-movie [movie]=\"movie\" [compactView]=\"checkedSlide\"></app-card-movie>\n    </ng-container>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <app-paginator\n      [length]=\"movies.paginator.total_pages\"\n      [pageSize]=\"movies.paginator.page_size\"\n      (pageIndex)=\"listenPaginator($event)\">\n    </app-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-list/movie-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/movie/movie-list/movie-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list__menu {\n  padding: 2rem 0 1rem; }\n"

/***/ }),

/***/ "./src/app/modules/movie/movie-list/movie-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/movie/movie-list/movie-list.component.ts ***!
  \******************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/modules/movie/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService) {
        this.movieService = movieService;
        this.menu = ['popular', 'top rated', 'upcoming', 'now playing'];
        this.option = 'popular';
        this.page = 1;
        this.checkedSlide = false;
        this.getListMovies(this.option, this.page);
    }
    MovieListComponent.prototype.listenMenu = function (event) {
        this.option = event.split(' ').join('_');
        this.getListMovies(this.option, this.page);
    };
    MovieListComponent.prototype.listenPaginator = function (event) {
        // le sumo mas 1 porque el componente returna el index de la pagina desde 0
        // y la url de la api empieza desde 1
        this.page = event + 1;
        this.getListMovies(this.option, this.page);
    };
    MovieListComponent.prototype.changeSlide = function (event) {
        this.checkedSlide = event.checked;
    };
    MovieListComponent.prototype.getListMovies = function (opt, page) {
        var _this = this;
        this.movieService.getListMovies(opt, page)
            .subscribe(function (data) {
            _this.movies = data;
        }, function (error) {
            console.error(error);
        });
    };
    MovieListComponent.prototype.ngOnInit = function () {
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/modules/movie/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/modules/movie/movie-list/movie-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/movie/movie-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MovieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function() { return MovieRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/modules/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/modules/movie/movie-detail/movie-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"] },
    { path: ':id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"] }
];
var MovieRoutingModule = /** @class */ (function () {
    function MovieRoutingModule() {
    }
    MovieRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MovieRoutingModule);
    return MovieRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/movie/movie.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/movie/movie.module.ts ***!
  \***********************************************/
/*! exports provided: MovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function() { return MovieModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-routing.module */ "./src/app/modules/movie/movie-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/safe.pipe */ "./src/app/pipes/safe.pipe.ts");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/modules/movie/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_list_menu_movie_list_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie-list-menu/movie-list-menu.component */ "./src/app/modules/movie/movie-list-menu/movie-list-menu.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/modules/movie/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movie_detail_video_movie_detail_video_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie-detail-video/movie-detail-video.component */ "./src/app/modules/movie/movie-detail-video/movie-detail-video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules

// Flex

// Material





// Pipes

// Component




var MovieModule = /** @class */ (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]
            ],
            declarations: [
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["MovieListComponent"],
                _movie_list_menu_movie_list_menu_component__WEBPACK_IMPORTED_MODULE_12__["MovieListMenuComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
                _movie_detail_video_movie_detail_video_component__WEBPACK_IMPORTED_MODULE_14__["MovieDetailVideoComponent"],
                _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
            ],
            exports: []
        })
    ], MovieModule);
    return MovieModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ })

}]);
//# sourceMappingURL=modules-movie-movie-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-actor-actor-module"],{

/***/ "./src/app/modules/actor/actor-detail/actor-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/actor/actor-detail/actor-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-detail-header [data]=\"actor.header\"></app-detail-header>\n\n<div fxLayout=\"row\" fxlayoutalign=\"space-between center\" class=\"container\">\n  <div class=\"detail__container--one\">\n    <app-detail-info [info]=\"actor.info\" (saveFavorite)=\"listenFavorite($event)\" [favorite]=\"favorite.favorite\"></app-detail-info>\n  </div>\n  <div class=\"detail__container--two\">\n    <mat-tab-group mat-stretch-tabs class=\"detail__tabs\" (selectedTabChange)=\"tabChange($event)\">\n      <mat-tab label=\"Known For\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"detail__slide\">\n          <mat-slide-toggle (change)=\"changeSlide($event)\">Full Movies</mat-slide-toggle>\n        </div>\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n          <ng-container *ngFor=\"let movie of cast\">\n            <div class=\"detail__movie\">\n                <app-card-movie [movie]=\"movie\" [compactView]=\"true\" [styleActor]=\"true\"></app-card-movie>\n            </div>\n          </ng-container>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Images\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n          <ng-container *ngFor=\"let image of images.images\">\n            <a href=\"{{image.file_url}}\" target=\"_blank\">\n              <mat-card class=\"image__container\">\n                <img mat-card-image src=\"{{image.file_path}}\" alt=\"{{actor.header.title}}\">\n              </mat-card>\n            </a>\n          </ng-container>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/actor/actor-detail/actor-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/actor/actor-detail/actor-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail__container--one {\n  width: 30%; }\n\n.detail__container--two {\n  width: 70%; }\n\n.detail__slide {\n  padding: 2rem 0; }\n\n.detail__tabs {\n  width: 100%; }\n\n.detail__movie {\n  margin: 0 1rem 2rem 0; }\n\n.mat-card {\n  padding: 24px 24px 0; }\n\n.image__container {\n  height: 280px;\n  width: 170px;\n  margin: 2rem 0; }\n"

/***/ }),

/***/ "./src/app/modules/actor/actor-detail/actor-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/actor/actor-detail/actor-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorDetailComponent", function() { return ActorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/actor.service */ "./src/app/modules/actor/services/actor.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _types_actor_images_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/actor-images.type */ "./src/app/modules/actor/types/actor-images.type.ts");
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





var ActorDetailComponent = /** @class */ (function () {
    function ActorDetailComponent(route, actorService) {
        this.route = route;
        this.actorService = actorService;
        this.cast = [];
        this.images = new _types_actor_images_type__WEBPACK_IMPORTED_MODULE_3__["ActorImagesDescriptor"];
        this.favorite = new _shared_types_favorite_type__WEBPACK_IMPORTED_MODULE_4__["FavoriteDescriptor"]();
        this.id = this.route.snapshot.params['id'];
        this.getDetailActor(this.id);
        this.getCreditsActor(this.id);
        this.isFavorite(this.id);
    }
    ActorDetailComponent.prototype.ngOnInit = function () {
    };
    ActorDetailComponent.prototype.getDetailActor = function (id) {
        var _this = this;
        this.actorService.getDetailActor(id)
            .subscribe(function (data) {
            _this.actor = data;
        }, function (error) {
            console.error(error);
        });
    };
    ActorDetailComponent.prototype.getCreditsActor = function (id) {
        var _this = this;
        this.actorService.getCreditsActor(id)
            .subscribe(function (data) {
            _this.casting = data;
            _this.cast = _this.casting.cast.slice(0, 8);
        }, function (error) {
            console.error(error);
        });
    };
    ActorDetailComponent.prototype.getImagesActor = function (id) {
        var _this = this;
        this.actorService.getImagesActor(id)
            .subscribe(function (data) {
            _this.images = data;
        }, function (error) {
            console.error(error);
        });
    };
    ActorDetailComponent.prototype.changeSlide = function (event) {
        if (!event.checked) {
            this.cast = this.casting.cast.slice(0, 8);
        }
        else {
            this.cast = this.casting.cast;
        }
    };
    ActorDetailComponent.prototype.tabChange = function (event) {
        if (event.tab.textLabel === 'Images' && this.images.images.length === 0) {
            this.getImagesActor(this.id);
            console.log(this.images);
        }
    };
    ActorDetailComponent.prototype.listenFavorite = function (event) {
        var data = {
            id: this.actor.id,
            info: this.actor.header,
            favorite: event
        };
        this.actorService.saveFavoriteActor(data);
    };
    ActorDetailComponent.prototype.isFavorite = function (id) {
        var _this = this;
        this.actorService.getFavoriteActor(id)
            .subscribe(function (res) {
            console.log(res);
            if (res != null) {
                _this.favorite = res;
            }
        });
    };
    ActorDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-detail',
            template: __webpack_require__(/*! ./actor-detail.component.html */ "./src/app/modules/actor/actor-detail/actor-detail.component.html"),
            styles: [__webpack_require__(/*! ./actor-detail.component.scss */ "./src/app/modules/actor/actor-detail/actor-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], ActorDetailComponent);
    return ActorDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/actor/actor-list/actor-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/actor/actor-list/actor-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"list__title\">Popular People</h2>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n    <ng-container *ngFor=\"let actor of actors.actors\">\n      <app-card-actor [actor]=\"actor\"></app-card-actor>\n    </ng-container>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <app-paginator [length]=\"actors.paginator.total_pages\"\n      [pageSize]=\"actors.paginator.page_size\"\n      (pageIndex)=\"listenPaginator($event)\">\n    </app-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/actor/actor-list/actor-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/actor/actor-list/actor-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list__title {\n  width: 100%;\n  font-family: Roboto;\n  padding: 2rem 0 1rem 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/modules/actor/actor-list/actor-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/actor/actor-list/actor-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ActorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorListComponent", function() { return ActorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/actor.service */ "./src/app/modules/actor/services/actor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorListComponent = /** @class */ (function () {
    function ActorListComponent(actorService) {
        this.actorService = actorService;
        this.option = 'popular';
        this.page = 1;
        this.getListActors(this.option, this.page);
    }
    ActorListComponent.prototype.getListActors = function (opt, page) {
        var _this = this;
        this.actorService.getListActors(opt, page)
            .subscribe(function (data) {
            _this.actors = data;
        }, function (error) {
            console.error(error);
        });
    };
    ActorListComponent.prototype.listenPaginator = function (event) {
        this.page = event + 1;
        this.getListActors(this.option, this.page);
    };
    ActorListComponent.prototype.ngOnInit = function () {
    };
    ActorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actor-list',
            template: __webpack_require__(/*! ./actor-list.component.html */ "./src/app/modules/actor/actor-list/actor-list.component.html"),
            styles: [__webpack_require__(/*! ./actor-list.component.scss */ "./src/app/modules/actor/actor-list/actor-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_actor_service__WEBPACK_IMPORTED_MODULE_1__["ActorService"]])
    ], ActorListComponent);
    return ActorListComponent;
}());



/***/ }),

/***/ "./src/app/modules/actor/actor-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/actor/actor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ActorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorRoutingModule", function() { return ActorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actor-list/actor-list.component */ "./src/app/modules/actor/actor-list/actor-list.component.ts");
/* harmony import */ var _actor_detail_actor_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actor-detail/actor-detail.component */ "./src/app/modules/actor/actor-detail/actor-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_2__["ActorListComponent"] },
    { path: ':id', component: _actor_detail_actor_detail_component__WEBPACK_IMPORTED_MODULE_3__["ActorDetailComponent"] }
];
var ActorRoutingModule = /** @class */ (function () {
    function ActorRoutingModule() {
    }
    ActorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActorRoutingModule);
    return ActorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/actor/actor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/actor/actor.module.ts ***!
  \***********************************************/
/*! exports provided: ActorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorModule", function() { return ActorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _actor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actor-routing.module */ "./src/app/modules/actor/actor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actor-list/actor-list.component */ "./src/app/modules/actor/actor-list/actor-list.component.ts");
/* harmony import */ var _actor_detail_actor_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actor-detail/actor-detail.component */ "./src/app/modules/actor/actor-detail/actor-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Modules

// Flex

// Material



// Components


var ActorModule = /** @class */ (function () {
    function ActorModule() {
    }
    ActorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _actor_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActorRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"]
            ],
            declarations: [
                _actor_list_actor_list_component__WEBPACK_IMPORTED_MODULE_8__["ActorListComponent"],
                _actor_detail_actor_detail_component__WEBPACK_IMPORTED_MODULE_9__["ActorDetailComponent"],
            ],
            exports: []
        })
    ], ActorModule);
    return ActorModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-actor-actor-module.js.map
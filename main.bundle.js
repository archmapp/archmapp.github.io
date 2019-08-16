webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-log-form></app-log-form>\n  <app-logs></app-logs>\n  <hr>\n  <app-login></app-login>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_log_form_log_form_component__ = __webpack_require__("../../../../../src/app/components/log-form/log-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_logs_logs_component__ = __webpack_require__("../../../../../src/app/components/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_asObservable_login_component__ = __webpack_require__("../../../../../src/app/components/asObservable/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_log_form_log_form_component__["a" /* LogFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_logs_logs_component__["a" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_asObservable_login_component__["a" /* LoginComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_log_service__["a" /* LogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/asObservable/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/asObservable/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Subjectテスト -->\r\n<h3>Subject <---> asObservable</h3>\r\n<div class=\"text-center\">\r\n  <button class=\"btn text-center\" (click)=\"clickNext()\">Next</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/asObservable/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
// https://qiita.com/Yamamoto0525/items/efc0e5617c7427fea86a
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent() {
        this.loginSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */](); // 変更
        this.loginState = this.loginSubject.asObservable(); // 追加
        this.count = 0; // 追加
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginSubject.subscribe(function (data) {
            // this.loginState.subscribe((data: number) => {
            // 変更
            console.log(data);
        });
    };
    LoginComponent.prototype.clickNext = function () {
        // 追加
        this.count++;
        this.loginSubject.next(this.count);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/components/asObservable/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/asObservable/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/log-form/log-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-form/log-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-3\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"text\" [(ngModel)]=\"this.log.text\" class=\"form-control\" placeholder=\"Add a log...\">\n    </div>\n    <input type=\"submit\" value=\"Add Log\" class=\"btn btn-light\" [disabled]=\"!this.log.text\">\n    <button (click)=\"initLog()\" type=\"button\" class=\"btn btn-warning\" [hidden]=!this.log.text>Clear</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/log-form/log-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogFormComponent = (function () {
    function LogFormComponent(logService) {
        this.logService = logService;
        // id: string;
        // text: string;
        // date: any;
        this.log = this.logService.getlogNull();
    }
    LogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to the selectedLog observable
        this.logService.selectedLog.subscribe(function (log) {
            if (log.id !== null) {
                _this.log = log;
            }
            else {
                _this.log = log;
                // this.log = Object.assign({}, log);
            }
        });
    };
    LogFormComponent.prototype.onSubmit = function () {
        // Check if new log
        if (!this.log.id) {
            this.log.id = this.generateId();
            this.log.date = new Date();
            // Add log
            this.logService.addLog(this.log);
        }
        else {
            // Create log to be updated
            this.log.date = new Date();
            // Update log
            this.logService.updateLog(this.log);
        }
        // Clear state
        this.initLog();
    };
    LogFormComponent.prototype.initLog = function () {
        this.log = this.logService.getlogNull();
        this.logService.clearNext();
    };
    LogFormComponent.prototype.generateId = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    LogFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-log-form",
            template: __webpack_require__("../../../../../src/app/components/log-form/log-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-form/log-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]])
    ], LogFormComponent);
    return LogFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".log-date {\r\n  color: #777;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\" *ngIf=\"loaded && logs.length > 0\">\n  <li *ngFor=\"let log of logs\" [class.list-group-item-secondary]=\"selectedLog === log\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n    <a (click)=\"onSelect(log)\" href=\"#\">{{ log.text }}</a> \n    <span class=\"log-date\">{{ log.date | date: 'short'}}</span>\n    <i (click)=\"onDelete(log)\" class=\"fa fa-remove\"></i>\n  </li>\n</ul>\n\n<div *ngIf=\"loaded && logs.length == 0\">\n  <h5>There are no logs in the system</h5>\n</div>\n\n<div *ngIf=\"!loaded\">\n  <h5>Loading...</h5>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogsComponent = (function () {
    function LogsComponent(logService) {
        this.logService = logService;
        this.loaded = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.clearSelected.subscribe(function (clear) {
            if (clear) {
                _this.selectedLog = _this.logService.getlogNull();
            }
        });
        this.logService.getLogs().subscribe(function (logs) {
            _this.logs = logs;
            _this.loaded = true;
        });
    };
    LogsComponent.prototype.onSelect = function (log) {
        this.logService.logNext(log);
        this.selectedLog = log;
    };
    LogsComponent.prototype.onDelete = function (log) {
        if (confirm("Are you sure?")) {
            this.logService.deleteLog(log);
        }
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-logs",
            template: __webpack_require__("../../../../../src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-3\">\n  <div class=\"container\">\n    <a href=\"/\" class=\"navbar-brand\">DevLogger</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogService = (function () {
    function LogService() {
        // this.logs = [
        //   {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
        //   {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
        //   {id: '3', text: 'Added logs component', date: new Date('12/27/2017 12:00:23')}
        // ]
        this.logNull = { id: null, text: null, date: null };
        this.logSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.getlogNull());
        this.selectedLog = this.logSource.asObservable();
        this.clearSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.clearSelected = this.clearSource.asObservable();
        this.logs = [];
    }
    LogService.prototype.getlogNull = function () {
        return Object.assign({}, this.logNull);
    };
    LogService.prototype.getLogs = function () {
        if (localStorage.getItem("logs") === null) {
            this.logs = [];
        }
        else {
            this.logs = JSON.parse(localStorage.getItem("logs"));
        }
        // console.log(this.logs.sort((a, b) => b.date - a.date));
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.logs.sort(function (a, b) {
            return b.date - a.date; // desc
        }));
    };
    LogService.prototype.logNext = function (log) {
        this.logSource.next(log);
    };
    LogService.prototype.addLog = function (log) {
        this.logs.unshift(log);
        // Add to local storage
        localStorage.setItem("logs", JSON.stringify(this.logs));
    };
    LogService.prototype.updateLog = function (log) {
        var _this = this;
        this.logs.forEach(function (cur, index) {
            if (log.id === cur.id) {
                _this.logs.splice(index, 1);
            }
        });
        this.logs.unshift(log);
        localStorage
            .setItem("logs", JSON.stringify(this.logs));
    };
    LogService.prototype.deleteLog = function (log) {
        var _this = this;
        this.logs.forEach(function (cur, index) {
            if (log.id === cur.id) {
                _this.logs.splice(index, 1);
            }
        });
        localStorage.setItem("logs", JSON.stringify(this.logs));
    };
    LogService.prototype.clearNext = function () {
        this.clearSource.next(true);
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/components/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_portfolio_chris_soteros_chris_soteros_component__ = __webpack_require__("../../../../../src/app/components/portfolio/chris-soteros/chris-soteros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_portfolio_miri_miri_component__ = __webpack_require__("../../../../../src/app/components/portfolio/miri/miri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_portfolio_tobii_eyex_tobii_eyex_component__ = __webpack_require__("../../../../../src/app/components/portfolio/tobii-eyex/tobii-eyex.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'portfolio',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            },
            {
                path: 'uni-prof-portfolio',
                component: __WEBPACK_IMPORTED_MODULE_5__components_portfolio_chris_soteros_chris_soteros_component__["a" /* ChrisSoterosComponent */]
            },
            {
                path: 'miri-game',
                component: __WEBPACK_IMPORTED_MODULE_6__components_portfolio_miri_miri_component__["a" /* MiriComponent */]
            },
            {
                path: 'eye-tracking-research',
                component: __WEBPACK_IMPORTED_MODULE_7__components_portfolio_tobii_eyex_tobii_eyex_component__["a" /* TobiiEyeXComponent */]
            },
        ]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__components_about_me_about_me_component__["a" /* AboutMeComponent */]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<footer></footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.location = location;
        this.title = 'app';
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_portfolio_display_portfolio_display_component__ = __webpack_require__("../../../../../src/app/components/common/portfolio-display/portfolio-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_featured_work_featured_work_component__ = __webpack_require__("../../../../../src/app/components/home/featured-work/featured-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/components/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_common_skill_bar_skill_bar_component__ = __webpack_require__("../../../../../src/app/components/common/skill-bar/skill-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_when_in_view_directive__ = __webpack_require__("../../../../../src/app/directives/when-in-view.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_portfolio_chris_soteros_chris_soteros_component__ = __webpack_require__("../../../../../src/app/components/portfolio/chris-soteros/chris-soteros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_portfolio_miri_miri_component__ = __webpack_require__("../../../../../src/app/components/portfolio/miri/miri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_portfolio_tobii_eyex_tobii_eyex_component__ = __webpack_require__("../../../../../src/app/components/portfolio/tobii-eyex/tobii-eyex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_fade_to_top_directive__ = __webpack_require__("../../../../../src/app/directives/fade-to-top.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_parallax_directive__ = __webpack_require__("../../../../../src/app/directives/parallax.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_common_portfolio_display2_portfolio_display2_component__ = __webpack_require__("../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_common_portfolio_display_portfolio_display_component__["a" /* PortfolioDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_common_portfolio_display2_portfolio_display2_component__["a" /* PortfolioDisplay2Component */],
            __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_featured_work_featured_work_component__["a" /* FeaturedWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_common_skill_bar_skill_bar_component__["a" /* SkillBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__directives_when_in_view_directive__["a" /* WhenInViewDirective */],
            __WEBPACK_IMPORTED_MODULE_20__directives_fade_to_top_directive__["a" /* FadeToTopDirective */],
            __WEBPACK_IMPORTED_MODULE_21__directives_parallax_directive__["a" /* ParallaxDirective */],
            __WEBPACK_IMPORTED_MODULE_16__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_portfolio_chris_soteros_chris_soteros_component__["a" /* ChrisSoterosComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_portfolio_miri_miri_component__["a" /* MiriComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_portfolio_tobii_eyex_tobii_eyex_component__["a" /* TobiiEyeXComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_13__services_navigation_service__["a" /* NavigationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about-me-page-container\">\n  <div class=\"about-me-container\">\n    <div class=\"personal-image\">\n      <img src=\"assets/img/personal-image.jpg\">\n    </div>\n    <div class=\"about-me-message\">\n      <h3>I am a detail-oriented, quality-minded software developer with a focus on unique\n        and responsive user experience.</h3>\n\n      <p>I am a fourth-year student at the University of Saskatchewan studying Interactive Systems Design and\n        Computer Science. I am working towards becoming a full-stack developer, and am learning solid\n        foundational knowledge in both the back-end and the front-end. I am passionate about programming\n       and I love applying new knowledge to my personal projects.</p>\n\n      <p>I am currently working as a Developer intern at Farm Credit Canada, before returning to school to finish\n        the final year of my bachelor's degree.</p>\n\n      <p>I enjoy <span class=\"changing-word\">{{displayWord}}</span></p>\n    </div>\n  </div>\n  <div class=\"skills-container\">\n\n    <div class=\"skills-header\">\n      <h1>Skills</h1>\n      <div class=\"divider\"></div>\n    </div>\n\n    <div class=\"skills-body\">\n      <div class=\"skill-bar-container\">\n        <h2><i class=\"fa fa-desktop\"></i> Development</h2>\n        <h5>Languages, Frameworks, Libraries, Preprocessors</h5>\n        <skill-bar [skillName]=\"'HTML5/CSS3'\" [skillPercent]=\"'95'\"></skill-bar>\n        <skill-bar [skillName]=\"'Bootstrap'\" [skillPercent]=\"'90'\"></skill-bar>\n        <skill-bar [skillName]=\"'Java8'\" [skillPercent]=\"'75'\"></skill-bar>\n        <skill-bar [skillName]=\"'Angular2+/Typescript'\" [skillPercent]=\"'70'\"></skill-bar>\n        <skill-bar [skillName]=\"'Javascript/jQuery'\" [skillPercent]=\"'60'\"></skill-bar>\n        <skill-bar [skillName]=\"'C#'\" [skillPercent]=\"'35'\"></skill-bar>\n        <skill-bar [skillName]=\"'C++'\" [skillPercent]=\"'25'\"></skill-bar>\n        <skill-bar [skillName]=\"'Python'\" [skillPercent]=\"'10'\"></skill-bar>\n      </div>\n\n      <div class=\"skill-container-right\">\n        <div class=\"tools-container\">\n          <h2><i class=\"fa fa-wrench\"></i> Tools</h2>\n\n          <span>Git</span>\n          <span>Gradle</span>\n          <span>Spring</span>\n          <span>Postman</span>\n          <span>Unity</span>\n        </div>\n\n        <div class=\"other-container\">\n          <h2><i class=\"fa fa-book\"></i> Other</h2>\n\n          <span>TDD</span>\n          <span>Agile</span>\n          <span>Scrum</span>\n          <span>REST</span>\n          <span>Unix</span>\n          <span>Research</span>\n          <span>Responsive Design</span>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"experience-container\">\n    <h1>Experience</h1>\n    <div class=\"job-container hidden-before-view\" (whenInView)=\"triggerFadeIn($event)\">\n      <div class=\"company-image\">\n        <img src=\"assets/img/fcc_logo.jpg\">\n      </div>\n      <div class=\"job-description\">\n        <div class=\"job-header\">\n          <h3>Developer Intern</h3>\n          <span>May 2017 - Present</span>\n        </div>\n        <h4>Farm Credit Canada</h4>\n        Developed and maintained internal and customer-facing web applications. Collaborated closely on a team of\n        developers and analysts using the Agile development cycle and Scrum product development framework. Worked\n        in both the back-end and front-end of enterprise web development to deliver quality, scalable applications.\n        <div class=\"job-skill-tags\">\n          Java, Angular4, HTML, CSS/Sass, Git\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <a class=\"resume-link\" href=\"assets/BenLeech-Resume.pdf\" target=\"_blank\">\n    <div class=\"resume-container clickable\">\n      <span class=\"resume-title\">View my Resume</span>\n      <span class=\"btn-open\"><i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i></span>\n    </div>\n  </a>\n\n  <div class=\"education-container\">\n    <h1>Education</h1>\n    <div class=\"education-node-container hidden-before-view\" (whenInView)=\"triggerFadeIn($event)\">\n      <img src=\"assets/img/university_of_saskatchewan_logo.svg\">\n      <div class=\"education-description\">\n        <div class=\"education-header\">\n          <h3>Bachelor of Interactive Systems Design</h3>\n          <span>Ongoing</span>\n        </div>\n        <h4>University of Saskatchewan</h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-me-page-container {\n  background-color: #ebebeb;\n  width: 100%;\n  min-height: 100%;\n  padding-top: 100px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  box-sizing: border-box; }\n\n.about-me-container {\n  width: 100%;\n  max-width: 1000px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  color: #5f5f5f;\n  margin-bottom: 50px;\n  box-sizing: border-box;\n  padding: 10px; }\n\n.about-me-message {\n  -ms-flex: 1;\n      flex: 1;\n  min-width: 450px;\n  padding: 10px; }\n\n.changing-word {\n  color: #985E6D;\n  font-weight: bolder; }\n\n.personal-image {\n  max-width: 100%;\n  width: 300px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n.personal-image img {\n  width: 100%;\n  height: 100%; }\n\n.skills-container {\n  width: 100%;\n  background-color: #494E6B;\n  color: #ebebeb;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-bottom: 50px;\n  padding-top: 25px; }\n\n.skill-container-right {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 400px;\n  min-width: 150px; }\n\n.other-container {\n  margin-top: 15px; }\n\n.skills-body h5 {\n  margin-top: -10px; }\n\n.skills-body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 5px; }\n\n.skills-body > div {\n  margin-left: 20px;\n  margin-right: 20px; }\n\n.skills-container span {\n  border: 1px solid #ebebeb;\n  padding: 5px 10px 5px 10px;\n  margin: 10px 5px 10px 5px;\n  display: inline-block; }\n\n.divider {\n  background-color: #985E6D;\n  height: 3px;\n  width: 100%;\n  margin-bottom: 15px; }\n\n.experience-container {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  box-sizing: border-box; }\n\n.job-skill-tags {\n  color: #7b7b7b;\n  font-size: 14px; }\n\n.job-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.experience-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #5f5f5f;\n  background-color: #ebebeb;\n  padding: 50px; }\n\n.experience-container h1 {\n  margin-top: 0; }\n\n.company-image img {\n  height: 100%;\n  border-radius: 50%; }\n\n.company-image {\n  height: 75px;\n  width: 75px;\n  margin-right: 20px; }\n\n.job-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  max-width: 1000px;\n  padding: 15px; }\n\n.job-description h4 {\n  color: #985E6D;\n  margin: 0; }\n\n.job-description h3 {\n  margin: 0; }\n\n.resume-link {\n  width: 100%; }\n\n.resume-container {\n  width: 100%;\n  background-color: #494E6B;\n  color: #ebebeb;\n  font-size: 20px;\n  padding: 25px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  box-sizing: border-box;\n  transition: all 0.5s ease; }\n\n.btn-open {\n  transform: translateY(-20px);\n  opacity: 0;\n  font-size: 30px;\n  position: absolute; }\n\n.resume-container span {\n  transition: all 0.3s ease; }\n\n.resume-container:hover {\n  background-color: #3c415a; }\n\n.resume-container:hover .btn-open {\n  transform: translateY(-5px);\n  opacity: 1; }\n\n.resume-container:hover .resume-title {\n  transform: translateY(20px);\n  opacity: 0; }\n\n.education-container {\n  color: #5f5f5f;\n  background-color: #ebebeb;\n  padding: 50px;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  box-sizing: border-box; }\n\n.education-node-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  max-width: 1000px;\n  padding: 15px; }\n\n.education-container h1 {\n  margin-top: 0; }\n\n.education-container img {\n  border-radius: 50%;\n  height: 75px;\n  margin-right: 20px; }\n\n.education-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n\n.education-node-container h3, h4 {\n  margin: 0 25px 0 0; }\n\n.education-description h4 {\n  color: #985E6D; }\n\n@media (max-width: 800px) {\n  .personal-image {\n    width: 200px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutMeComponent = (function () {
    function AboutMeComponent(navigationService, renderer) {
        this.navigationService = navigationService;
        this.renderer = renderer;
        this.enjoyWords = ["trying new foods.", "playing indie games.", "functional programming.",
            "petting dogs.", "new technologies.", "alternative music.", "playing the saxophone.", "rewatching the Office."];
        this.displayWord = "";
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.setScrollPercentage(0);
        var counter = 0;
        var i = 0;
        var backspace = false;
        var pauseTyping = false;
        var cursorCounter = 0;
        var cursorExists = false;
        __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].interval(100).subscribe(function () {
            if (counter >= _this.enjoyWords.length)
                counter = 0;
            if (i >= _this.enjoyWords[counter].length) {
                i = 0;
                pauseTyping = true;
                backspace = true;
            }
            if (pauseTyping == true) {
                cursorCounter++;
                if (cursorCounter % 5 === 0) {
                    if (cursorExists) {
                        _this.displayWord = _this.displayWord.slice(0, _this.displayWord.length - 1);
                        cursorExists = false;
                    }
                    else {
                        _this.displayWord += "|";
                        cursorExists = true;
                    }
                }
                if (cursorCounter >= 20) {
                    cursorCounter = 0;
                    pauseTyping = false;
                }
            }
            else if (backspace == true && pauseTyping == false) {
                if (_this.displayWord.length > 0) {
                    _this.displayWord = _this.displayWord.slice(0, _this.displayWord.length - 1);
                }
                else {
                    backspace = false;
                    counter++;
                    _this.displayWord = "";
                }
            }
            else {
                _this.displayWord += _this.enjoyWords[counter].charAt(i);
                i++;
            }
        });
    };
    AboutMeComponent.prototype.triggerFadeIn = function (el) {
        this.renderer.addClass(el.nativeElement, 'enter-view');
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'about-me',
        template: __webpack_require__("../../../../../src/app/components/about-me/about-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about-me/about-me.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _b || Object])
], AboutMeComponent);

var _a, _b;
//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display/portfolio-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-display-wrapper clickable hidden-before-view\" (click)=\"goToLink()\" (whenInView)=\"triggerFadeIn($event)\">\n\n  <div class=\"display-image\">\n    <div class=\"display-image-overlay\">\n      <span>View Project</span>\n    </div>\n    <img src={{element.imagePath}} />\n  </div>\n  <div class=\"display-text\">\n    <div class=\"display-title\">\n      {{element.title}}\n    </div>\n    <div class=\"display-tags\">\n      <span *ngFor=\"let tag of element.tags; let isLast=last\">{{tag}}{{isLast?'':','}} </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display/portfolio-display.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1 50%;\n      flex: 1 1 50%;\n  min-width: 400px;\n  max-width: 650px; }\n\n.portfolio-display-wrapper {\n  background-color: #fff;\n  padding: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  height: 350px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-height: 400px;\n  margin: 15px;\n  box-sizing: border-box; }\n\n.display-image-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  color: #ebebeb;\n  background-color: rgba(25, 34, 49, 0.8);\n  opacity: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 26px;\n  transition: all 0.5s ease; }\n\n.portfolio-display-wrapper .display-image img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: translate3d(0, 0, 0);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  transition: transform 1s ease; }\n\n.portfolio-display-wrapper:hover img {\n  transform: scale(1.05); }\n\n.portfolio-display-wrapper:hover .display-image-overlay {\n  opacity: 1; }\n\n.display-image {\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  box-sizing: border-box;\n  position: relative; }\n\n.display-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 5px;\n  padding-top: 15px;\n  width: 100%;\n  line-height: 15px; }\n\n.display-tags {\n  color: #5f5f5f;\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display/portfolio-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__ = __webpack_require__("../../../../../src/app/model/Portfolio-Element.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioDisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioDisplayComponent = (function () {
    function PortfolioDisplayComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
    }
    PortfolioDisplayComponent.prototype.ngOnInit = function () {
    };
    PortfolioDisplayComponent.prototype.goToLink = function () {
        if (this.element.linkPath)
            this.router.navigate([this.element.linkPath]);
    };
    PortfolioDisplayComponent.prototype.triggerFadeIn = function (el) {
        this.renderer.addClass(el.nativeElement, 'enter-view');
    };
    return PortfolioDisplayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__["PortfolioElement"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__["PortfolioElement"]) === "function" && _a || Object)
], PortfolioDisplayComponent.prototype, "element", void 0);
PortfolioDisplayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'portfolio-display',
        template: __webpack_require__("../../../../../src/app/components/common/portfolio-display/portfolio-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/portfolio-display/portfolio-display.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _c || Object])
], PortfolioDisplayComponent);

var _a, _b, _c;
//# sourceMappingURL=portfolio-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-display-wrapper clickable hidden-before-view\" (click)=\"goToLink()\" (whenInView)=\"triggerFadeIn($event)\">\n\n  <div class=\"display-image\">\n    <div class=\"display-image-overlay\">\n      <div class=\"display-text\">\n        <div class=\"display-title\">\n          {{element.title}}\n        </div>\n        <div class=\"display-tags\">\n          <span *ngFor=\"let tag of element.tags; let isLast=last\">{{tag}}{{isLast?'':','}} </span>\n        </div>\n      </div>\n    </div>\n    <img src={{element.imagePath}} />\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 1 50%;\n      flex: 1 1 50%;\n  min-width: 400px;\n  max-width: 550px; }\n\n.portfolio-display-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  width: 100%;\n  height: 300px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  margin: 15px;\n  box-sizing: border-box; }\n\n.display-image-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  color: #ebebeb;\n  background-color: rgba(25, 34, 49, 0.8);\n  opacity: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: end;\n      align-items: flex-end;\n  font-size: 26px;\n  transition: all 0.5s ease; }\n\n.portfolio-display-wrapper .display-image img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-transform: translate3d(0, 0, 0);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  transition: transform 1s ease; }\n\n.portfolio-display-wrapper:hover img {\n  transform: scale(1.05); }\n\n.portfolio-display-wrapper:hover .display-image-overlay {\n  opacity: 1; }\n\n.display-image {\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  box-sizing: border-box;\n  position: relative; }\n\n.display-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 15px;\n  line-height: 25px;\n  width: 100%;\n  color: #fff; }\n\n.display-tags {\n  color: #e1d3cf;\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__ = __webpack_require__("../../../../../src/app/model/Portfolio-Element.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioDisplay2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioDisplay2Component = (function () {
    function PortfolioDisplay2Component(router, renderer) {
        this.router = router;
        this.renderer = renderer;
    }
    PortfolioDisplay2Component.prototype.ngOnInit = function () {
    };
    PortfolioDisplay2Component.prototype.goToLink = function () {
        if (this.element.linkPath)
            this.router.navigate([this.element.linkPath]);
    };
    PortfolioDisplay2Component.prototype.triggerFadeIn = function (el) {
        this.renderer.addClass(el.nativeElement, 'enter-view');
    };
    return PortfolioDisplay2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__["PortfolioElement"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_Portfolio_Element__["PortfolioElement"]) === "function" && _a || Object)
], PortfolioDisplay2Component.prototype, "element", void 0);
PortfolioDisplay2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'portfolio-display2',
        template: __webpack_require__("../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/portfolio-display2/portfolio-display2.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _c || Object])
], PortfolioDisplay2Component);

var _a, _b, _c;
//# sourceMappingURL=portfolio-display2.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/skill-bar/skill-bar.component.html":
/***/ (function(module, exports) {

module.exports = "{{skillName}}\n<div class=\"skill-bar-wrapper\" (whenInView)=\"triggerAnimation()\">\n  <div [style.width]=\"getSkillPercent()\" [@skillBarState]=\"{value: state, params: {'barWidth': skillWidth}}\" class=\"skill-bar-inner\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/skill-bar/skill-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skill-bar-wrapper {\n  height: 25px;\n  border-radius: 25px;\n  background-color: #3e4360;\n  width: 350px;\n  overflow: hidden; }\n\n.skill-bar-inner {\n  height: 100%;\n  background-color: #985E6D; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/skill-bar/skill-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillBarComponent = (function () {
    function SkillBarComponent() {
        this.skillName = "";
        this.skillPercent = 0;
        this.skillWidth = '0';
        this.state = 'inactive';
    }
    SkillBarComponent.prototype.ngOnInit = function () {
        if (this.skillPercent > 100)
            this.skillPercent = 100;
        if (this.skillPercent < 0)
            this.skillPercent = 0;
        this.skillWidth = this.getSkillPercent();
    };
    SkillBarComponent.prototype.getSkillPercent = function () {
        return this.skillPercent + "%";
    };
    SkillBarComponent.prototype.triggerAnimation = function () {
        this.state = 'visible';
    };
    return SkillBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], SkillBarComponent.prototype, "skillName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], SkillBarComponent.prototype, "skillPercent", void 0);
SkillBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'skill-bar',
        template: __webpack_require__("../../../../../src/app/components/common/skill-bar/skill-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/common/skill-bar/skill-bar.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('skillBarState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    width: '0'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ width: "{{barWidth}}" }), { params: { barWidth: '0' } }),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('inactive => visible', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('1000ms ease-out')])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], SkillBarComponent);

//# sourceMappingURL=skill-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"social-media-container\">\n    <a [attr.href]=\"linkedinPath\" target=\"_blank\">\n      <span class=\"fa-stack fa-sm clickable linkedin\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa fa-linkedin-square fa-stack-1x\"></i>\n      </span>\n    </a>\n    <a [attr.href]=\"githubPath\" target=\"_blank\">\n      <span class=\"fa-stack fa-sm clickable github\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa fa-github fa-stack-1x\"></i>\n      </span>\n    </a>\n    <a [attr.href]=\"instagramPath\" target=\"_blank\">\n      <span class=\"fa-stack fa-sm clickable instagram\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa fa-instagram fa-stack-1x\"></i>\n      </span>\n    </a>\n  </div>\n  <div class=\"btn-back-to-top\" (click)=\"scrollToTop()\">\n    <span class=\"fa-stack fa-sm clickable\">\n      <i class=\"fa fa-circle fa-stack-1x\"></i>\n      <i class=\"fa fa-arrow-circle-up fa-stack-1x\"></i>\n    </span>\n  </div>\n  <div class=\"copyright-info\">\n    © 2017. Ben Leech. All Rights Reserved.\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  padding: 35px 15px 15px 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  position: relative;\n  background-color: #494E6B;\n  color: #fff; }\n\n.social-media-container {\n  font-size: 20px;\n  color: #494E6B;\n  margin-bottom: 20px; }\n\n.social-media-container * {\n  transition: all 0.3s ease; }\n\n.fa-circle {\n  color: #192231; }\n\n.copyright-info {\n  font-size: 12px;\n  color: #ebebeb; }\n\n.linkedin:hover .fa-circle {\n  color: #24559c; }\n\n.linkedin:hover .fa-linkedin-square {\n  color: #ebebeb; }\n\n.github:hover .fa-circle {\n  color: #000; }\n\n.github:hover .fa-github {\n  color: #ebebeb; }\n\n.instagram:hover .fa-circle {\n  color: #bd286d; }\n\n.instagram:hover .fa-instagram {\n  color: #ebebeb; }\n\n.btn-back-to-top {\n  position: absolute;\n  top: 10%;\n  right: 30px;\n  font-size: 26px;\n  color: #192231; }\n\n.btn-back-to-top .fa-circle {\n  color: #494E6B; }\n\n.btn-back-to-top * {\n  transition: all 0.3s ease; }\n\n.btn-back-to-top:hover span {\n  transform: translateY(-5px); }\n\n.btn-back-to-top:hover .fa-circle {\n  color: #ebebeb; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.linkedinPath = 'https://www.linkedin.com/in/ben-leech-4195b6126';
        this.githubPath = 'https://github.com/BenLeech';
        this.instagramPath = 'https://www.instagram.com/benleech_/';
        this.scrollSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.scrollSubject.switchMap(function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1)
                .scan(function (acc, curr) { return acc - 35; }, window.pageYOffset)
                .do(function (pos) { return window.scrollTo(0, pos); })
                .takeWhile(function (val) { return val > 0; });
        }).subscribe();
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.scrollSubject.unsubscribe();
    };
    FooterComponent.prototype.scrollToTop = function () {
        this.scrollSubject.next();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/featured-work/featured-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"featured-work-container\">\n  <h1>Featured Work</h1>\n  <div class=\"featured-work-inner\">\n    <portfolio-display2 class=\"portfolio-display\" *ngFor=\"let work of featuredWork\" [element]=\"work\"></portfolio-display2>\n  </div>\n  <div class=\"button-container\">\n    <button class=\"btn-view-more clickable\" [routerLink]=\"['/portfolio']\">View More</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/featured-work/featured-work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".featured-work-container {\n  width: 100%;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.featured-work-container h1 {\n  color: #985E6D; }\n\n.featured-work-inner {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.button-container {\n  margin: 25px; }\n\n.btn-view-more {\n  color: #985E6D;\n  font-size: 16px;\n  border: solid 2px #985E6D;\n  padding: 10px 15px 10px 15px;\n  background-color: transparent;\n  animation: btn-unhover 0.2s; }\n\n.btn-view-more:hover {\n  animation: btn-hover 0.5s;\n  animation-fill-mode: forwards; }\n\n@keyframes btn-hover {\n  0% {\n    background-color: transparent;\n    color: #985E6D; }\n  100% {\n    background-color: #985E6D;\n    color: #ebebeb;\n    transform: scale(1.1); } }\n\n@keyframes btn-unhover {\n  0% {\n    background-color: #985E6D;\n    color: #ebebeb;\n    transform: scale(1.1); }\n  100% {\n    background-color: transparent;\n    color: #985E6D;\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/featured-work/featured-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedWorkComponent = (function () {
    function FeaturedWorkComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    FeaturedWorkComponent.prototype.ngOnInit = function () {
        this.featuredWork = this.portfolioService.getFeaturedPortfolioWork();
    };
    return FeaturedWorkComponent;
}());
FeaturedWorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'featured-work',
        template: __webpack_require__("../../../../../src/app/components/home/featured-work/featured-work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/featured-work/featured-work.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object])
], FeaturedWorkComponent);

var _a;
//# sourceMappingURL=featured-work.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splash-container\">\n  <div class=\"cover-container\" fadeToTop fadePercentage=\"0\">\n    <div class=\"cover-title\">\n      Ben Leech\n    </div>\n    <div class=\"cover-message\">\n      <span class=\"text-group\">Interactive Systems Design</span>\n      Student at <span class=\"text-group\">University of Saskatchewan</span>\n    </div>\n    <!--<div class=\"cover-submessage\">-->\n      <!--Currently working as a Developer at <span class=\"text-group\">Farm Credit Canada</span>-->\n    <!--</div>-->\n  </div>\n  <div class=\"down-arrow\">\n    <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n<div class=\"about-me-container\">\n  <div class=\"greeting-container hidden-before-view\" (whenInView)=\"triggerFadeIn($event)\">\n    <div class=\"personal-image\">\n      <img src=\"assets/img/personal-image.jpg\">\n    </div>\n    <span class=\"greeting-message\">\n    <h2>Hello,</h2>\n    <h3>I am Ben, a student currently finishing my Interactive Systems Design degree\n    from the University of Saskatchewan. I love the satisfaction of solving challenging problems, and I\n      enjoy actively developing my skills.</h3>\n  </span>\n  </div>\n</div>\n<div class=\"what-i-can-do-container\">\n\n  <div class=\"expertise-container\">\n    <div class=\"expertise-bubble\">\n      <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n    </div>\n    <h3>Design</h3>\n    Great code starts with the design. Whether it be the user interface, data models, or project\n    structure, I strive to design only the best.\n  </div>\n\n  <div class=\"expertise-container\">\n    <div class=\"expertise-bubble\">\n      <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\n    </div>\n    <h3>Development</h3>\n    I strive to write clean, beautiful, scalable code. I have solid foundational knowledge of\n    programming practices, data structures, and algorithms.\n  </div>\n\n  <div class=\"expertise-container\">\n    <div class=\"expertise-bubble\">\n      <i class=\"fa fa-database\" aria-hidden=\"true\"></i>\n    </div>\n    <h3>Back-End</h3>\n    Data is very valuable, but only if it is used right. I can design data models, query/analyze data,\n    write APIs, and create web services.\n  </div>\n\n</div>\n\n<div class=\"featured-container\">\n  <featured-work></featured-work>\n</div>\n\n<div class=\"contact-container\">\n  <h1>Say Hello</h1>\n  <div class=\"contact-message\">If you have an idea for a project that you think I would love to do, or if you just\n  want to chat, feel free to send me an email below</div>\n  <a href=\"mailto:ben.leech@hotmail.ca\">\n    <button class=\"btn-email clickable\">\n      <span class=\"btn-email-text\">Send an Email</span>\n    </button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".splash-container {\n  background-color: #494E6B;\n  width: 100%;\n  min-height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/cover-photo3.jpg")) + ");\n  background-size: cover;\n  background-position-x: center;\n  -webkit-transform: translate3d(0, 0, 0); }\n\n.splash-container:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: linear-gradient(to bottom, #494E6B, #985E6D);\n  opacity: .7; }\n\n.cover-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: auto;\n  box-sizing: border-box;\n  z-index: 5; }\n\n.cover-container .cover-title {\n  font-size: 64px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px; }\n\n.cover-container .cover-message {\n  font-size: 20px;\n  max-width: 95%;\n  color: #fff;\n  margin-bottom: 25px; }\n\n.cover-container .cover-submessage {\n  font-size: 16px;\n  max-width: 95%;\n  color: #fff;\n  padding-bottom: 50px; }\n\n.about-me-container {\n  width: 100%;\n  background-color: #ebebeb;\n  padding: 50px 15px 50px 15px;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.personal-image {\n  width: 175px;\n  height: 175px;\n  margin: 25px; }\n\n.personal-image img {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%; }\n\n.greeting-message {\n  max-width: 600px;\n  color: #5f5f5f;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.greeting-message h2 {\n  color: #985E6D;\n  margin-bottom: 0;\n  margin-left: 20px;\n  margin-top: 0; }\n\n.greeting-message h3 {\n  text-align: center; }\n\n.greeting-container {\n  overflow: hidden;\n  height: 100%;\n  max-width: 840px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse; }\n\n.down-arrow {\n  position: absolute;\n  font-size: 20px;\n  bottom: 15px;\n  left: 0;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n  -webkit-animation: fade-and-hover 2s infinite;\n  -webkit-animation-delay: 4s; }\n\n.what-i-can-do-container {\n  width: 100%;\n  background-color: #494E6B;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  padding: 50px;\n  box-sizing: border-box;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.expertise-bubble {\n  font-size: 36px;\n  color: #ebebeb;\n  background-color: #192231;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.expertise-bubble i {\n  transition: all 0.5s ease; }\n\n.expertise-bubble:hover i {\n  animation: 1s shake; }\n\n.expertise-container {\n  color: #ebebeb;\n  margin: 10px 25px 10px 25px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex: 1;\n      flex: 1;\n  text-align: center;\n  min-width: 200px;\n  max-width: 250px; }\n\n.expertise-bubble .fa-pencil-square-o {\n  margin-left: 10px;\n  margin-top: 3px; }\n\n.featured-container {\n  background-color: #ebebeb;\n  width: 100%;\n  padding: 35px 15px 35px 15px;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.contact-container {\n  width: 100%;\n  background-color: #192231;\n  padding: 45px 25px 65px 25px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #ebebeb;\n  box-sizing: border-box;\n  text-align: center; }\n\n.contact-container h1 {\n  font-size: 40px; }\n\n.contact-container .btn-email {\n  color: #192231;\n  background-color: #985E6D;\n  border: 3px solid #985E6D;\n  font-weight: bold;\n  transition: all 0.5s ease;\n  font-size: 16px;\n  padding: 15px 35px 15px 35px;\n  border-radius: 55px;\n  margin-top: 15px; }\n\n.contact-container .btn-email:hover {\n  background-color: #7c4856;\n  border-color: #7C4856;\n  transform: scaleX(1.1); }\n\n.contact-container .btn-email .btn-email-text {\n  display: inline-block;\n  transition: all 0.5s ease; }\n\n.contact-container .btn-email:hover .btn-email-text {\n  transform: scaleX(0.9); }\n\n.contact-message {\n  max-width: 500px;\n  line-height: 30px;\n  margin-bottom: 45px; }\n\n@media (max-height: 400px) {\n  .down-arrow {\n    display: none; }\n  .cover-container {\n    margin-top: 110px;\n    margin-left: auto;\n    margin-right: auto; } }\n\n@media (max-width: 426px) {\n  .down-arrow {\n    display: none; } }\n\n@media screen and (min-width: 600px) {\n  .featured-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n        flex-flow: row wrap;\n    -ms-flex-pack: center;\n        justify-content: center; } }\n\n@keyframes shake {\n  0% {\n    transform: rotate(0deg); }\n  33% {\n    transform: rotate(-25deg); }\n  66% {\n    transform: rotate(25deg); }\n  100% {\n    transform: rotate(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(navigationService, renderer) {
        this.navigationService = navigationService;
        this.renderer = renderer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.navigationService.setScrollPercentage(0.75);
        this.navigationService.updateNavbarSubject.next(false);
    };
    HomeComponent.prototype.triggerFadeIn = function (el) {
        this.renderer.addClass(el.nativeElement, 'enter-view');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-splash',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Renderer2 */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\" [@dropdownMenuState]=\"state\">\n  <div class=\"navbar\" [@navBarState]=\"navState\" [ngClass]=\"{'sticky-nav': showNav, 'bg-transparent': showDropdown}\">\n    <div class=\"logo-container clickable\" routerLink='/home'>\n      <img class=\"personal-logo\" src=\"assets/img/ben_leech_logo.svg\">BEN LEECH\n    </div>\n    <div class=\"nav-links-container\">\n      <span class=\"nav-link clickable\" *ngFor=\"let navLink of navLinks\" [ngClass]=\"{'active': navLink.active}\"\n            [routerLink]='navLink.link'>{{navLink.text}}</span>\n      <i class=\"fa fa-bars clickable\" aria-hidden=\"true\" *ngIf=\"!showDropdown\" (click)=\"toggleDropdown()\"></i>\n      <i class=\"fa fa-times clickable\" aria-hidden=\"true\" *ngIf=\"showDropdown\" (click)=\"toggleDropdown()\"></i>\n    </div>\n  </div>\n  <div class=\"dropdown-container\">\n    <div class=\"dropdown-inner\" *ngIf=\"showDropdown\">\n      <div class=\"nav-dropdown-link-row clickable\" *ngFor=\"let navLink of navLinks\">\n        <span class=\"nav-dropdown-link\" [routerLink]='navLink.link'>{{navLink.text}} </span>\n      </div>\n    </div>\n    <div class=\"social-media-container\">\n      <a [attr.href]=\"linkedinPath\" target=\"_blank\">\n        <span class=\"fa-stack fa-lg clickable\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-linkedin-square fa-stack-1x\"></i>\n        </span>\n      </a>\n      <a [attr.href]=\"githubPath\" target=\"_blank\">\n        <span class=\"fa-stack fa-lg clickable\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-github fa-stack-1x\"></i>\n        </span>\n      </a>\n      <a [attr.href]=\"instagramPath\" target=\"_blank\">\n        <span class=\"fa-stack fa-lg clickable\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-instagram fa-stack-1x\"></i>\n        </span>\n      </a>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-wrapper {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n  font-size: 15px;\n  transition: all 1s ease; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.personal-logo {\n  height: 30px;\n  margin-right: 10px; }\n\n.navbar {\n  color: #fff;\n  padding: 0 45px 0 45px;\n  height: 50px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.nav-links-container {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.nav-links-container .fa-times {\n  font-size: 28px;\n  margin-top: 15px; }\n\n.logo-container {\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.nav-link {\n  padding: 0 20px 0 20px;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  transition: color 0.1s ease; }\n\n.nav-link:hover {\n  color: #e1d3cf; }\n\n.logo-container:hover {\n  color: #e1d3cf; }\n\n.dropdown-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(25, 34, 49, 0.95);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin-top: -50px; }\n\n.dropdown-inner {\n  color: #cecece;\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 28px; }\n\n.dropdown-end {\n  width: 100%;\n  height: 50px; }\n\n.dropdown-container-down {\n  max-height: 1000px;\n  transition: all 0.25s linear; }\n\n.dropdown-container-up {\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.25s ease-out; }\n\n.nav-dropdown-link-row:before {\n  content: \"\";\n  position: absolute;\n  bottom: calc(50% - 5px);\n  left: 50%;\n  right: 50%;\n  background-color: #985E6D;\n  height: 10px;\n  z-index: -1;\n  transition: all 0.25s ease; }\n\n.nav-dropdown-link-row {\n  padding: 15px;\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  transform: perspective(1px) translateZ(0); }\n\n.nav-dropdown-link-row:hover {\n  color: #fff; }\n\n.nav-dropdown-link-row:hover:before {\n  left: 0;\n  right: 0; }\n\n.navbar .fa-bars {\n  display: none; }\n\n.sticky-nav .logo-container:hover {\n  color: #ebebeb;\n  background-color: #3c415a; }\n\n.sticky-nav .nav-link:hover {\n  color: #ebebeb;\n  background-color: #3c415a; }\n\n.active {\n  background-color: #3c415a; }\n\n.social-media-container {\n  color: #cecece;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  text-align: center;\n  width: 100%; }\n\n.social-media-container span:hover .fa-circle {\n  color: #985E6D; }\n\n.social-media-container .fa-circle {\n  color: #494E6B; }\n\n@media (max-width: 780px) {\n  .navbar {\n    background-color: #192231; }\n  .nav-link {\n    display: none; }\n  .navbar .fa-bars {\n    display: block; } }\n\n@media (min-width: 781px) {\n  .dropdown-container {\n    display: none; }\n  .nav-links-container .fa-times {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    function NavbarComponent(navigationService, router) {
        this.navigationService = navigationService;
        this.router = router;
        //FIXME: Use subscription with Observable.fromEvent for scroll
        //FIXME: make an onDestroy unsubscribe
        this.showDropdown = false;
        this.showNav = false;
        this.state = 'inactive';
        this.navState = 'stick';
        this.navLinks = [];
        this.linkedinPath = 'https://www.linkedin.com/in/ben-leech-4195b6126';
        this.githubPath = 'https://github.com/BenLeech';
        this.instagramPath = 'https://www.instagram.com/benleech_/';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navLinks = this.navigationService.getNavLinks();
        this.navigationService.updateNavbarSubject.subscribe(function (value) {
            //this.showNav = value;
            _this.navState = value ? 'stick' : 'top';
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                _this.showDropdown = false;
                _this.state = 'inactive';
            }
        });
        this.scrollSubscription = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromEvent(window, 'scroll').subscribe(function () { return _this.handleScrollEvent(); });
        this.resizeSubscription = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromEvent(window, 'resize').subscribe(function () { return _this.handleResizeEvent(); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    };
    NavbarComponent.prototype.toggleDropdown = function () {
        this.showDropdown = !this.showDropdown;
        this.state = (this.showDropdown) ? 'mobileMenu' : 'inactive';
    };
    NavbarComponent.prototype.handleScrollEvent = function () {
        this.showNav = (this.navigationService.getScrollPercentage() === 0) ? true :
            (window.pageYOffset > (window.innerHeight * this.navigationService.getScrollPercentage()));
        document.body.style.backgroundColor = (window.scrollY <= 0) ? '#192231' : '#494E6B';
        if (this.navigationService.getScrollPercentage() === 0) {
            this.navState = 'stick';
        }
        else {
            if (window.pageYOffset > (window.innerHeight * this.navigationService.getScrollPercentage()))
                this.navState = 'stick';
            else
                this.navState = 'top';
        }
    };
    NavbarComponent.prototype.handleResizeEvent = function () {
        if (this.showDropdown && window.innerWidth > 780) {
            this.showDropdown = false;
            this.state = 'inactive';
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('dropdownMenuState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    'height': '0'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('mobileMenu', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ 'height': '100%' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('inactive <=> mobileMenu', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('200ms ease')]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('navBarState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('top', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    'background-color': 'rgba(25,34,49,0)',
                    'padding-top': '10px',
                    'padding-left': '50px',
                    'padding-right': '50px'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('stick', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    'background-color': 'rgba(25,34,49,1)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('top <=> stick', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('400ms ease-out')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/chris-soteros/chris-soteros.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"btn-left clickable\" (click)=\"onBackArrowClick()\" *ngIf=\"displayLeftArrow\">\n    <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"btn-right clickable\" (click)=\"onNextArrowClick()\" *ngIf=\"displayRightArrow\">\n    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n  </div>\n\n  <div class=\"project-header\">\n    <div class=\"title\">University Professor Professional Portfolio</div>\n    <div class=\"subtitle\">Website Design and Development</div>\n  </div>\n\n  <div class=\"page-inner\">\n\n    <div class=\"button-container\" *ngIf=\"false\">\n      <button class=\"btn-circle\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></button>\n      <button class=\"btn-circle\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i></button>\n      <button class=\"btn-circle\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n    </div>\n\n    <div class=\"main-picture-container\">\n      <img src=\"assets/img/portfolio/helloWorldProjectCover.png\">\n    </div>\n\n    <div class=\"project-body\">\n\n      <div class=\"body-wrapper\">\n        <div class=\"description-container\">\n          <h3 class=\"section-title\">About</h3>\n          <p>For my Computer Science 281 Website Design and Development class, I worked with a group of\n            three other students throughout the semester to develop this website from the ground up. It is a portfolio website\n            for a Mathematics and Statistics professor at the University of Saskatchewan that showcases her\n            background, research, publications, classes, and contact info.</p>\n\n          <p>We met with the professor several times during the design process to ensure we properly developed\n            what she wanted, and to pitch our design ideas and mock-ups.</p>\n\n          <p>The site features a navigation bar that fixes to the top of the screen if the page is scrolled down,\n            nested collapsible information panels, easy insertion of new data or text, and a data table of\n            publications that is sortable based on name or date.\n          </p>\n        </div>\n\n        <div class=\"technologies-container\">\n          <h3 class=\"section-title\">Technologies Used</h3>\n          <ul>\n            <li>HTML</li>\n            <li>CSS</li>\n            <li>Javascript</li>\n            <li>jQuery</li>\n            <li>Cloud9</li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"button-container\">\n      <div class=\"btn-mobile-prev clickable\" (click)=\"onBackArrowClick()\">\n        <span class=\"fa-stack fa-lg\" *ngIf=\"displayLeftArrow\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-chevron-left fa-stack-1x\"></i>\n        </span>\n        <span class=\"mobile-title\">{{prevTitle}}</span>\n      </div>\n      <div class=\"btn-mobile-menu clickable\" [routerLink]=\"['/portfolio']\">\n        <span class=\"fa-stack fa-lg\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-th-large fa-stack-1x\"></i>\n        </span>\n      </div>\n      <div class=\"btn-mobile-next clickable\" (click)=\"onNextArrowClick()\">\n        <span class=\"mobile-title\">{{nextTitle}}</span>\n        <span class=\"fa-stack fa-lg\" *ngIf=\"displayRightArrow\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-chevron-right fa-stack-1x\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/chris-soteros/chris-soteros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChrisSoterosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChrisSoterosComponent = (function () {
    function ChrisSoterosComponent(navigationService, portfolioService) {
        this.navigationService = navigationService;
        this.portfolioService = portfolioService;
    }
    ChrisSoterosComponent.prototype.ngOnInit = function () {
        this.navigationService.setScrollPercentage(0);
        this.portfolioElement = this.portfolioService.helloWorldProject;
        this.portfolioService.setCurrentPortfolioElement(this.portfolioService.helloWorldProject);
        this.displayRightArrow = !this.portfolioService.isLast(this.portfolioElement);
        this.displayLeftArrow = !this.portfolioService.isFirst(this.portfolioElement);
        if (this.displayRightArrow)
            this.nextTitle = this.portfolioService.getNextTitle();
        if (this.displayLeftArrow)
            this.prevTitle = this.portfolioService.getLastTitle();
    };
    ChrisSoterosComponent.prototype.onNextArrowClick = function () {
        this.portfolioService.goToNext();
    };
    ChrisSoterosComponent.prototype.onBackArrowClick = function () {
        this.portfolioService.goBack();
    };
    return ChrisSoterosComponent;
}());
ChrisSoterosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'chris-soteros',
        template: __webpack_require__("../../../../../src/app/components/portfolio/chris-soteros/chris-soteros.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-template.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object])
], ChrisSoterosComponent);

var _a, _b;
//# sourceMappingURL=chris-soteros.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/miri/miri.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"btn-left clickable\" (click)=\"onBackArrowClick()\" *ngIf=\"displayLeftArrow\">\n    <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"btn-right clickable\" (click)=\"onNextArrowClick()\" *ngIf=\"displayRightArrow\">\n    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n  </div>\n\n  <div class=\"project-header\">\n    <div class=\"title\">Miri</div>\n    <div class=\"subtitle\">Game Design and Development project</div>\n  </div>\n\n  <div class=\"page-inner\">\n    <div class=\"main-picture-container\">\n      <img src=\"assets/img/portfolio/miri_mockup.jpg\">\n    </div>\n\n    <div class=\"project-body\">\n\n      <div class=\"body-wrapper\">\n        <div class=\"description-container\">\n          <h3 class=\"section-title\">About</h3>\n          <p>For my Computer Science Design and Construction of Games and Interactive Systems class,\n            I worked with a group of three other students throughout the semester to design and develop\n            this game from scratch in Unity.</p>\n          <p>Miri is a tile-based puzzle platformer game with four playable characters that each have their own\n            abilities and limitations. All four exist in the level at the same time (except for the earlier levels),\n            and all four must reach the end before the player can move on to the next level. The player controls\n            one player at a time and uses their abilities in combination to solve puzzles and help the other\n            characters to reach the end.</p>\n          The four playable characters are as follows:\n          <ul>\n            <li><strong>Miri:</strong> A fit blue-skinned humanoid being. Can run fast and jump high</li>\n            <li><strong>Morigan:</strong> A magical witch. Can perform short jumps and conjure a single ramp block or\n              ladder, but not both at the same time.</li>\n            <li><strong>Olav:</strong> A burly Viking. Can walk through spikes and activate pressure plates by standing on them,\n              but can't jump.</li>\n            <li><strong>Ladder Guy:</strong> Just your average guy. Except he can climb ladders.</li>\n          </ul>\n        </div>\n\n        <div class=\"technologies-container\">\n          <h3 class=\"section-title\">Technologies Used</h3>\n          <ul>\n            <li>Unity</li>\n            <li>C#</li>\n            <li>Sketchbook Pro</li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"btn-mobile-prev clickable\" (click)=\"onBackArrowClick()\">\n      <span class=\"fa-stack fa-lg clickable\" *ngIf=\"displayLeftArrow\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa fa-chevron-left fa-stack-1x\"></i>\n      </span>\n      <span class=\"mobile-title\">{{prevTitle}}</span>\n    </div>\n    <div class=\"btn-mobile-menu clickable\" [routerLink]=\"['/portfolio']\">\n        <span class=\"fa-stack fa-lg clickable\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-th-large fa-stack-1x\"></i>\n        </span>\n    </div>\n    <div class=\"btn-mobile-next clickable\" (click)=\"onNextArrowClick()\">\n      <span class=\"mobile-title\">{{nextTitle}}</span>\n      <span class=\"fa-stack fa-lg\" *ngIf=\"displayRightArrow\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-chevron-right fa-stack-1x\"></i>\n        </span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/miri/miri.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiriComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiriComponent = (function () {
    function MiriComponent(navigationService, portfolioService) {
        this.navigationService = navigationService;
        this.portfolioService = portfolioService;
    }
    MiriComponent.prototype.ngOnInit = function () {
        this.navigationService.setScrollPercentage(0);
        this.portfolioElement = this.portfolioService.miri;
        this.portfolioService.setCurrentPortfolioElement(this.portfolioElement);
        this.displayRightArrow = !this.portfolioService.isLast(this.portfolioElement);
        this.displayLeftArrow = !this.portfolioService.isFirst(this.portfolioElement);
        if (this.displayRightArrow)
            this.nextTitle = this.portfolioService.getNextTitle();
        if (this.displayLeftArrow)
            this.prevTitle = this.portfolioService.getLastTitle();
    };
    MiriComponent.prototype.onNextArrowClick = function () {
        this.portfolioService.goToNext();
    };
    MiriComponent.prototype.onBackArrowClick = function () {
        this.portfolioService.goBack();
    };
    return MiriComponent;
}());
MiriComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'miri',
        template: __webpack_require__("../../../../../src/app/components/portfolio/miri/miri.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-template.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object])
], MiriComponent);

var _a, _b;
//# sourceMappingURL=miri.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio-template.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-container {\n  width: 100%;\n  min-height: 100%;\n  background-color: #ebebeb;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n.body-wrapper {\n  display: -ms-flexbox;\n  display: flex; }\n\n.description-container {\n  min-width: 350px; }\n\n.page-inner {\n  width: 80%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  padding: 10px 15px 20px 15px;\n  box-sizing: border-box;\n  line-height: 25px; }\n\n.main-picture-container {\n  width: 100%; }\n\n.main-picture-container img {\n  width: 100%;\n  box-shadow: 0 3px 5px #5f5f5f; }\n\n.project-header {\n  background-color: #494E6B;\n  color: #ebebeb;\n  text-align: center;\n  width: 100%;\n  padding: 75px 0 35px 0;\n  margin-bottom: 20px; }\n\n.project-body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  margin-bottom: 25px; }\n\n.section-title {\n  color: #985E6D;\n  position: relative; }\n\n.section-title:after {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  width: 50px;\n  left: 0;\n  background-color: #985E6D;\n  height: 2px; }\n\n.technologies-container .section-title {\n  white-space: nowrap; }\n\n.technologies-container {\n  margin-left: 20px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  min-width: 0; }\n\n.technologies-container ul {\n  list-style-type: circle; }\n\n.technologies-container span {\n  border: 1px solid #192231;\n  color: #192231;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  font-size: 14px; }\n\n.title {\n  font-size: 2.2rem; }\n\n.subtitle {\n  font-size: 1.3rem;\n  color: #cbcbcb; }\n\n.btn-circle {\n  border: 0;\n  background-color: #494E6B;\n  color: #ebebeb;\n  border-radius: 50%; }\n\n.btn-left {\n  position: fixed;\n  top: 50%;\n  left: 20px;\n  font-size: 24px;\n  color: #494E6B; }\n\n.btn-right {\n  position: fixed;\n  top: 50%;\n  right: 20px;\n  font-size: 24px;\n  color: #494E6B; }\n\n.btn-right:hover i {\n  transform: translateX(5px);\n  color: #192231;\n  z-index: 6; }\n\n.btn-left:hover i {\n  transform: translateX(-5px);\n  color: #192231; }\n\n.button-container {\n  color: #494E6B;\n  width: 100%;\n  position: relative;\n  height: 100px;\n  display: none; }\n\n.button-container .fa-chevron-left {\n  color: #ebebeb; }\n\n.button-container .fa-chevron-right {\n  color: #ebebeb; }\n\n.button-container .fa-stack {\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n.button-container .fa-th-large {\n  color: #ebebeb; }\n\n.btn-mobile-prev {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  position: absolute;\n  left: 0;\n  max-width: 45%;\n  transition: all 0.5s ease; }\n\n.btn-mobile-prev:hover .fa-circle {\n  color: #192231;\n  transition: all 0.5s ease; }\n\n.btn-mobile-next {\n  position: absolute;\n  right: 0; }\n\n.btn-mobile-next:hover .fa-circle {\n  color: #192231;\n  transition: all 0.5s ease; }\n\n.btn-mobile-menu {\n  position: absolute;\n  left: 50%;\n  margin-left: -20px;\n  transition: all 0.5s ease; }\n\n.btn-mobile-menu:hover {\n  color: #192231; }\n\n@media (max-width: 780px) {\n  .page-inner {\n    width: 100%; }\n  .btn-right {\n    display: none; }\n  .body-wrapper {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .btn-left {\n    display: none; }\n  .button-container {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-page-container\">\n  <div class=\"portfolio-element-container\">\n    <portfolio-display *ngFor=\"let work of myWork\" [element]=\"work\"></portfolio-display>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".portfolio-page-container {\n  width: 100%;\n  min-height: 100%;\n  background-color: #ebebeb;\n  box-sizing: border-box;\n  padding-top: 100px; }\n\n.portfolio-element-container {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: center;\n      justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = (function () {
    function PortfolioComponent(navigationService, portfolioService) {
        this.navigationService = navigationService;
        this.portfolioService = portfolioService;
        this.myWork = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.navigationService.setScrollPercentage(0);
        this.myWork = this.portfolioService.getPortfolioWork();
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'portfolio',
        template: __webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object])
], PortfolioComponent);

var _a, _b;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/portfolio/tobii-eyex/tobii-eyex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"btn-left clickable\" (click)=\"onBackArrowClick()\" *ngIf=\"displayLeftArrow\">\n    <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"btn-right clickable\" (click)=\"onNextArrowClick()\" *ngIf=\"displayRightArrow\">\n    <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n  </div>\n\n  <div class=\"project-header\">\n    <div class=\"title\">Eye Tracking Research</div>\n    <div class=\"subtitle\">Application Development, Research Project</div>\n  </div>\n\n  <div class=\"page-inner\">\n    <div class=\"main-picture-container\">\n      <img src=\"assets/img/portfolio/tobii_eyex.JPG\">\n    </div>\n\n    <div class=\"project-body\">\n\n      <div class=\"body-wrapper\">\n        <div class=\"description-container\">\n          <h3 class=\"section-title\">About</h3>\n          In preparation for a proposed Hackathon event with an eye tracking theme,\n          I was asked by a professor from the\n          University of Regina to do some research into different eye tracking technologies and\n          explore their capabilities.\n\n          <p>I looked into several tracking hardware, and a few application that just utilized a webcam, but I found\n            that the Tobii EyeX to be the best option in terms of performance, cost, and practicality for\n            such an event, so I did most of my development with Tobii's APIs and data streams.\n\n          <p>After playing around with the EyeX and seeing what it could do, I discovered that it was pretty\n            accurate at detecting where my eyes where looking on the screen, but it was very jittery and jumped around\n            the location that I was looking a lot. So I first created several smoothing filters that I applied over\n            the data stream. They affected responsiveness slightly, but they all greatly improved the smoothness of\n            the gaze point and improved user experience.</p>\n\n          <p>I then created an application in Unity that allowed the user to draw with their eyes. With the highest\n            smoothing filter applied, drawing was an enjoyable experience that did not put much strain on the eyes.</p>\n\n          <p>I took it another step an created a Windows form application that allowed to control the mouse cursor\n            with their eyes, change smooth filter settings, and click with the press of a keyboard button. This allowed\n            the user the potential to draw with their gaze in other applications, or just replace the mouse with their\n            eyes all-together.</p>\n\n          <p>Finally, I started looking into the possibility of gesture controls using head position, and\n            control using blinks or winks.</p>\n        </div>\n\n        <div class=\"technologies-container\">\n          <h3 class=\"section-title\">Technologies Used</h3>\n          <ul>\n            <li>C#</li>\n            <li>Unity</li>\n            <li>Tobii EyeX</li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"button-container\">\n    <div class=\"btn-mobile-prev clickable\" (click)=\"onBackArrowClick()\">\n      <span class=\"fa-stack fa-lg clickable\" *ngIf=\"displayLeftArrow\">\n        <i class=\"fa fa-circle fa-stack-2x\"></i>\n        <i class=\"fa fa-chevron-left fa-stack-1x\"></i>\n      </span>\n      <span class=\"mobile-title\">{{prevTitle}}</span>\n    </div>\n    <div class=\"btn-mobile-menu clickable\" [routerLink]=\"['/portfolio']\">\n        <span class=\"fa-stack fa-lg clickable\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-th-large fa-stack-1x\"></i>\n        </span>\n    </div>\n    <div class=\"btn-mobile-next clickable\" (click)=\"onNextArrowClick()\">\n      <span class=\"mobile-title\">{{nextTitle}}</span>\n      <span class=\"fa-stack fa-lg\" *ngIf=\"displayRightArrow\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-chevron-right fa-stack-1x\"></i>\n        </span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/portfolio/tobii-eyex/tobii-eyex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__ = __webpack_require__("../../../../../src/app/services/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__ = __webpack_require__("../../../../../src/app/services/navigation.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TobiiEyeXComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TobiiEyeXComponent = (function () {
    function TobiiEyeXComponent(navigationService, portfolioService) {
        this.navigationService = navigationService;
        this.portfolioService = portfolioService;
    }
    TobiiEyeXComponent.prototype.ngOnInit = function () {
        this.navigationService.setScrollPercentage(0);
        this.portfolioElement = this.portfolioService.tobiiEyeX;
        this.portfolioService.setCurrentPortfolioElement(this.portfolioElement);
        this.displayRightArrow = !this.portfolioService.isLast(this.portfolioElement);
        this.displayLeftArrow = !this.portfolioService.isFirst(this.portfolioElement);
        if (this.displayRightArrow)
            this.nextTitle = this.portfolioService.getNextTitle();
        if (this.displayLeftArrow)
            this.prevTitle = this.portfolioService.getLastTitle();
    };
    TobiiEyeXComponent.prototype.onNextArrowClick = function () {
        this.portfolioService.goToNext();
    };
    TobiiEyeXComponent.prototype.onBackArrowClick = function () {
        this.portfolioService.goBack();
    };
    return TobiiEyeXComponent;
}());
TobiiEyeXComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'tobii-eyex',
        template: __webpack_require__("../../../../../src/app/components/portfolio/tobii-eyex/tobii-eyex.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/portfolio/portfolio-template.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_navigation_service__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object])
], TobiiEyeXComponent);

var _a, _b;
//# sourceMappingURL=tobii-eyex.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/fade-to-top.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeToTopDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FadeToTopDirective = (function () {
    function FadeToTopDirective(el) {
        this.el = el;
        this.fadePercentage = 75;
    }
    FadeToTopDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollSubscription = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromEvent(window, 'scroll').subscribe(function () { return _this.handleScroll(); });
        this.offsetTop = this.el.nativeElement.offsetTop;
        this.elementHeight = this.el.nativeElement.offsetHeight;
    };
    FadeToTopDirective.prototype.ngOnDestroy = function () {
        if (this.scrollSubscription)
            this.scrollSubscription.unsubscribe();
    };
    FadeToTopDirective.prototype.handleScroll = function () {
        this.offsetTop = this.el.nativeElement.offsetTop;
        if (((this.offsetTop + this.elementHeight) - window.scrollY) <= this.elementHeight) {
            this.el.nativeElement.style.opacity = (((this.offsetTop + this.elementHeight) - window.scrollY) <= 0)
                ? 0 : (((this.offsetTop + this.elementHeight) - window.scrollY) / 200);
        }
        else {
            this.el.nativeElement.style.opacity = 1;
        }
    };
    return FadeToTopDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Input */])('fadePercentage'),
    __metadata("design:type", Number)
], FadeToTopDirective.prototype, "fadePercentage", void 0);
FadeToTopDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* Directive */])({
        selector: '[fadeToTop]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], FadeToTopDirective);

var _a;
//# sourceMappingURL=fade-to-top.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/parallax.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParallaxDirective = (function () {
    function ParallaxDirective(el) {
        this.el = el;
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.parallaxLayer = this.el.nativeElement;
        this.parallaxLayer.style.zIndex = '-1';
        this.parallaxLayer.style.transition = '0.07s ease-in-out';
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'scroll').subscribe(function () { return _this.parallax(); });
        //this.parallaxLayer.style.backgroundImage = 'url(' + this.backgroundUrl + ')';
        //this.parallaxLayer.style.backgroundAttachment = "fixed";
    };
    ParallaxDirective.prototype.ngOnDestroy = function () {
        if (this.scrollSubscription)
            this.scrollSubscription.unsubscribe();
    };
    ParallaxDirective.prototype.parallax = function () {
        if (this.speed == 0)
            this.parallaxLayer.style.backgroundPositionY = 0;
        else
            this.parallaxLayer.style.transform = 'translate3d(0,' + window.scrollY * 0.5 + 'px ,0)';
        //this.parallaxLayer.style.backgroundPositionY = -(window.pageYOffset / this.speed) + '%';
    };
    return ParallaxDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('speed'),
    __metadata("design:type", Number)
], ParallaxDirective.prototype, "speed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('backgroundUrl'),
    __metadata("design:type", String)
], ParallaxDirective.prototype, "backgroundUrl", void 0);
ParallaxDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[parallax]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], ParallaxDirective);

var _a;
//# sourceMappingURL=parallax.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/when-in-view.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhenInViewDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhenInViewDirective = (function () {
    function WhenInViewDirective(elementRef) {
        this.elementRef = elementRef;
        this.whenInView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    WhenInViewDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.updateInfo();
        this.scrollSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'scroll').subscribe(function () { return _this.updateInfo(); });
        this.resizeSubscription = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'resize').subscribe(function () { return _this.updateInfo(); });
    };
    WhenInViewDirective.prototype.ngOnDestroy = function () {
        this.unsubscribeAll();
    };
    WhenInViewDirective.prototype.getDimensions = function () {
        this.elementHeight = this.elementRef.nativeElement.offsetHeight;
        this.offsetTop = this.elementRef.nativeElement.offsetTop;
    };
    WhenInViewDirective.prototype.getWindowHeight = function () {
        this.windowHeight = window.innerHeight;
    };
    WhenInViewDirective.prototype.checkVisibility = function () {
        if ((window.scrollY + this.windowHeight) >= (this.offsetTop + (this.elementHeight / 2.5))) {
            this.whenInView.emit(this.elementRef);
            this.unsubscribeAll();
        }
    };
    WhenInViewDirective.prototype.updateInfo = function () {
        this.getWindowHeight();
        this.getDimensions();
        this.checkVisibility();
    };
    WhenInViewDirective.prototype.unsubscribeAll = function () {
        if (this.scrollSubscription)
            this.scrollSubscription.unsubscribe();
        if (this.resizeSubscription)
            this.resizeSubscription.unsubscribe();
    };
    return WhenInViewDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], WhenInViewDirective.prototype, "whenInView", void 0);
WhenInViewDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[whenInView]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
], WhenInViewDirective);

var _a, _b;
//# sourceMappingURL=when-in-view.directive.js.map

/***/ }),

/***/ "../../../../../src/app/model/Portfolio-Element.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=Portfolio-Element.js.map

/***/ }),

/***/ "../../../../../src/app/services/navigation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = (function () {
    function NavigationService(router) {
        var _this = this;
        this.router = router;
        this.scrollPercentage = 0;
        this.updateNavbarSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this.aboutLink = { text: 'ABOUT', link: '/about', active: false };
        this.portfolioLink = { text: 'PORTFOLIO', link: '/portfolio', active: false };
        this.navLinks = [this.aboutLink, this.portfolioLink];
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function () {
            _this.detectActiveLink();
        });
    }
    NavigationService.prototype.setScrollPercentage = function (percentage) {
        this.scrollPercentage = percentage;
        this.updateNavbarSubject.next(true);
    };
    NavigationService.prototype.getScrollPercentage = function () {
        return this.scrollPercentage;
    };
    NavigationService.prototype.getNavLinks = function () {
        return this.navLinks;
    };
    NavigationService.prototype.detectActiveLink = function () {
        this.navLinks.forEach(function (link) {
            link.active = (location.pathname.endsWith(link.link));
        });
    };
    return NavigationService;
}());
NavigationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
], NavigationService);

var _a;
//# sourceMappingURL=navigation.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var basePath = "assets/img/portfolio/";
var PortfolioService = (function () {
    function PortfolioService(router) {
        this.router = router;
        this.helloWorldProject = { title: "University Professor Profile website", imagePath: basePath + "helloWorldProjectCover.png",
            tags: ['Web Development'], linkPath: '/portfolio/uni-prof-portfolio' };
        this.miri = { title: "Miri", imagePath: basePath + "/miri/miri_mockup.jpg",
            tags: ['Game Development'], linkPath: '/portfolio/miri-game' };
        this.tobiiEyeX = { title: "Eye Tracking Research", imagePath: basePath + "tobii_eyex.JPG",
            tags: ['Application Development, Research'], linkPath: '/portfolio/eye-tracking-research' };
        this.portfolioWork = [];
        this.featuredWork = [];
        this.portfolioWork = [this.helloWorldProject, this.miri, this.tobiiEyeX];
        this.featuredWork = [this.helloWorldProject, this.miri, this.tobiiEyeX];
    }
    PortfolioService.prototype.getFeaturedPortfolioWork = function () {
        return this.featuredWork;
    };
    PortfolioService.prototype.getPortfolioWork = function () {
        return this.portfolioWork;
    };
    PortfolioService.prototype.getCurrentPortfolioElement = function () {
        return this.currentPortfolioElement;
    };
    PortfolioService.prototype.setCurrentPortfolioElement = function (project) {
        this.currentPortfolioElement = project;
    };
    PortfolioService.prototype.getIndex = function (project) {
        return this.portfolioWork.indexOf(project);
    };
    PortfolioService.prototype.isFirst = function (project) {
        return project == this.portfolioWork[0];
    };
    PortfolioService.prototype.isLast = function (project) {
        return project == this.portfolioWork[this.portfolioWork.length - 1];
    };
    PortfolioService.prototype.goToNext = function () {
        var index = this.getIndex(this.currentPortfolioElement);
        if (index == this.portfolioWork.length - 1 || index == -1)
            return;
        this.currentPortfolioElement = this.portfolioWork[index + 1];
        this.router.navigate([this.currentPortfolioElement.linkPath]);
    };
    PortfolioService.prototype.goBack = function () {
        var index = this.getIndex(this.currentPortfolioElement);
        if (index <= 0)
            return;
        this.currentPortfolioElement = this.portfolioWork[index - 1];
        this.router.navigate([this.currentPortfolioElement.linkPath]);
    };
    PortfolioService.prototype.goToFirst = function () {
        this.currentPortfolioElement = this.portfolioWork[0];
    };
    PortfolioService.prototype.goToLast = function () {
        this.currentPortfolioElement = this.portfolioWork[this.portfolioWork.length - 1];
    };
    PortfolioService.prototype.getNextTitle = function () {
        var index = this.getIndex(this.currentPortfolioElement);
        if (index == this.portfolioWork.length - 1 || index == -1)
            return '';
        return this.portfolioWork[index + 1].title;
    };
    PortfolioService.prototype.getLastTitle = function () {
        var index = this.getIndex(this.currentPortfolioElement);
        if (index <= 0)
            return '';
        return this.portfolioWork[index - 1].title;
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], PortfolioService);

var _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/cover-photo3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover-photo3.28061e40da27ff753d6e.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
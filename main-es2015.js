(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  about works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n <!-- <mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <h1>LOGOsdfasdfsdfasdfaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs</h1>\r\n    <span class=\"menu-spacer\"></span>\r\n    <div>\r\n      <a mat-button [routerLink]=\"['/home']\"> Home </a>\r\n      <a mat-button [routerLink]=\"['/services']\"> Services </a>\r\n      <a mat-button [routerLink]=\"['/industry']\"> Industry </a>\r\n      <a mat-button [routerLink]=\"['/contact']\"> Contact </a>\r\n      <a mat-button [routerLink]=\"['/team']\"> Team</a>\r\n      <a mat-button [routerLink]=\"['/about']\"> About </a>\r\n    </div>\r\n  </mat-toolbar-row>\r\n\r\n</mat-toolbar>  -->\r\n  <head>\r\n  <title>Bootstrap Example</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n\r\n</head> \r\n \r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    HML Consultants\r\n  </a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\"\r\n          (click)=\"toggleNavbar()\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n\r\n  <div class=\"collapse navbar-collapse\"\r\n       [ngClass]=\"{ 'show': navbarOpen }\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" (click)=\"toggleNavbar()\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/services']\" (click)=\"toggleNavbar()\">Services</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/industry']\" (click)=\"toggleNavbar()\">Industry</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\" (click)=\"toggleNavbar()\">Contact</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/team']\" (click)=\"toggleNavbar()\">Team</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/about']\" (click)=\"toggleNavbar()\">About</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav><!-- <nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>                        \r\n          </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">HML Consultants</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\r\n        <li><a [routerLink]=\"['/services']\"> Services </a></li>\r\n        <li><a [routerLink]=\"['/industry']\"> Industry </a></li>\r\n        <li><a [routerLink]=\"['/contact']\"> Contact </a></li>\r\n        <li><a [routerLink]=\"['/team']\"> Team</a></li>\r\n        <li><a [routerLink]=\"['/about']\"> About </a></li>\r\n    \r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>  -->\r\n\r\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\"><img width=\"100%\" src=\"/assets/logo.jpg\"></a>\r\n    <button #navbarToggler class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" (click)=\"isShown = !isShown\" [attr.aria-expanded]=\"isShown\"  aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': isShown }\" id=\"navbarSupportedContent\" >\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" (click)=\"isShown = false\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"isShown = false\" routerLink=\"/contact\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"isShown = false\" routerLink=\"/imprint\">Imprint</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav> -->\r\n\r\n<!-- <app-home></app-home> -->\r\n\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> -->\n<!-- <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script> -->\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"container contact\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"contact-info\">\n\t\t\t\t<img src=\"https://image.ibb.co/kUASdV/contact-image.png\" alt=\"image\"/>\n\t\t\t\t<h2>Contact Us</h2>\n\t\t\t\t<h4>We would love to hear from you !</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"contact-form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" name=\"fname\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter Last Name\" name=\"lname\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">        \n\t\t\t\t  <div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n<div class=\"container-fluid\">\r\n\r\n  <div class='col-12'>\r\n<ngb-carousel>\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img src=\"/assets/img_2.jpg\" alt=\"Random first slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>First slide label fdsfdfsdf</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img src=\"/assets/img_1.jpg\" alt=\"Random second slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>Second slide label</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img src=\"/assets/img_dollar.jpg\" alt=\"Random third slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>Third slide label</h3>\r\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n        <div class=\"picsum-img-wrapper\">\r\n          <img src=\"/assets/img_3.jpg\" alt=\"Random fourth slide\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n          <h3>Fourth slide label</h3>\r\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n        </div>\r\n      </ng-template>\r\n  </ngb-carousel>\r\n</div>\r\n</div>\r\n<!-- \r\n  <script>\r\n    var slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\n// Next/previous controls\r\nfunction plusSlides(n) {\r\n  showSlides(slideIndex += n);\r\n}\r\n\r\n// Thumbnail image controls\r\nfunction currentSlide(n) {\r\n  showSlides(slideIndex = n);\r\n}\r\n\r\nfunction showSlides(n) {\r\n  var i;\r\n  var slides = document.getElementsByClassName(\"mySlides\");\r\n  var dots = document.getElementsByClassName(\"dot\");\r\n  if (n > slides.length) {slideIndex = 1}\r\n  if (n < 1) {slideIndex = slides.length}\r\n  for (i = 0; i < slides.length; i++) {\r\n      slides[i].style.display = \"none\";\r\n  }\r\n  for (i = 0; i < dots.length; i++) {\r\n      dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n  }\r\n  slides[slideIndex-1].style.display = \"block\";\r\n  dots[slideIndex-1].className += \" active\";\r\n}\r\n  </script>\r\n\r\n<div class=\"slideshow-container\">\r\n\r\n   \r\n    <div class=\"mySlides fade\">\r\n      <div class=\"numbertext\">1 / 3</div>\r\n      <img src=\"/src/assets/img_dollar.jpg\" style=\"width:100%\">\r\n      <div class=\"text\">Caption Text</div>\r\n    </div>\r\n  \r\n    <div class=\"mySlides fade\">\r\n      <div class=\"numbertext\">2 / 3</div>\r\n      <img src=\"/src/assets/img_1.jpg\" style=\"width:100%\">\r\n      <div class=\"text\">Caption Two</div>\r\n    </div>\r\n  \r\n    <div class=\"mySlides fade\">\r\n      <div class=\"numbertext\">3 / 3</div>\r\n      <img src=\"/src/assets/img_2.jpg\" style=\"width:100%\">\r\n      <div class=\"text\">Caption Three</div>\r\n    </div>\r\n  \r\n    \r\n    <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>\r\n    <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>\r\n  </div>\r\n  <br>\r\n  \r\n\r\n  <div style=\"text-align:center\">\r\n    <span class=\"dot\" onclick=\"currentSlide(1)\"></span>\r\n    <span class=\"dot\" onclick=\"currentSlide(2)\"></span>\r\n    <span class=\"dot\" onclick=\"currentSlide(3)\"></span>\r\n  </div> -->\r\n\r\n<p>\r\n\r\n\r\n\r\n\r\n  \r\n  H M Lal & Co. is a firm founded by experienced Chartered Accountant in 2004, SRCC alumni who worked with general insurance sector at leadership position for 25 years. Later on, fresh outlook was introduced to the firm, when joined by group of Chartered Accountants, who have worked with one or more Big 4 accounting firms & industrial leaders. Having its Head Office in New Delhi, firm has a joint business alliance with firms having exixtence in Chandigarh, Jaipur & Raipur with more than 50 professional & paid assistants in the group other than the core team members.\r\n\r\nWe understand challenges faced by corporate while dealing with audit, Tax & Regulatory laws. We provide quality service and add tangible value to clients by blending practical advice with tax & regulatory inputs.\r\nFollowing attributs direct out vision:\r\n\r\nFlexibility: We execute the project on-shore & off-shore.\r\nQuality: On every assignment a dedicated professional having domain expertise is appointed who is backed by H M Lal & Co. partner & involved right from outset in order to ensure enhanced quality assurance for out clients.\r\nExperience:  We know what it takes to plan,execute & effectively manage engagements across multiple geographies & multi-national cultures.\r\n</p>\r\n \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/industry/industry.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/industry/industry.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n<div id=\"services\" class=\"container-fluid text-center\" style=\"background-color: #cccccc;\">\n    <h2>Industries</h2>\n    <!-- <h4>What we offer</h4> -->\n    <!-- <br> -->\n  \n    <div class=\"row\">\n      <div class=\"col-md-3 \">\n        <span class=\"fa fa-car fa-3x\"></span>\n        <h4>Automobile</h4>\n        <br>\n      </div>\n      <div class=\"col-md-3\">\n          <span class=\"fa fa-free-code-camp  fa-3x\"></span>\n          \n        <h4>Oil & Gas</h4>\n        <br>\n      </div>\n      <div class=\"col-md-3\">\n          <span class=\"fa fa-desktop fa-3x\"></span>\n        <h4>Information Technology</h4>\n        <br>\n      </div>\n        <div class=\"col-md-3\">\n          <span class=\"fa fa-music fa-3x\"></span>\n        <h4>Media & Entertainment</h4>\n        <br>\n      </div>\n    </div>\n  \n    <div class=\"row\">\n        <div class=\"col-md-3 \">\n          <span class=\"fa fa-building fa-3x\"></span>\n          <h4>Real Estate & Construction</h4>\n          <br>\n        </div>\n        <div class=\"col-md-3\">\n            <span class=\"fa fa-money fa-3x\"></span>\n          <h4>Financial Sector</h4>\n          <br>\n        </div>\n        <div class=\"col-md-3\">\n            <span class=\"fa fa-plug fa-3x\"></span>\n          <h4>Power</h4>\n          <br>\n        </div>\n        <div class=\"col-md-3\">\n            <span class=\"fa fa-phone fa-3x\"></span>\n          <h4>Telecom</h4>\n          <br>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-3 \">\n            <span class=\"fa fa-plane fa-3x\"></span>\n            <h4>Aviation</h4>\n            <br>\n          </div>\n          <div class=\"col-md-3\">\n              <span class=\"fa fa-book fa-3x\"></span>\n            <h4>Education</h4>\n            <br>\n          </div>\n          <div class=\"col-md-3\">\n              <span class=\"fa fa-bed fa-3x\"></span>\n            <h4>Hospitality</h4>\n            <br>\n          </div>\n          <div class=\"col-md-3\">\n              <span class=\"fa fa-medkit fa-3x\"></span>\n            <h4>Healthcare</h4>\n            <br>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3 \">\n              <span class=\"fa fa-bolt fa-3x\"></span>\n              <h4>White Goods/Electricals</h4>\n              <br>\n            </div>\n            <div class=\"col-md-3\">\n                <span class=\"fa fa-ship fa-3x\"></span>\n              <h4>Shipping</h4>\n              <br>\n            </div>\n            <div class=\"col-md-3\">\n                <span class=\"fa fa-globe fa-3x\"></span>\n              <h4>Trading</h4>\n              <br>\n            </div>\n            <div class=\"col-md-3\">\n                <span class=\"fa fa-industry fa-3x\"></span>\n              <h4>Textiles</h4>\n              <br>\n            </div>\n          </div>\n\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  services works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  team works!\n</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _industry_industry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./industry/industry.component */ "./src/app/industry/industry.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");









const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'industry', component: _industry_industry_component__WEBPACK_IMPORTED_MODULE_3__["IndustryComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isShown = false;
        this.title = 'hml-app';
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _industry_industry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./industry/industry.component */ "./src/app/industry/industry.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
            _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"],
            _industry_industry_component__WEBPACK_IMPORTED_MODULE_12__["IndustryComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\nbody{\r\n    background-color: #25274d;\r\n}\r\n.contact{\r\n    padding: 4%;\r\n    height: 400px;\r\n}\r\n.col-md-3{\r\n    background: #ff9b00;\r\n    padding: 4%;\r\n    border-top-left-radius: 0.5rem;\r\n    border-bottom-left-radius: 0.5rem;\r\n}\r\n.contact-info{\r\n    margin-top:10%;\r\n}\r\n.contact-info img{\r\n    margin-bottom: 15%;\r\n}\r\n.contact-info h2{\r\n    margin-bottom: 10%;\r\n}\r\n.col-md-9{\r\n    background: #fff;\r\n    padding: 3%;\r\n    border-top-right-radius: 0.5rem;\r\n    border-bottom-right-radius: 0.5rem;\r\n}\r\n.contact-form label{\r\n    font-weight:600;\r\n}\r\n.contact-form button{\r\n    background: #25274d;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 25%;\r\n}\r\n.contact-form button:focus{\r\n    box-shadow:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xyXG59XHJcbi5jb250YWN0e1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbi5jb2wtbWQtM3tcclxuICAgIGJhY2tncm91bmQ6ICNmZjliMDA7XHJcbiAgICBwYWRkaW5nOiA0JTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG4uY29udGFjdC1pbmZve1xyXG4gICAgbWFyZ2luLXRvcDoxMCU7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyBpbWd7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG4uY29sLW1kLTl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG4uY29udGFjdC1mb3JtIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5jb250YWN0LWZvcm0gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93Om5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nimg{\r\n  width: 100%;\r\n  height:400px\r\n}\r\n\r\n/* * {box-sizing:border-box}\r\n\r\n.slideshow-container {\r\n  max-width: 1000px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.mySlides {\r\n  display: none;\r\n}\r\n\r\n\r\n.prev, .next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  margin-top: -22px;\r\n  padding: 16px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n  transition: 0.6s ease;\r\n  border-radius: 0 3px 3px 0;\r\n  user-select: none;\r\n}\r\n\r\n\r\n.next {\r\n  right: 0;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n\r\n.prev:hover, .next:hover {\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\n\r\n\r\n.text {\r\n  color: #f2f2f2;\r\n  font-size: 15px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.numbertext {\r\n  color: #f2f2f2;\r\n  font-size: 12px;\r\n  padding: 8px 12px;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n\r\n.dot {\r\n  cursor: pointer;\r\n  height: 15px;\r\n  width: 15px;\r\n  margin: 0 2px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  transition: background-color 0.6s ease;\r\n}\r\n\r\n.active, .dot:hover {\r\n  background-color: #717171;\r\n}\r\n\r\n\r\n.fade {\r\n  -webkit-animation-name: fade;\r\n  -webkit-animation-duration: 1.5s;\r\n  animation-name: fade;\r\n  animation-duration: 1.5s;\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n}\r\n\r\n@keyframes fade {\r\n  from {opacity: .4}\r\n  to {opacity: 1}\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEZHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo0MDBweFxyXG59XHJcblxyXG4vKiAqIHtib3gtc2l6aW5nOmJvcmRlci1ib3h9XHJcblxyXG4uc2xpZGVzaG93LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5wcmV2LCAubmV4dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5cclxuLm5leHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG59XHJcblxyXG5cclxuLnByZXY6aG92ZXIsIC5uZXh0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbn1cclxuXHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubnVtYmVydGV4dCB7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcblxyXG4uZG90IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xyXG59XHJcblxyXG4uYWN0aXZlLCAuZG90OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xyXG59XHJcblxyXG5cclxuLmZhZGUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XHJcbiAgZnJvbSB7b3BhY2l0eTogLjR9XHJcbiAgdG8ge29wYWNpdHk6IDF9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgZnJvbSB7b3BhY2l0eTogLjR9XHJcbiAgdG8ge29wYWNpdHk6IDF9XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let HomeComponent = class HomeComponent {
    constructor(config) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/industry/industry.component.css":
/*!*************************************************!*\
  !*** ./src/app/industry/industry.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZHVzdHJ5L2luZHVzdHJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/industry/industry.component.ts":
/*!************************************************!*\
  !*** ./src/app/industry/industry.component.ts ***!
  \************************************************/
/*! exports provided: IndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndustryComponent", function() { return IndustryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndustryComponent = class IndustryComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndustryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-industry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./industry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/industry/industry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./industry.component.css */ "./src/app/industry/industry.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndustryComponent);



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServicesComponent);



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamComponent = class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TeamComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\hml\hml-app - Copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
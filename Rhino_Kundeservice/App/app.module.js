"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var faq_component_1 = require("./components/faq/faq.component");
var faq_search_component_1 = require("./components/faq/faq-search/faq-search.component");
var faq_category_component_1 = require("./components/faq/faq-category/faq-category.component");
var faq_question_component_1 = require("./components/faq/faq-category/faq-question/faq-question.component");
var customerservice_component_1 = require("./components/customerservice/customerservice.component");
var inquiry_component_1 = require("./components/inquiry/inquiry.component");
var data_service_1 = require("./services/data.service");
var appRoutes = [
    { path: 'Inquiry', component: inquiry_component_1.InquiryComponent },
    { path: 'CustomerService', component: customerservice_component_1.CustomerServiceComponent },
    { path: "**", component: faq_component_1.FAQComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components legges til her i declarations
            app_component_1.AppComponent,
            faq_component_1.FAQComponent,
            faq_search_component_1.FAQSearch,
            faq_category_component_1.FAQCategoryComponent,
            faq_question_component_1.FAQQuestionComponent,
            inquiry_component_1.InquiryComponent,
            customerservice_component_1.CustomerServiceComponent
        ],
        imports: [
            // Modules legges til her i imports
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [
            // Services legges til her i providers
            data_service_1.DataService
        ],
        bootstrap: [
            // Main app component som skal vises - root component
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
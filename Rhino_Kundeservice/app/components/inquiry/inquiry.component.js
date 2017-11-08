"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var data_service_1 = require("../../services/data.service");
var inquiry_model_1 = require("../../models/inquiry/inquiry.model");
var InquiryComponent = (function () {
    function InquiryComponent(dataService, fb, router) {
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.isOpen = false;
        this.isOK = false;
        this.qForm = fb.group({
            firstname: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            lastname: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            question: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
    }
    InquiryComponent.prototype.onSubmit = function () {
        var _this = this;
        var question = new inquiry_model_1.Inquiry();
        question.FirstName = this.qForm.value.firstname;
        question.LastName = this.qForm.value.lastname;
        question.Email = this.qForm.value.email;
        question.Question = this.qForm.value.question;
        this.isOK = false;
        this.isOpen = true;
        this.message = "Vent litt mens vi poster din henvendelse ...";
        this.dataService.postInquiry(question)
            .subscribe(function (res) {
            _this.isOK = true;
            _this.message = "Tusen takk for din henvendelse!";
            _this.clearForm();
            _this.url = '/CustomerService';
        }, function (error) {
            _this.isOK = true;
            _this.url = '';
            _this.message = error;
        }, function () { return console.log("Question posted to api/CustomerService"); });
    };
    InquiryComponent.prototype.clearForm = function () {
        this.qForm.setValue({
            firstname: "",
            lastname: "",
            email: "",
            question: ""
        });
        this.qForm.markAsPristine();
    };
    InquiryComponent.prototype.closeDialogBox = function () {
        var _this = this;
        this.isOpen = false;
        if (this.url.length > 0)
            setTimeout(function () {
                _this.router.navigate([_this.url]);
            }, 1250);
    };
    InquiryComponent.prototype.closeForm = function () {
        if (this.outsideJob != null)
            this.outsideJob.execute();
    };
    return InquiryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InquiryComponent.prototype, "outsideJob", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], InquiryComponent.prototype, "fromOutside", void 0);
InquiryComponent = __decorate([
    core_1.Component({
        selector: 'app-inquiry',
        templateUrl: './app/components/inquiry/inquiry.component.html',
    }),
    __metadata("design:paramtypes", [data_service_1.DataService, forms_1.FormBuilder, router_1.Router])
], InquiryComponent);
exports.InquiryComponent = InquiryComponent;
//# sourceMappingURL=inquiry.component.js.map
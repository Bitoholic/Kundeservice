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
var faq_component_1 = require("../faq.component");
var FAQCategoryComponent = (function () {
    function FAQCategoryComponent(_faqList) {
        this._faqList = _faqList;
        this.questions = [];
        this.qaList = [];
        _faqList.addCategory(this);
    }
    FAQCategoryComponent.prototype.ngOnInit = function () {
        this.isOpen = false;
    };
    FAQCategoryComponent.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    FAQCategoryComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this._faqList.closeOthers(this);
        }
        else {
            this.isOpen = false;
        }
    };
    FAQCategoryComponent.prototype.closeOtherQuestions = function (openQuestion) {
        this.questions.forEach(function (question) {
            if (openQuestion !== question)
                question.isOpen = false;
        });
    };
    return FAQCategoryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FAQCategoryComponent.prototype, "category", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FAQCategoryComponent.prototype, "glyph", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FAQCategoryComponent.prototype, "qaList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FAQCategoryComponent.prototype, "isOpen", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FAQCategoryComponent.prototype, "index", void 0);
FAQCategoryComponent = __decorate([
    core_1.Component({
        selector: 'app-faq-category',
        templateUrl: './app/components/faq/faq-category/faq-category.component.html'
    }),
    __metadata("design:paramtypes", [faq_component_1.FAQComponent])
], FAQCategoryComponent);
exports.FAQCategoryComponent = FAQCategoryComponent;
//# sourceMappingURL=faq-category.component.js.map
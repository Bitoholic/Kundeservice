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
var faq_category_component_1 = require("../faq-category.component");
var FAQQuestionComponent = (function () {
    function FAQQuestionComponent(_qaList) {
        this._qaList = _qaList;
        _qaList.addQuestion(this);
    }
    FAQQuestionComponent.prototype.ngOnInit = function () {
        this.isOpen = false;
    };
    FAQQuestionComponent.prototype.toggleOpen = function () {
        if (!this.isOpen) {
            this.isOpen = true;
            this._qaList.closeOtherQuestions(this);
        }
        else {
            this.isOpen = false;
        }
    };
    return FAQQuestionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FAQQuestionComponent.prototype, "qa", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FAQQuestionComponent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FAQQuestionComponent.prototype, "isOpen", void 0);
FAQQuestionComponent = __decorate([
    core_1.Component({
        selector: 'app-faq-question',
        templateUrl: './app/components/faq/faq-category/faq-question/faq-question.component.html'
    }),
    __metadata("design:paramtypes", [faq_category_component_1.FAQCategoryComponent])
], FAQQuestionComponent);
exports.FAQQuestionComponent = FAQQuestionComponent;
//# sourceMappingURL=faq-question.component.js.map
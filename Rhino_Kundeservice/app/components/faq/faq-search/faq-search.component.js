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
var FAQSearch = (function () {
    function FAQSearch(_faqComponent) {
        this._faqComponent = _faqComponent;
        this.searchResult = [];
        _faqComponent.setSearchComponent(this);
    }
    FAQSearch.prototype.search = function (search) {
        var _this = this;
        if (!search || search.trim().length < 1)
            return;
        var words = search.trim().toLowerCase().split(" ");
        this.searchResult = [];
        // Vi tar ut hver kategori fra FAQ lista.
        this._faqComponent.faqList.forEach(function (faq) {
            var qaList = faq.QAList;
            // Hver kategori har en QA liste. Vi tar du hvert enkelt spørsmal/svar fra denne.
            for (var i = 0; i < qaList.length; i++) {
                var qa = qaList[i];
                var result = {
                    id: faq.Id,
                    value: 0,
                    category: faq.Category,
                    qa: qa
                };
                // Hvis hele søkeordet matcher en del av spørsmålet har vi et treff.
                if (qa.Question.toLowerCase().includes(search.trim()))
                    result.value += 10;
                // Vi sjekker så om deler av søkeordet matcher en del av spørsmålet eller kategorien.
                words.forEach(function (word) {
                    if (faq.Category.toLowerCase().includes(word))
                        result.value += 5;
                    var pos = -1;
                    while ((pos = qa.Question.toLowerCase().indexOf(word, pos + 1)) != -1)
                        result.value++;
                });
                // Hvis søket ga match legger vi det i listen over resultater.
                if (result.value > 0)
                    _this.searchResult.push(result);
            }
        });
        this.searchResult.sort(function (a, b) {
            return (b.value - a.value);
        });
        this.isOpen = true;
    };
    FAQSearch.prototype.close = function () {
        this.isOpen = false;
    };
    return FAQSearch;
}());
FAQSearch = __decorate([
    core_1.Component({
        selector: 'app-faq-search',
        templateUrl: './app/components/faq/faq-search/faq-search.component.html'
    }),
    __metadata("design:paramtypes", [faq_component_1.FAQComponent])
], FAQSearch);
exports.FAQSearch = FAQSearch;
//# sourceMappingURL=faq-search.component.js.map
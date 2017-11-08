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
var data_service_1 = require("../../services/data.service");
var FAQComponent = (function () {
    function FAQComponent(dataService) {
        this.dataService = dataService;
        this.categories = [];
        this.faqList = [];
        this.isDone = false;
        this.isOpen = false;
    }
    FAQComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getFAQList().subscribe(function (JsonData) {
            _this.faqList = JsonData;
            _this.isDone = true;
        });
    };
    FAQComponent.prototype.addCategory = function (category) {
        this.categories.push(category);
    };
    FAQComponent.prototype.closeOthers = function (openCategory) {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            if (openCategory !== cat) {
                cat.isOpen = false;
            }
        }
    };
    FAQComponent.prototype.showForm = function () {
        this.isOpen = !this.isOpen;
    };
    FAQComponent.prototype.execute = function () {
        this.showForm();
    };
    FAQComponent.prototype.setSearchComponent = function (searchComponent) {
        this.searchComponent = searchComponent;
    };
    FAQComponent.prototype.showSearch = function () {
        this.searchComponent.search(this.search);
    };
    return FAQComponent;
}());
FAQComponent = __decorate([
    core_1.Component({
        selector: 'app-faq',
        templateUrl: './app/components/faq/faq.component.html',
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], FAQComponent);
exports.FAQComponent = FAQComponent;
//# sourceMappingURL=faq.component.js.map
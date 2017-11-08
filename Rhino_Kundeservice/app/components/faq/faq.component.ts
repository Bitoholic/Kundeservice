import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FAQCategoryComponent } from './faq-category/faq-category.component';
import { FAQSearch } from './faq-search/faq-search.component';


@Component({
    selector: 'app-faq',
    templateUrl: './app/components/faq/faq.component.html',
})
export class FAQComponent implements OnInit, Job {
    categories: Array<FAQCategoryComponent> = [];
    search: string;
    searchComponent: FAQSearch;
    faqList: Array<FAQ> = [];
    isDone: boolean = false;
    isOpen: boolean = false;


    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getFAQList().subscribe((JsonData) => {
            this.faqList = JsonData;
            this.isDone = true;
        });
    }

    addCategory(category: FAQCategoryComponent) {
        this.categories.push(category);
    }

    closeOthers(openCategory: FAQCategoryComponent) {
        for (let cat of this.categories) {
            if (openCategory !== cat) {
                cat.isOpen = false;
            }
        }
    }

    showForm() {
        this.isOpen = !this.isOpen;
    }

    execute(): void {
        this.showForm();
    }


    setSearchComponent(searchComponent: FAQSearch) {
        this.searchComponent = searchComponent;
    }

    showSearch() {
        this.searchComponent.search(this.search);
    }
}

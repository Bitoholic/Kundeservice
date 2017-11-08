import { Component, Input, OnInit } from '@angular/core';

import { FAQCategoryComponent } from '../faq-category.component';

@Component({
    selector: 'app-faq-question',
    templateUrl: './app/components/faq/faq-category/faq-question/faq-question.component.html'
})
export class FAQQuestionComponent implements OnInit {
    @Input() qa: QA;
    @Input() index: number;
    @Input() isOpen: boolean;


    constructor(private _qaList: FAQCategoryComponent) {
        _qaList.addQuestion(this);
    }

    ngOnInit(): void {
        this.isOpen = false;
    }

    toggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
            this._qaList.closeOtherQuestions(this);
        } else {
            this.isOpen = false;
        }
    }
}
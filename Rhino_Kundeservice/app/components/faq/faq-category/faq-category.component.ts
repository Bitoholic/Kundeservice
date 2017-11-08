import { Component, Input, OnInit } from '@angular/core';

import { FAQComponent } from '../faq.component';
import { FAQQuestionComponent } from './faq-question/faq-question.component';


@Component({
    selector: 'app-faq-category',
    templateUrl: './app/components/faq/faq-category/faq-category.component.html'
})
export class FAQCategoryComponent implements OnInit {
    questions: Array<FAQQuestionComponent> = [];
    @Input() category: string;
    @Input() glyph: string;
    @Input() qaList: Array<QA> = [];
    @Input() isOpen: boolean;
    @Input() index: number;


    constructor(private _faqList: FAQComponent) {
        _faqList.addCategory(this);
    }

    ngOnInit(): void {
        this.isOpen = false;
    }

    addQuestion(question: FAQQuestionComponent) {
        this.questions.push(question);
    }

    toggleOpen() {
        if (!this.isOpen) {
            this.isOpen = true;
            this._faqList.closeOthers(this);
        } else {
            this.isOpen = false;
        }
    }

    closeOtherQuestions(openQuestion: FAQQuestionComponent) {
        this.questions.forEach((question: FAQQuestionComponent) => {
            if (openQuestion !== question)
                question.isOpen = false;
        });
    }
}
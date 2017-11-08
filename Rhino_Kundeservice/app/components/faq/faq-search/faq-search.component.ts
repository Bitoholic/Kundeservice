import { Component } from '@angular/core';

import { FAQComponent } from '../faq.component';


@Component({
    selector: 'app-faq-search',
    templateUrl: './app/components/faq/faq-search/faq-search.component.html'
})
export class FAQSearch {
    searchResult: Array<SearchResult> = [];
    isOpen: boolean;

    constructor(private _faqComponent: FAQComponent) {
        _faqComponent.setSearchComponent(this);
    }

    search(search: string) {
        if (!search || search.trim().length < 1) return;

        let words = search.trim().toLowerCase().split(" ");
        this.searchResult = [];

        // Vi tar ut hver kategori fra FAQ lista.
        this._faqComponent.faqList.forEach((faq: FAQ) => {
            var qaList = faq.QAList;

            // Hver kategori har en QA liste. Vi tar du hvert enkelt spørsmal/svar fra denne.
            for (var i = 0; i < qaList.length; i++) {
                var qa = qaList[i];
                var result: SearchResult = {
                    id: faq.Id,
                    value: 0,
                    category: faq.Category,
                    qa: qa
                };

                // Hvis hele søkeordet matcher en del av spørsmålet har vi et treff.
                if (qa.Question.toLowerCase().includes(search.trim()))
                    result.value += 10;

                // Vi sjekker så om deler av søkeordet matcher en del av spørsmålet eller kategorien.
                words.forEach((word: string) => {
                    if (faq.Category.toLowerCase().includes(word))
                        result.value += 5;

                    var pos = -1;

                    while ((pos = qa.Question.toLowerCase().indexOf(word, pos + 1)) != -1)
                        result.value++;
                });

                // Hvis søket ga match legger vi det i listen over resultater.
                if (result.value > 0)
                    this.searchResult.push(result);
            }
        });
        

        this.searchResult.sort((a, b) => {
            return (b.value - a.value);
        });

        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FAQComponent } from './components/faq/faq.component';
import { FAQSearch } from './components/faq/faq-search/faq-search.component';
import { FAQCategoryComponent } from './components/faq/faq-category/faq-category.component';
import { FAQQuestionComponent } from './components/faq/faq-category/faq-question/faq-question.component';
import { CustomerServiceComponent } from './components/customerservice/customerservice.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';

import { DataService } from './services/data.service';


const appRoutes: Routes = [
    { path: 'Inquiry', component: InquiryComponent },
    { path: 'CustomerService', component: CustomerServiceComponent },
    { path: "**", component: FAQComponent }
];

@NgModule({
    declarations: [
        // Components legges til her i declarations
        AppComponent,
        FAQComponent,
        FAQSearch,
        FAQCategoryComponent,
        FAQQuestionComponent,
        InquiryComponent,
        CustomerServiceComponent
    ],
    imports: [
        // Modules legges til her i imports
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        // Services legges til her i providers
        DataService
    ],
    bootstrap: [
        // Main app component som skal vises - root component
        AppComponent
    ]
})
export class AppModule { }


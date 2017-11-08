import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Inquiry } from '../../models/inquiry/inquiry.model';

@Component({
    selector: 'app-inquiry',
    templateUrl: './app/components/inquiry/inquiry.component.html',
})
export class InquiryComponent {
    @Input() outsideJob: Job;
    @Input() fromOutside: boolean;
    qForm: FormGroup;
    isOpen: boolean = false;
    isOK: boolean = false;
    message: string;
    url: string;

    constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) {
        this.qForm = fb.group({
            firstname: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            lastname: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            question: [null, Validators.compose([Validators.required, Validators.minLength(5)])]
        });
    }

    onSubmit() {
        var question = new Inquiry();

        question.FirstName = this.qForm.value.firstname;
        question.LastName = this.qForm.value.lastname;
        question.Email = this.qForm.value.email;
        question.Question = this.qForm.value.question;

        this.isOK = false;
        this.isOpen = true;
        this.message = "Vent litt mens vi poster din henvendelse ..."

        this.dataService.postInquiry(question)
            .subscribe((res) => {
                this.isOK = true;
                this.message = "Tusen takk for din henvendelse!";
                this.clearForm();
                this.url = '/CustomerService';
            },
            error => {
                this.isOK = true;
                this.url = '';
                this.message = error;
            },
            () => console.log("Question posted to api/CustomerService"));
    }

    clearForm() {
        this.qForm.setValue({
            firstname: "",
            lastname: "",
            email: "",
            question: ""
        });
        this.qForm.markAsPristine();
    }

    closeDialogBox() {
        this.isOpen = false;
        if (this.url.length > 0)
            setTimeout(() => {
                this.router.navigate([this.url])
            }, 1250);
    }

    closeForm() {
        if (this.outsideJob != null)
            this.outsideJob.execute();
    }
}
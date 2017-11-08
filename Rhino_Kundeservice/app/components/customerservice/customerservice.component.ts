import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Inquiry } from '../../models/inquiry/inquiry.model';


@Component({
    selector: 'app-customerservice',
    templateUrl: './app/components/customerservice/customerservice.component.html',
})
export class CustomerServiceComponent implements OnInit {
    inquiryList: Array<Inquiry> = [];
    isDone: boolean = false;


    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getInquiryList().subscribe((JsonData) => {
            this.inquiryList = JsonData;
            this.isDone = true;
        });
    }
}
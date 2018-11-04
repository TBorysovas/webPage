import { Component, OnInit } from '@angular/core';
import { UserForm } from '../_models/user-form';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    myform: FormGroup;

    options = ['New Projects', 'Price'];

    userModel = new UserForm();

    constructor() { }

    ngOnInit() { }

    onSubmit(value: any) {
        console.log(value);
    }

}

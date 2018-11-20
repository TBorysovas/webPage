import { Component, OnInit } from '@angular/core';
import { UserForm } from '../_models/user-form';
import { FormGroup } from '@angular/forms';
import swal from 'sweetalert2';

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
        if (value) {
            swal({
                title: 'Thank you for contacting us!',
                text: 'We will review your message and return back to you whenever possible',
                type: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(function () {
                location.reload();
            }, 2100);
        }
    };


}

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

    onSubmit(result: any) {
        if (!result.userName || !result.emailAddress || !result.topicSelected || !result.message) {
            return;
        } else {
            swal({
                title: 'Thank you for contacting us!',
                html: 'We will review your message and<br /> return back to you whenever possible,<br />',
                type: 'success',
                showConfirmButton: false,
                timer: 2000
            });
            setTimeout(function () {
                location.reload(true);
            }, 2100);
        }
    };


}

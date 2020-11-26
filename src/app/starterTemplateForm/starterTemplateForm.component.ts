import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName:  'John',
            lastName:   'Doe',
            address:    '123 Main St',
            city:       'Calgary',
            province:   'Alberta',
            country:    'Canada',
            postalCode: 'A1A 1A1',
            phoneNumber:'111-222-3333',
            email:      'jdoe@email.com'
        };
    }

    onSubmit() {
        this.message =
        
        `<div class="userInfo">
            <h2>
                You typed
            </h2>
        <b>First Name:</b>     ${this.customer.firstName}<br> 
        <b>Last Name:</b>      ${this.customer.lastName}<br> 
        <b>Address:</b>        ${this.customer.address}<br> 
        <b>City:</b>           ${this.customer.city}<br> 
        <b>Province:</b>       ${this.customer.province}<br> 
        <b>Country:</b>        ${this.customer.country}<br> 
        <b>Postal Code:</b>    ${this.customer.postalCode}<br> 
        <b>Phone Number:</b>   ${this.customer.phoneNumber}<br> 
        `;

         document.body.innerHTML = this.message;
    }



}
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Http, RequestOptions, Headers } from "@angular/http";
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { Router } from '@angular/router';


@Component({
    templateUrl: 'ajoutBat.html',
    styleUrls: ['ajoutBat.scss']
})

export class AjoutBatComponent implements OnInit {

    constructor(
        private router: Router,
        private http: Http
    ) { }

    ngOnInit() {

    }
    public emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);
}

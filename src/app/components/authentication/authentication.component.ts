import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'fx-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
    params: any;
    constructor(private router: Router, activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {}
}

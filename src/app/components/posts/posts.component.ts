import {Component, OnInit} from '@angular/core';
import {MainserviceService} from "../../../services/mainservice.service";

//import {GeneralService} from "../../../../../xlearn/src/services/general.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    repos: [];

    loading: boolean = false;
    errorMessage;

    constructor(private service: MainserviceService) {
    }

    ngOnInit(): void {


    }
}

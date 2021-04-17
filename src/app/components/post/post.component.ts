import {Component, OnInit} from '@angular/core';
import {MainserviceService} from "../../../services/mainservice.service";


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    constructor(private service: MainserviceService) {
    }

    ngOnInit(): void {


    }


}

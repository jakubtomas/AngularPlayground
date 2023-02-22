import {Component, OnInit} from '@angular/core';
//import {MainService} from "../../../services/mainservice.service";
import {MainserviceService} from "../../../services/mainservice.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    result: Object;


    constructor(private route: ActivatedRoute, private service: MainserviceService) {

    }

    ngOnInit(): void {
        // take data from url parameter

        const routeParams = this.route.snapshot.paramMap;
        const placeId = Number(routeParams.get('postId'));

        console.log("post id is " + placeId);

        this.service.getOnePost(placeId).subscribe(data => {
            console.log("data from  service ");
            console.log(data);
          //  console.log(JSON.stringify(data));
            this.result = data
        })
    }

}

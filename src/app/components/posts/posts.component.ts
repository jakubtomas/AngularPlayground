import { Component, OnInit } from '@angular/core';
//import {MainService} from "../../../services/mainservice.service";
import { MainserviceService } from "../../../services/mainservice.service";

//import {GeneralService} from "../../../../../xlearn/src/services/general.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  currentItem: string = 'message from posts.component';

  result: Object;

  loading: boolean = false;
  errorMessage;

  constructor(private service: MainserviceService) {
  }

  ngOnInit(): void {
    console.log("function run");

    this.service.getAllPosts().subscribe(data => {
      console.log(data);

      this.result = data
    });
  }


  addItem(newItem: string) {
    this.items.push(newItem);
  }

}

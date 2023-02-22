import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-postschild',
  templateUrl: './postschild.component.html',
  styleUrls: ['./postschild.component.css']
})
export class PostschildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  @Input() item ='';
  constructor() {
  }

  ngOnInit(): void {

  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

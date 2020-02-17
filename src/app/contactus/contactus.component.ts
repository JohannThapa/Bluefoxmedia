import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  focus2;
  focusnum;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CARDMOCK } from './mock-cards';
declare var $: any;

@Component({
  selector: 'app-cards-portfolio',
  templateUrl: './cards-portfolio.component.html',
  styleUrls: ['./cards-portfolio.component.css']
})
export class CardsPortfolioComponent implements OnInit {

  title = 'Business Card';
  cards = CARDMOCK;
  constructor() { }

  ngOnInit() {

  }

}

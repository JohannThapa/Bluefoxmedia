import { Component, OnInit } from '@angular/core';
import { LOGOMOCK } from './mock-logos';

@Component({
  selector: 'app-logos-portofolio',
  templateUrl: './logos-portofolio.component.html',
  styleUrls: ['./logos-portofolio.component.css']
})
export class LogosPortofolioComponent implements OnInit {
  logos = LOGOMOCK;
  constructor() { }

  ngOnInit() {
  }

}

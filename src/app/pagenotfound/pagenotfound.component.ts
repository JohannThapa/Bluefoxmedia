import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

const Application = ( function () {
  let canvas;
  let ctx;
  let imgData;
  let pix;
  let WIDTH;
  let HEIGHT;
  let flickerInterval;

  const init = function () {
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      canvas.width = WIDTH = 700;
      canvas.height = HEIGHT = 500;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.fill();
      imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
      pix = imgData.data;
      // tslint:disable-next-line: no-use-before-declare
      flickerInterval = setInterval(flickering, 30);
  };

  const flickering = function () {
      for (let i = 0; i < pix.length; i += 4) {
          const color = (Math.random() * 255) + 50;
          pix[i] = color;
          pix[i + 1] = color;
          pix[i + 2] = color;
      }
      ctx.putImageData(imgData, 0, 0);
  };

  return {
      init: init
  };
}());

Application.init();
  }

}

import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  options = {
    fullWidth: true,
    indicators: true
  };

  constructor() { }


  ngOnInit() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);  }


}

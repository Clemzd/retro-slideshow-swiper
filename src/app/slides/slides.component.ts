import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import SwiperCore, {Keyboard, Navigation, Pagination, Virtual} from 'swiper';
import {Image} from "../models/image.model";
import {SwiperComponent} from "swiper/angular";

declare var OriDomi: any;

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent implements OnInit, AfterViewInit {

  images: Image[] = [
    {
      src: 'assets/DSC_0007.JPG',
      alt: 'Image 1',
    }, {
      src: 'assets/DSC_0019.JPG',
      alt: 'Image 2'
    }, {
      src: 'assets/DSC_0188.JPG',
      alt: 'Image 3'
    }, {
      src: 'assets/DSC_0192.JPG',
      alt: 'Image 4'
    },
    {
      src: 'assets/DSC_0194.JPG',
      alt: 'Image 5'
    },
    {
      src: 'assets/DSC_0210.JPG',
      alt: 'Image 6'
    }, {
      src: 'assets/DSC_0219.JPG',
      alt: 'Image 7'
    }
  ]
  @ViewChild('swiperComponent', {static: false}) swiperComponent: SwiperComponent | undefined;

  constructor() {
  }

  keydown(event: KeyboardEvent) {
    console.log(event.key);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const slides = document.getElementsByClassName('oridami-effect');
    console.log(slides);
    Array.from(slides).forEach(
      (slide) => {
        const paper = new OriDomi(slide, {
          hPanels: 2,
          // vPanels: 10,
          ripple: true,
          shading: true,
          shadingIntensity: 1
        });
        paper.accordion(5, 'top');
      }
    )
  }

  // @HostListener('document:keyup', ['$event'])
  // handleDeleteKeyboardEvent(event: KeyboardEvent) {
  //   this.swiperComponent?.swiperRef.slideNext();
  //
  // }


}

import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  @ViewChildren('project' ) p: ElementRef;

  ngOnInit() {
  }

  filter(tag: string) {
    console.log(tag);
    if(this.p) {
      this.p['_results'].forEach(element => {
        console.log(element.nativeElement.innerHTML)
        if (element.nativeElement.innerHTML.indexOf(tag)==-1) {
          console.log('hiding')
          element.nativeElement.style.display='none';
        } else {
          element.nativeElement.style.display='block';
        }
      });
    } 
  }

}
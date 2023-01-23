import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-details-challenge',
  templateUrl: './details-challenge.page.html',
  styleUrls: ['./details-challenge.page.scss'],
})
export class DetailsChallengePage implements OnInit {


  content: number = 1;
  activeOption = 1;

  showContent(opt: number) {
    this.content = opt;
}

  constructor() { }


  ngOnInit() {

  }

}

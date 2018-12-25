import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <img src="../assets/img/not-found.svg" class="mx-auto d-block" height="300px">
    <h1 class="display-1 text-center">
      Page Not Found !
    </h1>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

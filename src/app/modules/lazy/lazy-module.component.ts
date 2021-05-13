import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  template: '<p>lazy module:<p> '
})
export class LazyModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

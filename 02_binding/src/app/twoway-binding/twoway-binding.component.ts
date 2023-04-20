import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <h1>Two Way Binding</h1>
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

}

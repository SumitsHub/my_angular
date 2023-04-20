import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>Interpolation</h1>
    <h2>
      Welcome {{name}}
    <h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  // Interpolation Example
  public name = "Joe";
  siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello "+ this.name;
  }
}

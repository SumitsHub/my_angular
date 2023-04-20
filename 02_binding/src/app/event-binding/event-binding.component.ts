import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>{{topic}}</h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="text='Welcome Joe'">Greet</button>
    {{text}}

    <h2>Template Reference Variables</h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public topic = "Event Binding";
  public text = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log(event);
    this.text = "Welcome to event binding";
  }

  logMessage(input : any) {
    console.log(input);
    console.log(input.value);
    
  }

}

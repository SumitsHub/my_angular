import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {
  colors = ['red', 'blue', 'orange', 'yellow', 'green']
  constructor() { }

  ngOnInit(): void {
  }

}

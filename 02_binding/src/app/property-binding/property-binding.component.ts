import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId = "unique";
  public isDisabled = true;

  public textSuccess = "text-success";
  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public messageStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

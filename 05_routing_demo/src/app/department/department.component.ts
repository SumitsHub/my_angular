import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  template: `
    <h3>Selected department with id = {{deptId}}</h3>

    <p>
      <button (click)="showOverview()">Overwiew</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>


    <button (click)="goPrevious()" class="btn">Prev</button>
    <button (click)="goNext()" class="btn">Next</button>

    <div>
      <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: [
    `
      .btn {
        display: inline-block;
        width: 50px;
        height: 20px;
        border: 1px solid #ddd;
        background-color: #ddd;
        margin: 0 10px;
        text-align: center;
        cursor: pointer;
      }
      div button {
        margin: 10px;
        margin-left: 50px;
      }
    `
  ]
})
export class DepartmentComponent implements OnInit {
  public deptId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // view doesen't update with following snapshot approach
    // let id = parseInt(this.route.snapshot.paramMap.get('id') || "0", 10);
    // this.deptId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || "0");
      this.deptId = id;
    })
  }
  goPrevious() {
    let prevId = this.deptId - 1;
    // this.router.navigate(['/departments', prevId]);
    this.router.navigate(['../', prevId], {relativeTo: this.route})
  }

  goNext() {
    let nextId = this.deptId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoDepartment() {
    let selectedId = this.deptId ? this.deptId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route})
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}

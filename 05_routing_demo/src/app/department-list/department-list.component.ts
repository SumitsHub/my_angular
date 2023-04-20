import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId = 0;
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'React'},
    {id: 4, name: 'MongoDB'},
    {id: 5, name: 'Python'}
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id') || "0");
      this.selectedId = id;
    })
  }
  onDepartmentClick(dept: {id: number, name: string}) {
    // this.router.navigate(['/departments', dept.id]);
    this.router.navigate([dept.id],{relativeTo: this.route});
  }

  isSelected(department: {id: number, name: string}) {
    return department.id === this.selectedId;
  }
}

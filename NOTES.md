# Install angular cli with following command
npm install -g @angular/cli

# Create new app with 
ng new my-app

# Generate new component using
ng g c test
g for generate
c for component

# Generate new component with inline template and styling
ng g c component-name -t -s
-t for inline template
-s for inline style

# Types of selectors
1. dynamic component 
ex: 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
<app-test></app-test>
2. classname 
ex: 
@Component({
  selector: '.app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
<div class="app-test"></div>
3. attribute 
ex: 
@Component({
  selector: '[app-test3]',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
<div app-test><div>

# Use of template and styles
Use template instead of templateUrl and styles instead of styleUrls to use html and css inside ts file. Use backtick if need to use multiple lines.

# Interpolation in Angular
Using JS variables in html file using {{}}
Example: {{name}} where name is JS variable defined inside respective component class.
## NOTE: 
1. template is not aware of global js variables like window.
2. we can't perform variable assingment in interpolation

# [ngClass] directive
Helps to apply multiple css classes

# [ngStyle] directive
Helps to apply multiple css styles

# [(ngModule)] directive
Hepls to achive two way data binding
Example: <input [(ngModule)]="name" type="text" />, where name is the variable defined inside respective class component

# Structural Directives
Template reference variables - starts with # and can be used to access particular template
1. ngIf
Example #01:
<h2 *ngIf="displayName; else elseBlock">
    Codevolution
</h2>
<ng-template #elseBlock>
    <h2>Hidden part</h2>
</ng-template>

Example #02:
<div *ngIf="displayName; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>
    <h3>If Part</h3>
</ng-template>

<ng-template #thenBlock>
    <h3>Else Part</h3>
</ng-template>

2. ngSwitch
Example: 
<div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Pick Again</div>
</div>

3. ngFor
Example:
<div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
    <h3>{{i}}: {{color}} {{f}} {{l}} {{o}} {{e}}</h3>
</div>


# Component Interaction
Component interaction is 2 way in angular.
@Input() and @Output() decorators are used.
Events are used to send data from child to parent.
From parent to child, data is passed through props.

# Pipes
Helps to format data in view without modifying original data.

# Services
A class with a specific purpose.
1. Share data
2. Implement application logic
3. External interaction, such as DB connection
Naming convention - .service.ts
Ex. employee.service.ts

# Dependency Injection (DI)
DI as a design pattern - DI is a coding pattern in which a class receives its depedencies from external sources rather than creating them itself.
DI as framework -
1. Define the EmplyeeService class
2. Register with Injector - register in app.module providers metadata, so that servce can be used by every child components
3. Declare as dependency in EmpList and EmpDetails

# Generate service using angular cli
ng g s employee

# @Injectable() decorator
@Injectable() decorator in service class indicates that, service might have dependency.
for component, @Component() decorator does the job.

# Fetching data using HTTP
1. fetching data using get method and returning an observable
getEmplyees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
}
2. extracting data by subscribing to method
this._employeeService.getEmplyees().subscribe(data => this.employees = data);

# new angular project with routing option
ng new project-name --routing

# Not found page | Wild card route
Should always be the last in routes as Routes matched from top to bottom.
{path: "**", component: NotFoundPageComponent}

# Optional route parameters
pass an object of optional paramters as key value pairs as second paramter to navigate method
this.router.navigate(['/departments', {id: selectedId}]);

# Child routes
 {
    path: 'department-list/:id', 
    component: DepartmentComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent},
      {path: '**', component: NotFoundPageComponent}
    ]
  },

# Angular Forms
1. Template Driven Forms (TDF)
Most of the code and logic resides in html template. Two way data binding with ngModel. Suitable for simple scenarios.
Directives used for data binding in TDF: 
  1. ngForm
  2. ngModel
  3. ngModelGroup
## Binding data to Model
Generate class using command
ng generate class ModelName
ex. ng generate class User

## ngModel properties - Tracking state and validity
Refer to image file: 06_Angular-Forms\ngModelProperties.JPG
Properties can be accessed using template variables
ex.
<input
  type="text"
  name="userName"
  #userName="ngModel"
  required
  class="form-control"
  [(ngModel)]="userModel.name"
/>
{{userName.pristine}}
{{userName.touched}}
{{userName.valid}}

2. Reactive Forms

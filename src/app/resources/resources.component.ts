import { Component } from '@angular/core';
import { Resource } from '../resource';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resource: Resource = { 
    name: 'Credits',
    id: "credits",
    amount: 1000
  };
  // resources: Resource[] = [
  // ];
}

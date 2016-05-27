import { Component } from '@angular/core';

export class Villain {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>Vile Villains!</h2>
  <ul class="villains">
    <li *ngFor="let villain of villains">
      {{villain.name}}
    </li>
  </ul>
  `
})

export class AppComponent {
  public villains = VILLAINS;
  title = 'Tour of Villains';
  villain: Villain = {
    id: 1,
    name: 'Snake'
  };
}

var VILLAINS: Villain[] = [
  { "id": 11, "name": "Mr. Naughty" },
  { "id": 12, "name": "Narcoleptic" },
  { "id": 13, "name": "BomberMan" },
  { "id": 14, "name": "Celery" },
  { "id": 15, "name": "Magnetious" },
  { "id": 16, "name": "RubberMean" },
  { "id": 17, "name": "Dynamo" },
  { "id": 18, "name": "Dr Evil" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];


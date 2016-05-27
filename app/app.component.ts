import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { VillainDetailComponent } from './villain-detail.component';
import { VillainService } from './villain.service';
import { Villain } from './villain';

@Component({
  selector: 'my-app',
  template: `
  <div class="dashlist">
    <h1>{{title}}</h1>
    <h2>Vile Villains!</h2>
    <ul class="villains">
      <li *ngFor="let villain of villains" (click)="onSelect(villain)" [class.selected]="villain === selectedVillain">
        <span class="badge">{{villain.id}}</span>{{villain.name}}
      </li>
    </ul>
  </div>
  <my-villain-detail [villain]="selectedVillain">
  </my-villain-detail>
  `,
  directives: [VillainDetailComponent],
  providers: [VillainService]
})

export class AppComponent implements OnInit {
  constructor(private villainService: VillainService) { }

  ngOnInit() {
    this.getVillains();
  }

  public villains: Villain[];
  title = 'Tour of Villains';

  selectedVillain: Villain;

  onSelect(villain: Villain) {
    this.selectedVillain = villain;
  }

  getVillains() {
    this.villainService.getVillains()
    .then(villains => this.villains = villains);
  }
}




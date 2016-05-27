import { Component, Input } from '@angular/core';
import { Villain } from './villain';

@Component({
  selector: 'my-villain-detail',
  template: `
  <div *ngIf="villain" class="selectedDetails">
    <h2>{{villain.name}} Details</h2>
    <label for="name">name:</label>
    <input type="text" placeholder="name" [(ngModel)]="villain.name"/>
  </div>
  `
})

export class VillainDetailComponent {
  @Input()
  villain: Villain;
}

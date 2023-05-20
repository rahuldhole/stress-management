import { Component } from '@angular/core';
import { Stressors } from '../Stressors';

@Component({
  selector: 'app-stressors',
  templateUrl: './stressors.component.html',
  styleUrls: ['./stressors.component.sass']
})
export class StressorsComponent {
  displayedColumns: string[] = ['id', 'name', 'description', "delete"];
  stressors: Stressors[] = [];
  dataSource = this.stressors;

  constructor() {
    this.stressors.push(new Stressors(1, 'Work', 'Work is stressful', false));
    this.stressors.push(new Stressors(2, 'School', 'School is stressful', false));
    this.stressors.push(new Stressors(3, 'Family', 'Family is stressful', false));
    this.stressors.push(new Stressors(4, 'Friends', 'Friends are stressful', false));
    this.stressors.push(new Stressors(5, 'Relationships', 'Relationships are stressful', false));
  }

  deleteStressor(id: number) {
    this.stressors = this.stressors.filter((stressor) => stressor.id !== id);
    this.dataSource = this.stressors;
  }
}

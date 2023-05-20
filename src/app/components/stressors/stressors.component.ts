import { Component } from '@angular/core';
import { Stressors } from '../../models/Stressors';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-stressors',
  templateUrl: './stressors.component.html',
  styleUrls: ['./stressors.component.sass']
})
export class StressorsComponent {
  displayedColumns: string[] = ['id', 'name', 'description', "delete"];
  stressors: Stressors[] = [];
  dataSource = this.stressors;

  constructor(public LocalStorage: LocalStorageService) {
    this.LocalStorage.get("stressors").then((data: any) => {
      if (data !== undefined) {
        this.stressors = data;
        this.dataSource = this.stressors;
      }
    });
  }

  deleteStressor(id: number) {
    this.stressors = this.stressors.filter((stressor) => stressor.id !== id);
    this.dataSource = this.stressors;
  }
}

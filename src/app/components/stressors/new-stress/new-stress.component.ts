import { Component } from '@angular/core';

@Component({
  selector: 'app-new-stress',
  templateUrl: './new-stress.component.html',
  styleUrls: ['./new-stress.component.sass']
})

export class NewStressComponent {
  openDialog() {
    console.log("openDialog");
  }

}

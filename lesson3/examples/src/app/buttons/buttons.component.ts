import { Component, OnInit } from '@angular/core';
import { notEqual } from 'assert';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   notActive: boolean = false;
   defNotActive: boolean = false;

   constructor() { }

   ngOnInit() { }

   makeThingsGray() {
      if (this.inactive) {
         this.inactive = !this.inactive;
      }
      if ( this.notActive) {
         this.notActive = !this.notActive;
      }
      if (this.defNotActive) {
         this.defNotActive = !this.defNotActive;
      }
   }

}

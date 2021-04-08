import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  confirmFlight() {
    let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmed) {
      document.getElementById("flightStatusHTML").innerHTML = "Shuttle in flight";
      // document.getElementsByClassName("shuttle-background").style.color = "blue";
      //shis is bullhonky ^^^ that one, pick up here
    }
  }
}

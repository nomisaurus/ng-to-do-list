import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  greeting: string;

  constructor() { }

  ngOnInit() {
    const now = new Date();
    const hour = now.getHours();
    console.log(hour);

    if (hour < 12) {
      console.log('good morning');
      this.greeting = 'Good Morning';
    } else if (hour < 18) {
      console.log('Good Morning');
      this.greeting = 'Good Afternoon';
    } else {
      console.log('good evening');
      this.greeting = 'Good Evening';

    }
  }

}

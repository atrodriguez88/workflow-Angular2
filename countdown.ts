import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
 selector: 'countdown',
 template: `<h1> Time : {{seconds}} </h1>`
})

class CountDownComponent {
 seconds:number = 25;
 interval:number;
 constructor() {
  setInterval(() => this.handler(), 1000)
 }

 handler():void{
 	if(--this.seconds < 1) {
 		this.seconds = 25; 
 	}
 }
}

@Component({
 selector: 'time',
 directives: [CountDownComponent],
 template: '<countdown></countdown>'
})
class TimerComponent{}

bootstrap(TimerComponent);
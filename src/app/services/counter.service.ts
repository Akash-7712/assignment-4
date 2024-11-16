import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public counter = 0;
  inCreaseCount() {
   this.counter = this.counter + 1;
  }
  getCount() {
   return this.counter;
  }
}

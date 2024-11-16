import { Component, signal } from '@angular/core';
import { UserService } from './services/userStatus.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  // counts = 0;

  constructor(
    private _userService: UserService,
    private _counterService: CounterService
  ) {}
  ngOnInit() {
    this.activeUsers = this._userService.activeUsers;
    this.inactiveUsers = this._userService.inactiveUsers;
    // this.counts = this._counterService.getCount();
  }
  get counts(){
    return this._counterService.getCount();
  }
}

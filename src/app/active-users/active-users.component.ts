import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/userStatus.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(private _userService: UserService){}

  onSetToInactive(id: number) {
    this._userService.setToInActive(id);
  }
}

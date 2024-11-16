import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from '../services/userStatus.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(private _userService: UserService){}

  onSetToActive(id: number) {
      this._userService.setToActive(id);
  }
}

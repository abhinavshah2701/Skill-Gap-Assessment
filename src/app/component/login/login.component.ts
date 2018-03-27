import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  showConfig() {
    this.userService.getConfig().
      .subscribe(data => this.config = {
          fname: data['fname'],
          lname:  data['lname']
      });
  }

}

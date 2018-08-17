import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn: boolean = this.authService.loggedIn;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
    this.loggedIn = this.authService.loggedIn;
  }

  onLogout() {
    this.authService.logout();
    this.loggedIn = this.authService.loggedIn;
  }
}

import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedState: boolean = false;
  constructor(public cartService: CartService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedSubject.subscribe((isLoggedIn: boolean)=> {
      this.loggedState = isLoggedIn;
      //and other logic
      console.log('State has been changed: ' + isLoggedIn);
    })
  }

  login() {
    this.authService.logIn();
  }

  logout() {
    this.authService.logOut();
  }

  protected readonly AuthService = AuthService;
}

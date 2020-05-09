import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service"; 
import { Router } from '@angular/router'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router, 
  ) {
    this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {

    if(this.identity)
    {
      localStorage.removeItem('identity')
      this._router.navigate([''])
    }
    else
    {
      this._router.navigate([''])
    }
    
  }

}

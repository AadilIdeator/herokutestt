import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular//forms';
import {reactiveuser} from "../shared/reactiveuser"
import { regx } from '../reactive-form//regx';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userform: FormGroup;

  constructor(private router:Router ,private fb :FormBuilder,private _userService:UserService) { }

  ngOnInit() {
    this.userform =this.fb.group({
      "username":['',[Validators.required,Validators.minLength(5),regx.username]],
      "email":['',[Validators.required,Validators.email]],
      "contactNo":['',[Validators.required,regx.contactNo]],
      "password":['',[Validators.required,regx.password]]
    })
  }
      AddUser(item){
        console.log(item);
        this._userService.register(item).subscribe(data=>{console.log(data);this.router.navigate(['/profile']);});

      }
}

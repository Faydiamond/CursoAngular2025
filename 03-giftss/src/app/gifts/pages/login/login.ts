import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.services';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule   ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {

  isLoader:boolean = false;
  loginObj: User ={
    nombre:"",
    identificacion: ""
  };

  router = inject(Router)
  userServ= inject(UserService)

  /*constructor(private userServ:UserService ) {

  }*/

  login(){
    this.userServ.onLogin(this.loginObj).subscribe({
    next: (response: any) => {
      if (response.result) {
        localStorage.setItem("YokenAngular", JSON.stringify(response.data));
        this.isLoader = true;
        this.router.navigateByUrl('/dashboard/search');
      } else {
        alert(response.message);
      }
    },
    error: (err) => {
      console.error("Login error:", err);
      alert("Wrong Credentials");
    },
    complete: () => {
      console.log("Login request completed ✅");
    }
  });

    /*
    debugger;
    console.log(this.loginObj);
    this.userServ.onLogin(this.loginObj).subscribe( (response:any)=>{
      debugger;
      if  (response.result){

        localStorage.setItem("YokenAngular",JSON.stringify(response.data) );
        this.isLoader = true;
        alert("Navegar")
        //this.router.navigateByUrl('/dashboard');
      }else{
        alert(response.message)
      }
    },error=>{
      alert("Wrong Credentials")
    } )*/
  }

}

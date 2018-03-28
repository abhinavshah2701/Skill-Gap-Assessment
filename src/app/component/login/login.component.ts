import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private httpService: HttpService,private formBuilder: FormBuilder,private router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)] ],
      password: ['', Validators.required ],
    });
  }

  onSubmit(values)
  {
    values['login'] = true;
    this.httpService.post('request_handler.php',values).then((response)=>{
      console.log(response);
      if(response['success']==true){
        window.alert("Login Successfull");
        this.router.navigate(['adminhome']);
      }
      else{
        window.alert(response['error_message']);
      }
    });
    console.log(values);
  }
}

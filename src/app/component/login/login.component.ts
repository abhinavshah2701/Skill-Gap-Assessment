import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { timeout } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private httpService: HttpService,private formBuilder: FormBuilder,private router: Router,private toastr: ToastrService) {
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
        this.toastr.success('Login Successfull','',{timeOut:3000,closeButton:true,progressBar:true});
        this.router.navigate(['adminhome']);
      }
      else{
        this.toastr.error(response['error_message'],'',{timeOut:3000,closeButton:true,progressBar:true});
      }
    });
    console.log(values);
  }
}

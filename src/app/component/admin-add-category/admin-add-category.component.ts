import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.scss']
})
export class AdminAddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private httpService: HttpService,private formBuilder: FormBuilder,private router: Router) {
    this.createForm();
   }

   ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required]
    });
  }

  onSubmit(values)
  {
    values['addCategory'] = true;
    this.httpService.post('request_handler.php',values).then((response)=>{
      console.log(response);
      if(response['success']==true){
        window.alert("Category Added");
        this.router.navigate(['adminManageCategory']);
      }
      else{
        window.alert(response['error_message']);
      }
    });
    console.log(values);
  }

}

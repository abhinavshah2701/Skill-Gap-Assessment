import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-manage-category',
  templateUrl: './admin-manage-category.component.html',
  styleUrls: ['./admin-manage-category.component.scss']
})
export class AdminManageCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories;

  constructor(private httpService: HttpService,private formBuilder: FormBuilder,private router: Router) {
    this.createForm();
    this.getCategoryData();
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
        this.getCategoryData();
        this.createForm();
      }
      else{
        window.alert(response['error_message']);
      }
    });
    console.log(values);
  }

  getCategoryData()
  {
    this.httpService.get('request_handler.php',{viewCategory:'viewCategory'}).then((response)=>{
      if (response['success'] == true) {
        this.categories = response['data'];
      }
    });
  }

}

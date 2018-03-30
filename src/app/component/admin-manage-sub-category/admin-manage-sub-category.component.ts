import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 


@Component({
  selector: 'app-admin-manage-sub-category',
  templateUrl: './admin-manage-sub-category.component.html',
  styleUrls: ['./admin-manage-sub-category.component.scss']
})
export class AdminManageSubCategoryComponent implements OnInit {

  subCategoryForm: FormGroup;
  categories;
  subcategories;
  
  constructor(private httpService: HttpService,private formBuilder: FormBuilder,private router: Router,private toastr: ToastrService) {
    this.createForm();
    this.getCategoryData();
    this.getSubCategoryData()
   }

   ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.subCategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required],
      subcategoryname: ['', Validators.required]
    });
  }
  

  onSubmit(values)
  {
    values['addSubCategory'] = true;
    this.httpService.post('request_handler.php',values).then((response)=>{
      console.log(response);
      if(response['success']==true){
        this.toastr.success('Sub Category Added','',{timeOut:3000,closeButton:true,progressBar:true});
        this.getCategoryData();
        this.getSubCategoryData()
        this.createForm();
      }
      else{
        this.toastr.error(response['error_message'],'',{timeOut:3000,closeButton:true,progressBar:true});
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

  getSubCategoryData()
  {
    this.httpService.get('request_handler.php',{viewSubCategory:'viewSubCategory'}).then((response)=>{
      if (response['success'] == true) {
        this.subcategories = response['data'];
      }
    });
  }

}

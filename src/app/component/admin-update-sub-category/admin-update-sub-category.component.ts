import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-update-sub-category',
  templateUrl: './admin-update-sub-category.component.html',
  styleUrls: ['./admin-update-sub-category.component.scss']
})
export class AdminUpdateSubCategoryComponent implements OnInit {

  editSubCategoryForm: FormGroup;
  category_description: string;
  sub_category_description: string;
  categories;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { 

    this.getCategoryData();
    
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editSubCategoryForm = this.formBuilder.group({
      categoryname: [this.category_description,Validators.required],
      subcategoryname: [this.sub_category_description,Validators.required],
    });
  }

  onSubmit(values) {
    values['updateSubCategory'] = true;
    const id = this.route.snapshot.paramMap.get('id');
    values['sub_category_id'] = id;
    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success('Sub Category Updated', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.router.navigate(['adminManageSubCategory']);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

  getCategoryData()
  {
    this.httpService.get('request_handler.php',{viewCategory:true}).then((response)=>{
      if (response['success'] == true) {
        this.categories = response['data'];
        this.getSubCategoryData();
      }
    });
  }

  getSubCategoryData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.get('request_handler.php', { viewSubCategoryData: true, sub_category_id: id }).then((response) => {
      if (response['success'] == true) {
        this.category_description = response['data'].category_description;
        this.sub_category_description = response['data'].sub_category_description;
        this.createForm();
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }



}

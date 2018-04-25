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
  selectedSubCategory: any;
  updateForm: boolean;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.createForm();
    this.getCategoryData();
    this.getSubCategoryData();
    this.selectedSubCategory = { category_description: '', sub_category_description: '' };
  }

  ngOnInit() {
  }

  createForm() {
    this.subCategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required],
      subcategoryname: ['', Validators.required]
    });
  }


  onSubmit(values) 
  {
    if (this.updateForm) {
      values['updateSubCategory'] = true;
      values['sub_category_id'] = this.selectedSubCategory['sub_category_id'];
    }
    else {
      values['addSubCategory'] = true;
    }

    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success(response['success_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.getSubCategoryData();
        this.subCategoryForm.reset({categoryname: ''});
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
    console.log(values);
  }

  getCategoryData() {
    this.httpService.get('request_handler.php', { viewCategory: true }).then((response) => {
      if (response['success'] == true) {
        this.categories = response['data'];
      }
    });
  }

  getSubCategoryData() {
    this.httpService.get('request_handler.php', { viewSubCategory: true }).then((response) => {
      if (response['success'] == true) {
        this.subcategories = response['data'];
      }
    });
  }


  updateSubCategory(subcategory) {
    this.selectedSubCategory = subcategory;
    this.toggleUpdate(true);
  }

  toggleUpdate(value: boolean) {
    this.updateForm = value;
  }

  deleteSubCategory(subcategory, i) {
    this.httpService.post('request_handler.php', { deleteSubCategory: true, sub_category_id: subcategory.sub_category_id }).then((response) => {
      if (response['success'] == true) {
        this.toastr.success(response['success_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.subcategories.splice(i, 1);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

}

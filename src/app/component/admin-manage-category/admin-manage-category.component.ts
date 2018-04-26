import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-manage-category',
  templateUrl: './admin-manage-category.component.html',
  styleUrls: ['./admin-manage-category.component.scss']
})
export class AdminManageCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories;
  selectedCategory: any;
  updateForm: boolean;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService, private location:Location) {
    this.createForm();
    this.getCategoryData();
    this.selectedCategory = { category_description: '' };
  }

  ngOnInit() {
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required]
    });
  }


  onSubmit(values) {

    if (this.updateForm) {
      values['updateCategory'] = true;
      values['category_id'] = this.selectedCategory['category_id'];
    }
    else {
      values['addCategory'] = true;
    }

    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success(response['success_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.getCategoryData();
        this.categoryForm.reset();
        this.location.back();
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

  getCategoryData() {
    this.httpService.get('request_handler.php', { viewCategory: true }).then((response) => {
      if (response['success'] == true) {
        this.categories = response['data'];
      }
    });
  }

  updateCategory(category) {
    this.selectedCategory = category;
    this.toggleUpdate(true);
  }

  toggleUpdate(value: boolean) {
    this.updateForm = value;
  }

  deleteCategory(category, i) {
    this.httpService.post('request_handler.php', { deleteCategory: true, category_id: category.category_id }).then((response) => {
      if (response['success'] == true) {
        this.toastr.success(response['success_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.categories.splice(i, 1);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

}

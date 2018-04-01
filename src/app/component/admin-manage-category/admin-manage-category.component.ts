import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-manage-category',
  templateUrl: './admin-manage-category.component.html',
  styleUrls: ['./admin-manage-category.component.scss']
})
export class AdminManageCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categories;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
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


  onSubmit(values) {
    values['addCategory'] = true;
    this.httpService.post('request_handler.php', values).then((response) => {
      console.log(response);
      if (response['success'] == true) {
        this.toastr.success('Category Added', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.getCategoryData();
        this.createForm();
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
    console.log(values);
  }

  getCategoryData() {
    this.httpService.get('request_handler.php', { viewCategory: 'viewCategory' }).then((response) => {
      if (response['success'] == true) {
        this.categories = response['data'];
      }
    });
  }

  deleteCategory(id) {
    this.httpService.post('request_handler.php', { deleteCategory: true, category_id: id }).then((response) => {
      console.log(response);
      if (response['success'] == true) {
        this.toastr.success('Category Deleted', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.getCategoryData();
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

}

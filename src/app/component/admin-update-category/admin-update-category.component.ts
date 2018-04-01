import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-update-category',
  templateUrl: './admin-update-category.component.html',
  styleUrls: ['./admin-update-category.component.scss']
})
export class AdminUpdateCategoryComponent implements OnInit {

  editCategoryForm: FormGroup;
  category_description: string;
  
  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

    this.createForm();
    this.getCategoryData();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editCategoryForm = this.formBuilder.group({
      categoryname: ['', Validators.required]
    });
  }

  onSubmit(values) {
    values['updateCategory'] = true;
    const id = this.route.snapshot.paramMap.get('id');
    values['category_id'] = id;
    this.httpService.post('request_handler.php', values).then((response) => {
      console.log(response);
      if (response['success'] == true) {
        this.toastr.success('Category Updated', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.router.navigate(['adminManageCategory']);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
    console.log(values);
  }

  
  getCategoryData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.get('request_handler.php', { viewCategoryData: true, category_id: id }).then((response) => {
      if (response['success'] == true) {
        this.category_description = response['data'].category_description;
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }


}

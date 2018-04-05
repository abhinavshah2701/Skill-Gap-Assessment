import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-update-form',
  templateUrl: './admin-update-form.component.html',
  styleUrls: ['./admin-update-form.component.scss']
})
export class AdminUpdateFormComponent implements OnInit {

  editForm: FormGroup;
  category_description: string;
  sub_category_description: string;
  skill_description: string;
  form_description: string;
  categories;
  subcategories;
  skills;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.getCategoryData();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      categoryname: [this.category_description, Validators.required],
      subcategoryname: [this.sub_category_description, Validators.required],
      skillname: [this.skill_description, Validators.required],
      formname: [this.form_description, Validators.required],
    });
  }

  onSubmit(values) {
    values['updateForm'] = true;
    const id = this.route.snapshot.paramMap.get('id');
    values['form_id'] = id;
    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success('Form Updated', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.router.navigate(['adminManageForm']);
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
        this.getSubCategoryData();
      }
    });
  }

  getSubCategoryData() {
    this.httpService.get('request_handler.php', { viewSubCategory: true }).then((response) => {
      if (response['success'] == true) {
        this.subcategories = response['data'];
        this.getSkillData();
      }
    });
  }

  getSkillData() {
    this.httpService.get('request_handler.php', { viewSkill: true }).then((response) => {
      if (response['success'] == true) {
        this.skills = response['data'];
        this.getFormData();
      }
    });
  }

  getFormData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.get('request_handler.php', { viewFormData: true, form_id: id }).then((response) => {
      if (response['success'] == true) {
        this.category_description = response['data'].category_description;
        this.sub_category_description = response['data'].sub_category_description;
        this.skill_description = response['data'].skill_description;
        this.form_description = response['data'].form_name;
        this.createForm();
        this.subcategories = this.subcategories.filter((data) => data.category_description == this.category_description);
        this.skills = this.skills.filter((data) => data.sub_category_description == this.sub_category_description);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }

  onSelect(category_description) {
    this.httpService.get('request_handler.php', { viewSubCategory: true }).then((response) => {
      if (response['success'] == true) {
        this.subcategories = response['data'];
        this.subcategories = this.subcategories.filter((data) => data.category_description == category_description);
      }
    });
  }

  onSelectSub(sub_category_description) {
    this.httpService.get('request_handler.php', { viewSkill: true }).then((response) => {
      if (response['success'] == true) {
        this.skills = response['data'];
        this.skills = this.skills.filter((data) => data.sub_category_description == sub_category_description);
      }
    });
  }

}

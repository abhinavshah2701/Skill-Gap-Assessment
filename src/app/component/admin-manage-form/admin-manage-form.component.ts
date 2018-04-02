import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-manage-form',
  templateUrl: './admin-manage-form.component.html',
  styleUrls: ['./admin-manage-form.component.scss']
})
export class AdminManageFormComponent implements OnInit {

  addform: FormGroup;
  categories;
  subcategories;
  skills;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.createForm();
    this.getCategoryData();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addform = this.formBuilder.group({
      categoryname: ['', Validators.required],
      subcategoryname: ['', Validators.required],
      skillname: ['', Validators.required],
      formname: ['', Validators.required]
    });
  }

  onSubmit(values) {
    // values['addSkill'] = true;
    // this.httpService.post('request_handler.php', values).then((response) => {
    //   console.log(response);
    //   if (response['success'] == true) {
    //     this.toastr.success('Skill Added', '', { timeOut: 3000, closeButton: true, progressBar: true });
    //     this.getCategoryData();
    //     this.getSkillData();
    //     this.createForm();
    //   }
    //   else {
    //     this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
    //   }
    // });
    console.log(values);
  }


  getCategoryData() {
    this.httpService.get('request_handler.php', { viewCategory: 'viewCategory' }).then((response) => {
      if (response['success'] == true) {
        this.categories = response['data'];
        this.getSubCategoryData();
      }
    });
  }

  getSubCategoryData() {
    this.httpService.get('request_handler.php', { viewSubCategory: 'viewSubCategory' }).then((response) => {
      if (response['success'] == true) {
        this.subcategories = response['data'];
        this.getSkillData();
      }
    });
  }

  getSkillData() {
    this.httpService.get('request_handler.php', { viewSkill: 'viewSkill' }).then((response) => {
      if (response['success'] == true) {
        this.skills = response['data'];
      }
    });
  }

  onSelect(category_id) {
    this.httpService.get('request_handler.php', { viewSubCategory: 'viewSubCategory' }).then((response) => {
      if (response['success'] == true) {
        this.subcategories = response['data'];
        this.subcategories = this.subcategories.filter((data) => data.category_id == category_id);
      }
    });
  }

  onSelectSub(sub_category_id) {
    this.httpService.get('request_handler.php', { viewSkill: 'viewSkill' }).then((response) => {
      if (response['success'] == true) {
        this.skills = response['data'];
        this.skills = this.skills.filter((data) => data.sub_category_id == sub_category_id);
      }
    });
  }

}

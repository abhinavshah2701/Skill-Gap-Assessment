import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-update-skill',
  templateUrl: './admin-update-skill.component.html',
  styleUrls: ['./admin-update-skill.component.scss']
})
export class AdminUpdateSkillComponent implements OnInit {

  editSkillForm: FormGroup;
  category_description: string;
  sub_category_description: string;
  skill_description: string;
  categories;
  subcategories;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.getCategoryData();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.editSkillForm = this.formBuilder.group({
      categoryname: [this.category_description, Validators.required],
      subcategoryname: [this.sub_category_description, Validators.required],
      skillname: [this.skill_description, Validators.required],
    });
  }

  onSubmit(values) {
    values['updateSkill'] = true;
    const id = this.route.snapshot.paramMap.get('id');
    values['skill_id'] = id;
    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success('Skill Updated', '', { timeOut: 3000, closeButton: true, progressBar: true });
        this.router.navigate(['adminManageSkill']);
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
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.get('request_handler.php', { viewSkillData: true, skill_id: id }).then((response) => {
      if (response['success'] == true) {
        this.category_description = response['data'].category_description;
        this.sub_category_description = response['data'].sub_category_description;
        this.skill_description = response['data'].skill_description;
        this.createForm();
        this.subcategories = this.subcategories.filter((data) => data.category_description == this.category_description);
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

}

import { Component, OnChanges, Input } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { QuestionClass, Option } from '../../data-model';

@Component({
  selector: 'app-admin-manage-question',
  templateUrl: './admin-manage-question.component.html',
  styleUrls: ['./admin-manage-question.component.scss']
})
export class AdminManageQuestionComponent implements OnChanges {
  @Input() question: QuestionClass;

  butDisabled: boolean = true;
  questionForm: FormGroup;
  form_description: string;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.createForm();
    this.getFormData();
  }

  ngOnChanges() {
    // this.questionForm.reset({});
    // this.setOptions(this.question.options);
  }

  createForm() {
    this.questionForm = this.formBuilder.group({
      questionname: '',
      questiontype: '',
      totalrating: '',
      option_array: this.formBuilder.array([])
    });
  }

  get option_array(): FormArray {
    return this.questionForm.get('option_array') as FormArray;
  };

  setOptions(options: Option[]) {
    const optionFGs = options.map(option => this.formBuilder.group(option));
    const optionFormArray = this.formBuilder.array(optionFGs);
    this.questionForm.setControl('option_array', optionFormArray);
  }

  addOption() {
    this.option_array.push(this.formBuilder.group(new Option()));
  }

  removeOption(index) {
    this.option_array.removeAt(index);
  }

  onSubmit(values) {
    // this.ngOnChanges();
    values['addQuestion'] = true;
    const id = this.route.snapshot.paramMap.get('id');
    values['form_id'] = id;
    this.httpService.post('request_handler.php', values).then((response) => {
      if (response['success'] == true) {
        this.toastr.success('Question Added', '', { timeOut: 3000, closeButton: true, progressBar: true });
        // this.router.navigate(['adminManageForm']);
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
    console.log(values);
  }

  getFormData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.get('request_handler.php', { viewFormData: true, form_id: id }).then((response) => {
      if (response['success'] == true) {
        this.form_description = response['data'].form_name;
      }
      else {
        this.toastr.error(response['error_message'], '', { timeOut: 3000, closeButton: true, progressBar: true });
      }
    });
  }
}

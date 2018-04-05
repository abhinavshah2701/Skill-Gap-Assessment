import { Component, OnChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { QuestionClass, Option } from '../../data-model';

@Component({
  selector: 'app-admin-add-question',
  templateUrl: './admin-add-question.component.html',
  styleUrls: ['./admin-add-question.component.scss']
})
export class AdminAddQuestionComponent implements OnChanges {
  @Input() question: QuestionClass;

  butDisabled: boolean = true;
  questionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  ngOnChanges() {
    // this.questionForm.reset({});
    this.setOptions(this.question.options);
  }

  createForm() {
    this.questionForm = this.fb.group({
      questionname: '',
      questiontype: '',
      totalrating: '',
      option_array: this.fb.array([])
    });
  }

  get option_array(): FormArray {
    return this.questionForm.get('option_array') as FormArray;
  };

  setOptions(options: Option[]) {
    const optionFGs = options.map(option => this.fb.group(option));
    const optionFormArray = this.fb.array(optionFGs);
    this.questionForm.setControl('option_array', optionFormArray);
  }

  addOption() {
    this.option_array.push(this.fb.group(new Option()));
  }

  removeOption(index) {
    this.option_array.removeAt(index);
  }

  onSubmit() {
    this.ngOnChanges();
  }

}

import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { QuestionClass, Question, questionTypes,categoryTypes,skillsTypes,subcategoryTypes } from '../../data-model';

@Component({
  selector: 'app-admin-create-form',
  templateUrl: './admin-create-form.component.html',
  styleUrls: ['./admin-create-form.component.scss']
})
export class AdminCreateFormComponent implements OnChanges {
  @Input() question: QuestionClass;

  butDisabled: boolean = true;
  questionForm: FormGroup;

  categoryTypes = categoryTypes;
  subcategoryTypes = subcategoryTypes;
  skillsTypes = skillsTypes;
  questionTypes = questionTypes;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.questionForm = this.fb.group({
      category: '',
      subcategory: '',
      skills: '',
      formname: '',
      question_array: this.fb.array([])
    });
  } 

  ngOnChanges() {
    // this.questionForm.reset({
    // });
    this.setQuestions(this.question.questions);
  }

  get question_array(): FormArray {
    return this.questionForm.get('question_array') as FormArray;
  };

  setQuestions(questions: Question[]) {
    const questionFGs = questions.map(question => this.fb.group(question));
    const questionFormArray = this.fb.array(questionFGs);
    this.questionForm.setControl('question_array', questionFormArray);
  }

  addQuestion() {
    this.question_array.push(this.fb.group(new Question()));
  }

  removeQuestion(index)
  {
    this.question_array.removeAt(index);
  }

  onSubmit() {
    this.ngOnChanges();
  }

}

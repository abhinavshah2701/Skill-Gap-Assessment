export class QuestionClass {
  category = '';
  subcategory = '';
  skills = '';
  formname = '';
  questions: Question[];
}

export class Question {
  questionname = '';
  questiontype = '';
}

export const questionTypes = ['Single Choice', 'Multiple Choice', 'Short Answer'];
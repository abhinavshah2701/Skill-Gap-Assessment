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
export const categoryTypes = ['Technical', 'Leadership', 'Behavioral','Soft'];
export const subcategoryTypes = ['Web Technologies', 'Big Data Skills', 'Communication skills','Team works'];
export const skillsTypes = ['Php', 'Html', 'Java','Android'];

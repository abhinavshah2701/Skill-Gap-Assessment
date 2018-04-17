export class QuestionClass {
  questionname = '';
  questiontype = '';
  totalrating = '';
  options: Option[];
}

export class Option {
  optionid = 0;
  optionname = '';
  optionrating = '';
  correctoption = '';
}
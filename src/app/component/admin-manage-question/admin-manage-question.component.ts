import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-manage-question',
  templateUrl: './admin-manage-question.component.html',
  styleUrls: ['./admin-manage-question.component.scss']
})
export class AdminManageQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

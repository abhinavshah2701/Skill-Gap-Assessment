import { Component, OnInit } from '@angular/core';
import { categoryTypes } from '../../data-model';

@Component({
  selector: 'app-admin-add-sub-category',
  templateUrl: './admin-add-sub-category.component.html',
  styleUrls: ['./admin-add-sub-category.component.scss']
})
export class AdminAddSubCategoryComponent implements OnInit {

  categoryTypes = categoryTypes;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-manage-category',
  templateUrl: './admin-manage-category.component.html',
  styleUrls: ['./admin-manage-category.component.scss']
})
export class AdminManageCategoryComponent implements OnInit {

  categories;

  constructor(private httpService: HttpService,private router: Router) {
    this.getData();
   }

  ngOnInit() {
  }

  getData()
  {
    this.httpService.get('request_handler.php',{viewCategory:'viewCategory'}).then((response)=>{
      if (response['success'] == true) {
        this.categories = response['data'];
      }
      // console.log(this.categories);      
    });
  }

}

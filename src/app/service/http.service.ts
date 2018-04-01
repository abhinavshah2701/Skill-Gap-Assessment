import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

  host = "http://localhost/Skill_Gap_Assessment_API/"
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  get(api,params){
    let paramsObj = new HttpParams();
    for(let param in params){
      paramsObj = paramsObj.append(param, params[param]);
    } 
    return new Promise((resolve, reject) => {
      this.http.get(this.host+api,{params: paramsObj}).subscribe((response)=>{
        resolve(response);
      });
    });
  }

  post(api,params){
    let paramString = JSON.stringify(params);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.host+api,paramString,httpOptions).subscribe((response)=>{
        resolve(response);
      });
    });
  }


}

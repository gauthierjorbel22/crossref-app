import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  getData(search:string):Observable<any>{
    const url = `https://api.crossref.org/works?query=${search}`;
    return this.http.get<any>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  bookData:any;

  constructor(private http:HttpClient) { }

  addBookData(details:any){
    this.http.post("http://localhost:3000/contents",details).subscribe()
  }
  getBookData(){
    return this.http.get("http://localhost:3000/contents")
  }
  getBookById(id:any){
    return this.http.get("http://localhost:3000/contents/"+id)
  }
  deleteBook(id:any){
    this.http.delete("http://localhost:3000/contents/"+id).subscribe()
  }
}

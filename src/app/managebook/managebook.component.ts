import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-managebook',
  templateUrl: './managebook.component.html',
  styleUrls: ['./managebook.component.css']
})
export class ManagebookComponent implements OnInit{
  bookDetails:any;
  constructor(private dataService:DataService){

  }
ngOnInit(){
  this.dataService.getBookData().subscribe(data=>{
    this.bookDetails=data;
  })
}
  deleteBook(id:any){
    this.dataService.deleteBook(id)
    this.ngOnInit()
  }
}

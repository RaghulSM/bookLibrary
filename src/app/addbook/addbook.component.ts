import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private dataService:DataService){}

  name:any='';
  author:any='';
  description:any='';

ngOnInit(){
  this.name='';
  this.author='';
  this.description='';
}
addBook(){
 let details={
    name:this.name,
    author:this.author,
    description:this.description
 }
  this.dataService.addBookData(details)
  alert("added")
  this.ngOnInit()

}


}

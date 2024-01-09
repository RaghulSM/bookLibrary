import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookData:any="";
  details:any="";
constructor(private dataService:DataService, private router:Router,private http:HttpClient){
  this.dataService.getBookData().subscribe(data=>{
    this.bookData=data;
  })
}
ngOnInit(){}

viewDetails(value:any){
  // this.dataService.getBookById(id).subscribe(result=>{
  //   this.details=result;
  //   this.dataService.bookData=this.details;
  //   this.router.navigateByUrl("/viewDetails")
  // })
  this.dataService.bookData=value;
  this.router.navigate(['/viewDetails'],{queryParams:{description:value}})
}


}

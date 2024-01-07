import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

   bookDes:any=this.dataService.bookData;
  ngOnInit(){
  }
  constructor(private dataService:DataService){

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

   bookDes:any=this.dataService.bookData;
   desc:any;
  ngOnInit(){
  }
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(data=>{
      this.desc=data["description"];
      console.log(data)
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tab-faculty',
  templateUrl: './tab-faculty.component.html',
})
export class TabFacultyComponent implements OnInit {
color: any;
faculties:any;
constructor(private dataService:DataService) {

 }

 ngOnInit(): void {
  this.getfacultyList();
 }
 getfacultyList()
 {
  this.dataService.getData('faculties').subscribe(
    res =>{
      console.log(res);
      this.faculties = res['data']
    }
  )
 }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  showdrop1 = false;
  showdrop2 = false;
  showdrop3 = false;
  showdrop5 = false;
  toggledrop1(n:number){
    if(n==1) { this.showdrop1 = !this.showdrop1; }
    if(n==2) { this.showdrop2 = !this.showdrop2; }
    if(n==3) { this.showdrop3 = !this.showdrop3; }
    if(n==5) { this.showdrop5 = !this.showdrop5; }
  }

  savedata()
  {
    //collect and save data fromm inputs
  }
}

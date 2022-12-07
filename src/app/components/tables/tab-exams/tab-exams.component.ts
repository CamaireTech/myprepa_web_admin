import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-tab-exams',
  templateUrl: './tab-exams.component.html',
})
export class TabExamsComponent implements OnInit {
color: any;
exams:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getExamsList()
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  getExamsList()
  {
   this.dataService.getData('exams').subscribe(
     res =>{
       console.log(res);
       this.exams = res['data']
     }
   )
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

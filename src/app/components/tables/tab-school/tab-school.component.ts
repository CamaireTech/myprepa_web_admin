import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tab-school',
  templateUrl: './tab-school.component.html',
})
export class TabSchoolComponent implements OnInit {
  color: any;
  schools:any;
  constructor(private dataService:DataService) {

   }

   ngOnInit(): void {
    this.getSchoolList();
   }
   getSchoolList()
   {
    this.dataService.getData('schools').subscribe(
      res =>{
        console.log(res);
        this.schools = res
      }
    )
   }



  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  showdrop1 = false;
  showdrop5 = false;
  toggledrop1(n:number){
    if(n==1) { this.showdrop1 = !this.showdrop1; }
    if(n==5) { this.showdrop5 = !this.showdrop5; }
  }

}

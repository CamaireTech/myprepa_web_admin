import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tab-correction',
  templateUrl: './tab-correction.component.html',
})
export class TabCorrectionComponent implements OnInit {
color: any;
corrections:any;
  constructor(private dataService:DataService) { }


  ngOnInit(): void {
    this.getCorrectinList();
  }


  getCorrectinList()
  {
   this.dataService.getData('corrections').subscribe(
     res =>{
       console.log(res['data']);
       this.corrections = res['data']
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


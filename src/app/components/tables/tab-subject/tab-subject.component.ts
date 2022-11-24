import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-subject',
  templateUrl: './tab-subject.component.html',
})
export class TabSubjectComponent implements OnInit {
  color: any;

  constructor() { }

  ngOnInit(): void {
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

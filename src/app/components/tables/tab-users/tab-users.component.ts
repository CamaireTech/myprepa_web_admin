import { Component, OnInit } from '@angular/core';2
import {DataService} from 'src/app/service/data.service';

@Component({
  selector: 'app-tab-users',
  templateUrl: './tab-users.component.html',
})
export class TabUsersComponent implements OnInit {

  color: any;
  users:any;
  constructor(private dataService:DataService) { 

  }

  ngOnInit(): void {
    this.getUserList();
  }
  
    getUserList()
    {
      console.log("list of all User");
      this.dataService.getData('users').subscribe(
        res=> {
          console.log(res);
          this.users = res;
        }
      )
    }

    savedata(){

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
}

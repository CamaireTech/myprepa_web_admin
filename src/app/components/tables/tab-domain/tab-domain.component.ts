// import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tab-domain',
  templateUrl: './tab-domain.component.html',
})
export class TabDomainComponent implements OnInit {
color: any;
domains:any;
constructor(private dataService:DataService, formBuilder: FormBuilder,) {

 }

 ngOnInit(): void {
  this.getdomainList();
 }

//  checkoutForm = this.formBuilder.group({
//   domainName: '',
// });


// onSubmit(): void {
//   // Process checkout data here
//   // this.items = this.cartService.clearCart();
//   console.warn('Your order has been submitted', this.checkoutForm.value);
//   this.checkoutForm.reset();
// }


 getdomainList()
 {
  this.dataService.getData('domains').subscribe(
    res =>{
      console.log(res);
      this.domains = res
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

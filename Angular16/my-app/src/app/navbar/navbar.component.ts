import { Component } from "@angular/core";

@Component({
  selector:'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent{
  allawMakeServer:boolean=false;
  ServerStatus:string ='there is no server created';
  ServerName:string='';
  serverCreated:boolean=false;
  constructor(){
    setInterval(() => {
      this.allawMakeServer=true;
    }, 3000);
  }
//   onClick(){
//     this.ServerStatus='server was created';
//     this.serverCreated=true;
//   }
//   onUpdateServerName(event :Event){
// // console.log((<HTMLInputElement>event.target).value);
// this.ServerName=(<HTMLInputElement>event.target).value;
//   }
}
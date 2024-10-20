import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
TrackName:string='';
Tracks:string[]=['DotNet','Mearn','Testing','Social Media','Node'];
DotNet:string[]=['Mansoura','Samrt','Banha'];
Mearn:string[]=['Assuit','Alex','Samrt'];
Testing:string[]=['Menia','Capital','Smart'];
SocialMedia:string[]=['Mansoura','Samrt','Banha'];
Node:string[]=['Mansora','Samrt','Capital'];
}

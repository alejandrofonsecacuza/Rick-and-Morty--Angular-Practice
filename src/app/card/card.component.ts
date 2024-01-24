import { Component, Input } from '@angular/core';
import { card } from '../Class/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() target!:card;





}

import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../../api/objects/Event";
@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent implements OnInit {


  @Input()
  event: Event | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}

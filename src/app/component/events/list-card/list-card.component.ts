import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EventService} from '../../../service/api/event.service';
import {Event} from '../../../api/objects/Event';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  list$: Observable<Event[]> | undefined;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.list$ = this.eventService.listEvent();
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Event} from "../../api/objects/Event";
import {EventService} from "../../service/api/event.service";

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.page.html',
  styleUrls: ['./event-search.page.scss'],
})
export class EventSearchPage implements OnInit {

  list$: Observable<Event[]> | undefined;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    console.log("yo event");
    this.list$ = this.eventService.listEvent();
  }

}

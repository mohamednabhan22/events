import { Component, OnInit } from "@angular/core";
import { EventsService } from "./../../services/events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"],
})
export class EventsComponent implements OnInit {
  constructor(private s: EventsService) {}
  news: any[];

  ngOnInit() {
    this.s.getEvents().subscribe((res) => (this.news = res.sources));
  }
}

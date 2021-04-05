import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor(private http: HttpClient) {
    this.getEvents().subscribe((res) => console.log(res));
  }

  getEvents(): Observable<any> {
    return this.http.get(
      "https://newsapi.org/v2/sources?language=en&apiKey=3ac2ae5095254d089ae77ee9f9ccf24b"
    );
  }
}

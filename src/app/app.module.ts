import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from './components/about/about.component';
import { ActivityComponent } from './components/activity/activity.component';
import { RecentComponent } from './components/recent/recent.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HotspotsComponent } from './components/hotspots/hotspots.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, ActivityComponent, RecentComponent, EventsComponent, FooterComponent, HotspotsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

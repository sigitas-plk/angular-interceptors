import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderService } from './header.service';
import { Header2Service } from './header-2.service';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Header2Service,
      multi: true
    }
  ]
})
export class AppModule {}

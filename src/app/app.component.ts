import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
    // http
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .subscribe(data => console.log(data), e => console.log('error', e));
    http
      .get('http://google.com/somthing/asdf?FASDF=ASDF&asdf=asdf', {
        observe: 'response'
      })
      .subscribe(data => console.log(data));
  }
}

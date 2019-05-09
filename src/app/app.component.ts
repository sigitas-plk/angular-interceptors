import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from './header.service';
import { Header2Service } from './header-2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(data => console.log('data', data));
  }
}

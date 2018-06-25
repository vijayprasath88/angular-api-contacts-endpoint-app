import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vijay`s First Angular App';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  displayedColumns = ['name', 'location', 'role', 'company'];
  data: any = {};
  dataSource = this.data;


constructor(private http: Http) {
  console.log('Hello fellow user');
  this.getContacts();
  this.getData();
  
}

getData(){
 return this.http.get(this.apiUrl)
  .map((res: Response) => res.json())
}

getContacts() {
  this.getData().subscribe(data => {
    console.log(data);
    this.data = data
  })
}

}

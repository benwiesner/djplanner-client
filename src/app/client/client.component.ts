import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private http: HttpClient) { }

  //Client Array
  clients: any;

  ngOnInit() {
    this.http.get('http://localhost:8080/api/clients').subscribe( (data) =>{
      this.clients = data;
    });
  }

}

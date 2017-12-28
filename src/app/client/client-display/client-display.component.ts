import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client-display.component.html',
  styleUrls: ['./client-display.component.css']
})
export class ClientDisplayComponent implements OnInit {

  constructor(private http: HttpClient) { }

  //Client Array
  clients: any;

  ngOnInit() {
    this.http.get('http://localhost:8080/api/clients').subscribe( (data) =>{
      this.clients = data;
    });
  }

}

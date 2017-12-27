import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { ViewEncapsulation } from '@angular/compiler/src/core';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  //encapsulation: ViewEncapsulation.None
})

export class ClientCreateComponent implements OnInit {

  client = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

 saveClient() {
    this.http.post('http://localhost:8080/api/clients', this.client).subscribe( (res) =>
    {
      this.router.navigate(['/clients']);
    }, (err) => {
      console.log(err);
    }
  );
 }

 cancel() {
   console.log("Cancel Button Pressed!");
   this.router.navigate(['/clients']);
 }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html'
})
export class ClientEditComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  client = {};
  
  ngOnInit() {
    this.getClient(this.route.snapshot.params['id']);
  }
  getClient(id){
    this.http.get('http://localhost:8080/api/clients/'+id).subscribe(data =>
    {
      this.client = data;
    })
  }

  updateClient(id, data){
    this.http.post('http://localhost:8080/api/clients/'+id, this.client)
    .subscribe(res =>
      {
        let id = res['id'];
        this.router.navigate(['/clients']);
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteClient(id){
    this.http.delete('http://localhost:8080/api/clients/'+id).subscribe( res => {
      this.router.navigate(['/clients']);
    }, (err) => {
    console.log(err);
  });
  }
}

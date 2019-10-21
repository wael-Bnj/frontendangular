import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router) { }
  onSubmit() {
    // I will learn after my test because it's the first use of node.js
     
    this.router.navigate(['']); 
  }
  ngOnInit() {
  }

}

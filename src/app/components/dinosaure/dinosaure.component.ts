import { Component, OnInit } from '@angular/core';
import { DinosaureService } from 'src/app/services/dinosaure/dinosaure.service';
import { Dinosaure } from 'src/app/models/dinosaure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinosaure',
  templateUrl: './dinosaure.component.html',
  styleUrls: ['./dinosaure.component.css']
})

export class DinosaureComponent implements OnInit {
  listdinosaure;
  dinosaure:any={};
  form:any={};
  dinosaures:Dinosaure[];
  selectedDinosaure:Dinosaure;
  toggeleForm:boolean=false;
  constructor(private  dinosaureservice : DinosaureService,private router:Router) { }

  onSubmit(){
    console.log(this.form);
    this.dinosaure.age=this.form.age;
    this.dinosaure.famille=this.form.famille;
    this.dinosaure.race=this.form.race;
    this.dinosaure.nourriture=this.form.nourriture;
    this.dinosaureservice.addDinosaure(this.form).subscribe(data =>{ 
      console.log(this.form);
      this.dinosaureservice.getDinosaure().subscribe (
        data=>{
          console.log(data);
          this.listdinosaure=data;
          
        });
      }    
      , err=>{
      console.log(err);
    });
  }
  //(click)="onBackButtonClick()"
  
  onBackButtonClick():void{
    this.router.navigate(['/login']);
  }
  

  updateContact(dinosaure) {
    this.selectedDinosaure=dinosaure;
    this.toggeleForm= !this.toggeleForm;
  }

  EditDinosaure(form){
    let newDinosaure: Dinosaure={
      _id:this.selectedDinosaure._id,
      age:form.value.age,
      famille:form.value.famille,
      race:form.value.race,
      nourriture:form.value.nourriture
    }
    this.dinosaureservice.updateDinosaure(newDinosaure).subscribe(result=>{
     
      this.dinosaureservice.getDinosaure().subscribe (
        data=>{
          console.log(data);
          this.listdinosaure=data;
        });
  
    })
  }
  deleteDinosaure(id:any){
    var dinosaures=this.dinosaures;
    this.dinosaureservice.deleteDinosaure(id).subscribe(Data=>{
      this.dinosaureservice.getDinosaure().subscribe (
        data=>{
          console.log(data);
          this.listdinosaure=data;
        });    
    })
  }

  ngOnInit() {
    this.dinosaureservice.getDinosaure().subscribe (
      data=>{
        console.log(data);
        this.listdinosaure=data;
      });
  }
}

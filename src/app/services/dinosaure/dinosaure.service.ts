import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dinosaure } from 'src/app/models/dinosaure';


@Injectable({
  providedIn: 'root'
})
export class DinosaureService {

  constructor(private http: HttpClient) { }
  
public addDinosaure(Dinosaure:Dinosaure ) {
  
  return this.http.post('http://localhost:3000/api/Dinosaure',Dinosaure);

}

public getDinosaure() {
  
  return this.http.get<any>('http://localhost:3000/api/Dinosaures');

}

public deleteDinosaure(id){
  return this.http.delete<any>('http://localhost:3000/api/Dinosaure/'+id);
}
public updateDinosaure(Dinosaure: Dinosaure){
  return this.http.put("http://localhost:3000/api/Dinosaure/"+Dinosaure._id,Dinosaure);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor(private http: HttpClient) { }

  getBuild(weaponWgt:number,maxWtg:number):Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/gear', {weaponWgt, maxWtg})
  }

  getObs():Observable<string>{
    return new Observable((obs)=>{
      obs.next('ciao');
      obs.next('come va?');
      setTimeout(()=>{
        obs.next('BENE');
        obs.complete();
      },5000)
    }).pipe(
      map((data) => 'aaaaaaaa'+data)
    )
  }
}

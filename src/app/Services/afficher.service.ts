import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { AUTH_APIironment } from 'src/AUTH_APIironments/AUTH_APIironment';
// 
const AUTH_API = 'http://localhost:8080/api/auth';

// const AUTH_API = AUTH_APIironment.AUTH_API;

@Injectable({
  providedIn: 'root'
})
export class AfficherService {

  constructor(private http: HttpClient ) { }  
  afficherChallenge() :Observable<any>{
    return this.http.get(`${AUTH_API}/challenge/afficher`);
  }
  
  
  afficherChallengeEncours() :Observable<any>{
    return this.http.get(`http://localhost:8080/devs/auth/challenge/encours`);
  }

  afficherChallengeAvenir() :Observable<any>{
    return this.http.get(`http://localhost:8080/devs/auth/challenge/avenir`);
  }
  afficherChallengeTerminer() :Observable<any>{
    return this.http.get(`http://localhost:8080/devs/auth/challenge/terminer`);
  }

  afficherChallengeDecroissant() :Observable<any>{
    return this.http.get(`${AUTH_API}/challenge/decroissant`);
  }
  afficherCritereParIdChallenge(idChallenge:number) :Observable<any>{
    return this.http.get(`http://localhost:8080/devs/auth/challenge/criteria/${idChallenge}`)
  }
  afficherParIdChallenge(idChallenge:number) :Observable<any>{
    return this.http.get(`http://localhost:8080/devs/auth/challenge/afficher/${idChallenge}`)
  }

 
}

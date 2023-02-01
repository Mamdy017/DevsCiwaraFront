import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjouterServiceService {

  constructor(private http: HttpClient) { }

  AjouterTeam(nom: string,creatorId: number, challengeId: number): Observable<any> {
    const body = { nom };
    return this.http.post(`http://localhost:8080/devs/auth/team/teams/${creatorId}/${challengeId}`, body);
  }

}

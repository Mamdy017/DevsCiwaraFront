import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjouterServiceService {

  constructor(private http: HttpClient) { }

  AjouterTeam(formData: FormData) {
    return this.http.post('http://localhost:8080/devs/auth/team/teams', formData);
  }

}

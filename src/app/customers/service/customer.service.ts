import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(public http: HttpClient) {}

  public getCustomers() {
    return this.http.get<Digimon[]>(
      'https://digimon-api.vercel.app/api/digimon'
    );
  }
}

interface Digimon {
  id: number;
  name: string;
  img: string;
  level: number;
}

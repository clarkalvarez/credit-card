import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { App } from "./credit-card.model";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private cardsUrl = "http://localhost:3000/cardDB";

  constructor(private http: HttpClient) {}

  getCards(): Observable<App[]> {
    return this.http.get<App[]>(this.cardsUrl);
  }

  createCard(payload: App): Observable<App> {
    return this.http.post<App>(this.cardsUrl, payload);
  }

}

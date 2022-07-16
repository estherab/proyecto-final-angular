import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor(private httpClient: HttpClient) { }

  public setData = {
    name: "",
    price: "",
    image: "",
    collection: "",
    pieces: "",
    age: "",
    measures: "",
    year: "",
    id: ""
  }

  public clearSet() {
    this.setData = {
      name: "",
      price: "",
      image: "",
      collection: "",
      pieces: "",
      age: "",
      measures: "",
      year: "",
      id: ""
    }
  }

  public editItem(item: any) {
    this.setData = item;
  }

  public getSets() {
    return this.httpClient.get("http://localhost:3000/sets");
  }

  public postSet(newSet: any) {
    return this.httpClient.post("http://localhost:3000/sets", newSet);
  }

  public deleteSet(setID: any) {
    return this.httpClient.delete("http://localhost:3000/sets/" + setID)
  }

  public editSet(setID: any, editedSet: any) {
    return this.httpClient.put("http://localhost:3000/sets/" + setID, editedSet)
  }
}

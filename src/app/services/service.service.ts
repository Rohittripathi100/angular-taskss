import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient : HttpClient) { }

getProduct(){
  return this._httpClient.get(`./assets/cars.json`).pipe(map(res => {
    return res;
}

  
)
)


}
}

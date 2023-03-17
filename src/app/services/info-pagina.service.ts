import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  items:any=[];

  constructor(private http: HttpClient) {
    this.http.get("https://pagina-studio-84df5-default-rtdb.europe-west1.firebasedatabase.app/Servicios.json")
    .subscribe(respuesta=>{
      this.items=respuesta;
      console.log(respuesta)
    })
   }
}

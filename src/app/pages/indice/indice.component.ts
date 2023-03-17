import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { CargarScriptsService } from "./../../cargar-scripts.service";
@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit
{
  constructor(
    private _CargarScripts:CargarScriptsService,
    public DB:InfoPaginaService
  )
  {_CargarScripts.Carga(["main"])}
  ngOnInit(): any{

  }
}

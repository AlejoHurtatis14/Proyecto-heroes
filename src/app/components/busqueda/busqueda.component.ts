import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/servicios/heroes.service';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  @Input() heroe: any [] = [];
  termino: string;

  constructor( private _heroService: HeroesService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.termino = params ['termino'];
      this.heroe = this._heroService.buscarHeroes(params ['termino']);
    });
  }

}

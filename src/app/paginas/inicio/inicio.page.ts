import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  pokemones: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPokemones();
  }

  getPokemones() {
    this.http.get<any[]>('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(
      data => {
        this.pokemones = data;
      },
      (error) => {
        console.error('Error fetching Pokemon:', error);
      }
    );
  }

}

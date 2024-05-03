import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    PokemonPageRoutingModule
  ],
  declarations: [PokemonPage]
})
export class PokemonPageModule {}

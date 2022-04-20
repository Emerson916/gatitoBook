import { RodapeModule } from './../components/rodape/rodape.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

@NgModule({
  declarations: [ListAnimalsComponent],
  imports: [CommonModule, AnimalsRoutingModule, HeaderModule, RodapeModule],
})
export class AnimalsModule {}

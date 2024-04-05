import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [HeroeComponent,ListComponent],
  declarations: [HeroeComponent, ListComponent],
  providers: [],
})
export class HeroesModule { }

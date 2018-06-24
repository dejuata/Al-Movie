import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorListCardComponent } from './actor-list-card/actor-list-card.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
// import { MovieListCardComponent } from '../movie/movie-list-card/movie-list-card.component';

@NgModule({
  imports: [
    CommonModule,
    ActorRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    SharedModule,
  ],
  declarations: [
    ActorListComponent,
    ActorListCardComponent,
    ActorDetailComponent,
    // MovieListCardComponent,
  ],
  exports: [
    ActorListCardComponent
  ]
})
export class ActorModule { }

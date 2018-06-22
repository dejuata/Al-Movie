import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ActorModule } from '../actor/actor.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

// Pipes
import { TruncatePipe } from '../../pipes/truncate.pipe';

// Component
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListCardComponent } from './movie-list-card/movie-list-card.component';
import { MovieListMenuComponent } from './movie-list-menu/movie-list-menu.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailHeaderComponent } from './movie-detail-header/movie-detail-header.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    ActorModule,
    SharedModule
  ],
  declarations: [
    MovieListComponent,
    MovieListCardComponent,
    MovieListMenuComponent,
    MovieDetailComponent,
    MovieDetailHeaderComponent,
    TruncatePipe,
  ]
})
export class MovieModule { }

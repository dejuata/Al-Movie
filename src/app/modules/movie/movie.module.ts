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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Pipes
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { SafePipe } from '../../pipes/safe.pipe';

// Component
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListCardComponent } from './movie-list-card/movie-list-card.component';
import { MovieListMenuComponent } from './movie-list-menu/movie-list-menu.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailVideoComponent } from './movie-detail-video/movie-detail-video.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    ActorModule,
    SharedModule,
    MatSlideToggleModule
  ],
  declarations: [
    MovieListComponent,
    MovieListCardComponent,
    MovieListMenuComponent,
    MovieDetailComponent,
    TruncatePipe,
    MovieDetailVideoComponent,
    SafePipe
  ],
  exports: [
    MovieListCardComponent
  ]
})
export class MovieModule { }

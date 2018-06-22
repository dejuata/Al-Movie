import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { DurationTimePipe } from './pipes/duration-time.pipe';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';

// Actor Module
import { ActorModule } from '../actor/actor.module';
// Component
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListCardComponent } from './movie-list-card/movie-list-card.component';
import { MovieListMenuComponent } from './movie-list-menu/movie-list-menu.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailHeaderComponent } from './movie-detail-header/movie-detail-header.component';
import { MovieDetailInfoComponent } from './movie-detail-info/movie-detail-info.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    ActorModule
  ],
  declarations: [
    MovieListComponent,
    MovieListCardComponent,
    MovieListMenuComponent,
    MovieDetailComponent,
    MovieDetailHeaderComponent,
    TruncatePipe,
    KeysPipe,
    DurationTimePipe,
    LinkifystrPipe,
    MovieDetailInfoComponent
  ]
})
export class MovieModule { }

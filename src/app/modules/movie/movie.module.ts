import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';


// Pipes
import { SafePipe } from '../../pipes/safe.pipe';

// Component
import { MovieListComponent } from './movie-list/movie-list.component';
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
    SharedModule,
    MatSlideToggleModule,
    MatDividerModule
  ],
  declarations: [
    MovieListComponent,
    MovieListMenuComponent,
    MovieDetailComponent,
    MovieDetailVideoComponent,
    SafePipe,
  ],
  exports: [
  ]
})
export class MovieModule { }

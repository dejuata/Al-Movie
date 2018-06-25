import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

// Pipes
import { KeysPipe } from '../../pipes/keys.pipe';
import { LinkifystrPipe } from '../../pipes/linkifystr.pipe';

// Component Actor
import { ActorHomeTop5Component } from '../actor/actor-home-top5/actor-home-top5.component';

// Component
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardActorComponent } from './card-actor/card-actor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    KeysPipe,
    LinkifystrPipe,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent,
    FooterComponent,
    CardMovieComponent,
    ActorHomeTop5Component,
    CardActorComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    CardMovieComponent,
    CardActorComponent,
    HomeComponent,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent,
    FooterComponent
  ]
})
export class SharedModule { }

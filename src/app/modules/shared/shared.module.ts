import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Pipes
import { KeysPipe } from '../../pipes/keys.pipe';
import { LinkifystrPipe } from '../../pipes/linkifystr.pipe';

// Component Actor
import { ActorHomeTop5Component } from '../actor/actor-home-top5/actor-home-top5.component';

// Component
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FooterComponent } from './footer/footer.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardActorComponent } from './card-actor/card-actor.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FormComponent } from './form/form.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
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
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    DragScrollModule,
    MatButtonToggleModule,
    MatCheckboxModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    KeysPipe,
    LinkifystrPipe,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent,
    FooterComponent,
    CardMovieComponent,
    ActorHomeTop5Component,
    CardActorComponent,
    FormComponent,
    FavoriteListComponent
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    CardMovieComponent,
    CardActorComponent,
    HomeComponent,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent,
    FooterComponent,
    FormComponent
  ]
})
export class SharedModule { }

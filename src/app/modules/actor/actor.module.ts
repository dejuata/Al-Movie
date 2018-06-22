import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';

// Components
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorListCardComponent } from './actor-list-card/actor-list-card.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorDetailHeaderComponent } from './actor-detail-header/actor-detail-header.component';
import { ActorDetailInfoComponent } from './actor-detail-info/actor-detail-info.component';

@NgModule({
  imports: [
    CommonModule,
    ActorRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: [
    ActorListComponent,
    ActorListCardComponent,
    ActorDetailComponent,
    ActorDetailHeaderComponent,
    ActorDetailInfoComponent,
    KeysPipe
  ],
  exports: [
    ActorListCardComponent
  ]
})
export class ActorModule { }

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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ActorRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    SharedModule,
    MatSlideToggleModule
  ],
  declarations: [
    ActorListComponent,
    ActorDetailComponent,
  ],
  exports: [
  ]
})
export class ActorModule { }

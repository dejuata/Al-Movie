import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';

// Pipes
import { KeysPipe } from '../../pipes/keys.pipe';
import { LinkifystrPipe } from '../../pipes/linkifystr.pipe';

// Component
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { PaginatorComponent } from './paginator/paginator.component';

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
    MatPaginatorModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SearchComponent,
    KeysPipe,
    LinkifystrPipe,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent,
  ],
  exports: [
    LayoutComponent,
    DetailInfoComponent,
    DetailHeaderComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }

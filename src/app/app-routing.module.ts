import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: './modules/movie/movie.module#MovieModule'
  },
  {
    path: 'actors',
    loadChildren: './modules/actor/actor.module#ActorModule'
  },
  {
    path: 'user',
    loadChildren: './modules/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

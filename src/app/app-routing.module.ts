import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    loadChildren: () => import('./client/posts/posts.module').then(m=>m.PostsModule),
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

/**
 * Application routing module.
 */
export class AppRoutingModule { }

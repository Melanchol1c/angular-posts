import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostsPageComponent,
  },
];

@NgModule({
  declarations: [PostsPageComponent, PostsListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})

/**
 * Posts module.
 */
export class PostsModule { }

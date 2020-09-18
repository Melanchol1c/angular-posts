import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SharedModule } from '@/app/shared/shared.module';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PostsPageComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: PostDetailsPageComponent,
  },
];

@NgModule({
  declarations: [
    PostsPageComponent,
    PostsListComponent,
    PostDetailsPageComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
})
export class PostsModule {}

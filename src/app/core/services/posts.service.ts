import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

import { environment } from '@/environment/environment';
import { Post } from '@/app/core/models';
import { PostDto } from '@/app/core/dto';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly POSTS_URL = `${environment.apiUrl}/posts`;

  public constructor(protected readonly http: HttpClient) {}

  public getAll(options?: any): Observable<Post[]> {
    return this.http
      .get<PostDto[]>(this.POSTS_URL, { params: options })
      .pipe(map((dtos) => dtos.map(this.mapPostDtoToPost)));
  }

  public getById(postId: number): Observable<Post> {
    return this.http
      .get<PostDto>(`${this.POSTS_URL}/${postId}`)
      .pipe(map(this.mapPostDtoToPost));
  }

  private mapPostDtoToPost(dto: PostDto): Post {
    return new Post({
      id: dto.id,
      userId: dto.userId,
      title: dto.title,
      body: dto.body,
    });
  }
}

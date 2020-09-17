import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})

/**
 *
 */
export class PostsService {


  /**
   *
   */
  private readonly POSTS_URL = `${environment.apiUrl}/posts`;

  /**
   * @param http
   */
  public constructor(protected readonly http: HttpClient) { }

  /**
   * Get all posts.
   */
  public getAll(options?: any): Observable<Post[]> {
    return this.http.get<PostDto[]>(this.POSTS_URL, {
      params: options
    }).pipe(
      map(dtos => dtos.map(this.mapPostDtoToPost))
    );
  }

  private mapPostDtoToPost(dto: PostDto): Post {
    return new Post({
      userId: dto.userId,
      title: dto.title
    });
  }
}


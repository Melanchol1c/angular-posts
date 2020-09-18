import { environment } from '@/environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentDto } from '../dto';
import { Comment } from '../models';
import { DataGeneratorService } from './data-generator.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly POSTS_URL = `${environment.apiUrl}/posts`;

  constructor(
    protected readonly http: HttpClient,
    protected readonly generator: DataGeneratorService
  ) {}

  public getByPostId(postId: number): Observable<Comment[]> {
    return this.http
      .get<CommentDto[]>(`${this.POSTS_URL}/${postId}/comments`)
      .pipe(map((dtos) => dtos.map(this.mapDtoToComment)));
  }

  mapDtoToComment = (dto: CommentDto): Comment => {
    return new Comment({
      postId: dto.postId,
      id: dto.id,
      body: dto.body,
      email: dto.email,
      name: dto.name,
      authorAvatar: this.generator.getRandomAvatar(),
    });
  };
}

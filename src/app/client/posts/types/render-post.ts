import { Post, User } from '@/app/core/models';

export default interface RenderPost extends Post {
  user: User;
}

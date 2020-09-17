/**
 *
 */
export class Post {

  /**
   *
   */
  public userId: number;
  public title: string;

  /**
   * @param data Data.
   */
  public constructor(data: Partial<Post>) {
    this.userId = data.userId;
    this.title = data.title;
  }
}

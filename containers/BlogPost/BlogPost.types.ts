export interface IBlogPost {
  id: string;
  title: string;
  description: string;
  text: string;
  createdAt: number;
}

export type BlogPostProps = Pick<IBlogPost, "title" | "description">;

import { FC } from "react";
import { BlogPostProps } from "./BlogPost.types";

const BlogPost: FC<BlogPostProps> = ({ title, description }) => {
  return (
    <article>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
    </article>
  );
};

export default BlogPost;

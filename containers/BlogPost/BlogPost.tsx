import { FC } from "react";
import { BlogPostProps } from "./BlogPost.types";

const BlogPost: FC<BlogPostProps> = ({ title, description }) => {
  return (
    <article className="py-5 pl-4 mb-10 rounded overflow-hidden shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
    </article>
  );
};

export default BlogPost;

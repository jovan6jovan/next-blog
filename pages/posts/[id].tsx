import { GetServerSideProps } from "next";
import { FC, useEffect, useState } from "react";
import AddCommentForm from "../../components/AddCommentForm";
import DateCreated from "../../components/DateCreated";
import { IBlogPost } from "../../containers/BlogPost/BlogPost.types";
import Container from "../../containers/Container";
import { apiRequest } from "../../utils/api";

interface BlogPostPageProps {
  post: IBlogPost;
}

const BlogPostPage: FC<BlogPostPageProps> = ({ post }) => {
  const { id, title, text, createdAt } = post;
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await apiRequest(`/post/${id}/comments`);
        setCommentsCount(data?.length);
      } catch (error) {
        console.error("Failed to fetch the blog post:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <Container>
      <article>
        <h1 className="font-bold text-5xl mt-16 mb-10">{title}</h1>
        <p className="mb-4">{text}</p>
        <DateCreated createdAt={createdAt} />
        <p className="mt-8 text-xl">{commentsCount} comments</p>
      </article>
      <AddCommentForm />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const post = await apiRequest(`/post/${id}`);

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Failed to fetch the blog post:", error);

    return {
      props: {
        post: null,
      },
    };
  }
};

export default BlogPostPage;

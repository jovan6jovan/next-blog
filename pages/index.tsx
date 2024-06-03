import { GetServerSideProps } from "next";
import { FC } from "react";
import BlogPost from "../containers/BlogPost";
import { IBlogPost } from "../containers/BlogPost/BlogPost.types";
import Container from "../containers/Container";
import { apiRequest } from "../utils/api";

interface HomepageProps {
  posts: IBlogPost[];
}

const Home: FC<HomepageProps> = ({ posts }) => {
  return (
    <Container>
      <h1 className="font-bold text-5xl mt-16 mb-10">Next blog</h1>
      {posts?.map((post: IBlogPost) => (
        <BlogPost
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await apiRequest("/post");

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Failed to fetch the blog posts:", error);

    return {
      props: {
        post: null,
      },
    };
  }
};

export default Home;

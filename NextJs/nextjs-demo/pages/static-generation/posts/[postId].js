import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  console.log("called");
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
  ).json();

  const paths = response.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  ).json();

  if (!response.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response,
    },
  };
}

import { getSession } from "next-auth/client";

function Blog({ blogsdata }) {
  return <h1>Blog Page - {blogsdata}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, "123");
  return {
    props: {
      session,
      blogsdata: session
        ? "List of 100 personalizedblogs"
        : "List of free blogs",
    },
  };
}

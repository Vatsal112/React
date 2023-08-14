import BlogList from "@/components/BlogList/BlogList";
import { getAllBlogs } from "@/utils/blogFetcher";
import Head from "next/head";

type blog = {
  title: string;
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  categories: [
    {
      title: string;
    }
  ];
};

const Blogs = (props: { blogs: blog[] }) => {
  const { blogs } = props;
  return (
    <>
    <Head>
      <title>Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name='description' content='Blogging Website'/>
      </Head>
    <div className="grid sm:grid-cols-1 gap-x-5 place-content-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <BlogList blogs={blogs} />
    </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const response = await getAllBlogs();
  return {
    props: {
      blogs: response,
    },
  };
}

import RichTextComponents from "@/components/Richtext/Richtext";
import { getAllBlogs, getSingleBlog } from "@/utils/blogFetcher";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import path from "path";

type blogData = {
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
  body: [];
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
};

const BlogData = (blog: { blogData: blogData[] }) => {
  const { blogData } = blog;
  return (
    <div className="sm:mx-24 p-10 ">
      <div className="w-full text-center flex justify-center">
        <div className="flex flex-wrap justify-evenly w-[70%]">
          <div>
            <Image
              src={blogData[0]?.mainImage?.asset?.url}
              alt={blogData[0].slug?.current}
              width="0"
              height="0"
              sizes="30vw"
              className="rounded-lg w-96 h-80"
            />
          </div>
          <div className="flex items-center flex-col justify-center">
            <p className="text-3xl font-extrabold py-3 ">{blogData[0].title}</p>
            <div className="flex items-center  py-2">
              <Image
                src={blogData[0].author?.image?.asset?.url}
                alt={blogData[0].slug.current}
                width="0"
                height="0"
                className="rounded-full w-14 h-14 object-fill"
              />
              <p className="font-semibold text-lg p-3">
                {blogData[0].author.name}
              </p>
            </div>
          </div>
          <div className="sm:py-4 text-justify md:py-4 lg:py-14 xl:py-16 text-lg">
            <PortableText
              value={blogData[0]?.body}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogData;

export async function getStaticPaths() {
  const response = await getAllBlogs();
  const paths = response.map((blog: any) => {
    return {
      params: {
        blog: blog.slug.current,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const data = await getSingleBlog(context.params.blog);

  return {
    props: {
      blogData: data,
    },
  };
}

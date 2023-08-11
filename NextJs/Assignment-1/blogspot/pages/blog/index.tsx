import { getAllBlogs } from "@/utils/blogFetcher";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-wrap gap-10 items-center w-full justify-center ">
      {blogs.map((blog) => {
        return (
          <div
            key={blog._id}
            className="hover:-translate-y-2 transition ease-in"
          >
            <Link href={`blog/${blog.slug.current}`}>
              <div className="pt-10">
                <div>
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.slug.current}
                    width="0"
                    height="0"
                    sizes="20vw"
                    className="rounded-lg w-80 h-60"
                  />
                </div>
                <div className="py-6">
                  <span className="pb-4 text-xs tracking-wider font-semibold">
                    {blog.categories.map((cat) =>
                      cat.title.toLocaleUpperCase()
                    )}{" "}
                    | 12 MIN READ
                  </span>
                  <p className="font-bold text-3xl pt-3 text-black">
                    {blog.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
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

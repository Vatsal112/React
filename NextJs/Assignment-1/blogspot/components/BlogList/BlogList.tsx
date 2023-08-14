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

const BlogList = (props:{blogs:blog[]}) => {
    const { blogs } = props;
  return (
    <>
    {blogs.map((blog:blog) => {
        return (
          <div
            key={blog._id}
            className="hover:-translate-y-2 transition ease-in sm:w-[50%] md:w-[70%] xl:w-[75%] justify-center justify-self-center"
          >
            <Link href={`blog/${blog.slug.current}`}>
              <div className="pt-5">
                <div>
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.slug.current}
                    width="200"
                    height="80"
                    // sizes="20vw"
                    className="rounded-lg lg:w-80 lg:h-60 xl:w-80 xl:h-60 sm:w-96 sm:h-52 md:w-80 md:h-60 h-64"
                  />
                </div>
                <div className="py-6 xl:text- md:text-left lg:text-left sm:text-center">
                  <span className="pb-4 text-xs tracking-wider font-semibold">
                    {blog.categories.map((cat:any) =>
                      cat.title.toLocaleUpperCase()
                    )}
                  </span>
                  <p className="font-bold md:text-lg lg:text-xl sm:text-sm xl:text-2xl pt-3 text-black truncate">
                    {blog.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  )
}

export default BlogList
import { getBookmarkBlogs, getSingleBlog } from "@/utils/blogFetcher";
import { getBlogBasedOnUserId, getReadingListData } from "@/utils/indexDB";
import { getSession } from "next-auth/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function index() {
  const [slugsList, setSlugList] = useState<any>([]);
  const [blogData, setBlogData] = useState<any>([]);

  useEffect(() => {
    const getBookmarkData = async () => {
      const session: any = await getSession();

      if (session) {
        const t = await getBlogBasedOnUserId(session.user.id);
        setSlugList(t);
      } else {
        window.location.replace("/");
      }
    };
    getBookmarkData();
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (slugsList.length > 0) {
        const data = await getBookmarkBlogs(slugsList);
        setBlogData(data);
      }
    };
    fetchBlogData();
  }, [slugsList]);

  return (
    <div>
      <h2 className="text-black font-semibold text-3xl text-center py-5">
        Bookmarked Blogs
      </h2>
      <div className="flex flex-wrap gap-10 items-center w-full justify-center ">
        {blogData.map((blog: any) => {
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
                      {blog.categories.map((cat: any) =>
                        cat.title.toLocaleUpperCase()
                      )}
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
    </div>
  );
}

import BlogList from "@/components/BlogList/BlogList";
import { getBookmarkBlogs, getSingleBlog } from "@/utils/blogFetcher";
import { getBlogBasedOnUserId, getReadingListData } from "@/utils/indexDB";
import { getSession } from "next-auth/client";
import Head from "next/head";
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
        const slugs = slugsList.map((s: any) => s.slug);
        const data = await getBookmarkBlogs(slugs);
        setBlogData(data);
      }
    };
    fetchBlogData();
  }, [slugsList]);

  if (blogData.length <= 0) {
    return (
      <h2 className="text-center text-3xl py-10">
        You dont have any bookmarked blogs
      </h2>
    );
  }

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Blogging Website" />
      </Head>
      <h2 className="text-black font-semibold text-3xl text-center py-5">
        Bookmarked Blogs
      </h2>
      <div className="grid sm:grid-cols-1 gap-x-5 place-content-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <BlogList blogs={blogData} />
      </div>
    </div>
  );
}

import RichTextComponents from "@/components/Richtext/Richtext";
import {
  getAllBlogs,
  getBookmarkBlogs,
  getSingleBlog,
} from "@/utils/blogFetcher";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import bookmarkImage from "@/public/bookmark.png";
import bookmarkImageFill from "@/public/bookmark-fill.png";

import { useSession } from "next-auth/client";
import {
  addBlogToReadingList,
  getBlogBasedOnUserId,
  getReadingListData,
  removeBlogFromList,
} from "@/utils/indexDB";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogPage from "@/components/BlogPage/BlogPage";
import Head from "next/head";

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
  const [session]: any = useSession();

  const [isBookmark, setIsBookmark] = useState<any>(false);
  const [bookmark, setBookmark] = useState<any>([]);

  useEffect(()=>{
    const isThisBookmarkedBlog = async () => {
      const data = await getBlogBasedOnUserId(session?.user?.id);
      setBookmark(data);
      const isBlogBookmarked = data.map((d:any)=> d.slug)
      if(isBlogBookmarked.includes(router.query.blog)){
        setIsBookmark(true)
      }
     };
     isThisBookmarkedBlog();
  },[isBookmark])

  const { blogData } = blog;
  const router = useRouter();

  const addToReadingList = async (slug: string) => {
    await addBlogToReadingList(slug, session.user.id);
    setIsBookmark(true)
  };

  const removeFromReadingList = async(slug: string)=>{
    const id = bookmark.find((d:any)=>d.slug === slug);
    await removeBlogFromList(id.id);
    setIsBookmark(false)
  }
  return (
    <>
        <Head>
      <title>Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name='description' content='Blogging Website'/>
      </Head>
    <BlogPage blogData={blogData} session={session} isBookmark={isBookmark} addToReadingList={addToReadingList} removeFromReadingList={removeFromReadingList} />
    </>
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

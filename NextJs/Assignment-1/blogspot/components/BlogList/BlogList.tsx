import Image from "next/image";
import Link from "next/link";
import bookmarkImage from "@/public/bookmark.png";
import bookmarkImageFill from "@/public/bookmark-fill.png";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  addBlogToReadingList,
  getBlogBasedOnUserId,
  getReadingListData,
  removeBlogFromList,
} from "@/utils/indexDB";
import { useRouter } from "next/router";

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

const BlogList = (props: { blogs: blog[] }) => {
  const { blogs } = props;
  // const { blogData } = blog;
  const router = useRouter();

  const { data: session, status }: any = useSession();

  // const [isBookmark, setIsBookmark] = useState<Boolean>(false);
  const [bookmark, setBookmark] = useState<any>([]);
  const [userSlugs, setUserSlugs] = useState<any>([]);

  useEffect(() => {
    const isThisBookmarkedBlog = async () => {
      const data = await getReadingListData();
      const filteredData = data.filter(
        (d: any) => d.userId === session?.user?.id
      );
      setBookmark(() => filteredData);
      setUserSlugs(filteredData.map((d: any) => d.slug));
    };
    status === "authenticated" && isThisBookmarkedBlog();
  }, [status]);

  const addToReadingList = async (slug: string) => {
    await addBlogToReadingList(slug, session.user.id);
    setUserSlugs((prev: any) => [...prev, slug]);
  };

  const removeFromReadingList = async (slug: string) => {
    const id = bookmark.find((d: any) => d.slug === slug);
    await removeBlogFromList(id.id);
    const data = userSlugs.filter((d: any) => d !== slug);
    setUserSlugs(data);
  };

  const handleBookmarkClick = () => {
    if (!session) {
      router.push("/signin");
    }
  };

  return (
    <>
      {blogs.map((blog: blog) => {
        return (
          <div
            key={blog._id}
            className="hover:-translate-y-2 transition ease-in sm:w-[40%] md:w-[70%] xl:w-[75%] justify-center justify-self-center"
          >
            <div className="pt-5">
              <div>
                <Link href={`blog/${blog.slug.current}`}>
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.slug.current}
                    width="200"
                    height="80"
                    className="rounded-lg lg:w-80 lg:h-60 xl:w-96 xl:h-60 sm:w-96 sm:h-52 md:w-96 md:h-60 h-64"
                  />
                </Link>
              </div>
              <div className="py-6 xl:text- md:text-left lg:text-left">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-wider font-semibold">
                    {blog.categories.map((cat: any) =>
                      cat.title.toLocaleUpperCase()
                    )}
                  </span>
                  {!session && (
                    <Image
                      src={bookmarkImage}
                      alt="bookmark image"
                      width={22}
                      height={22}
                      onClick={handleBookmarkClick}
                    />
                  )}
                  {session && (
                    <Image
                      src={
                        userSlugs.includes(blog.slug.current)
                          ? bookmarkImageFill
                          : bookmarkImage
                      }
                      height={22}
                      width={22}
                      alt="bookmark"
                      title={
                        userSlugs.includes(blog.slug.current)
                          ? "Remove from bookmark"
                          : "Add to bookmark"
                      }
                      className="cursor-pointer"
                      onClick={
                        userSlugs.includes(blog.slug.current)
                          ? () => removeFromReadingList(blog.slug.current)
                          : () => addToReadingList(blog.slug.current)
                      }
                    />
                  )}
                </div>
                <p className="font-bold md:text-lg lg:text-xl sm:text-sm xl:text-2xl pt-3 truncate">
                  {blog.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogList;

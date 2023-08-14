import { PortableText } from "@portabletext/react"
import Image from "next/image"
import RichTextComponents from "../Richtext/Richtext"
import bookmarkImage from "@/public/bookmark.png";
import bookmarkImageFill from "@/public/bookmark-fill.png";

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
 const BlogPage = (props:{blogData:blogData[],session:any,isBookmark:boolean,removeFromReadingList:any,addToReadingList:any}) => {
    const {blogData,session,isBookmark,addToReadingList,removeFromReadingList}  = props;
  return (
    <>
            <div className="sm:mx-4 md:mx-8 lg:mx-10 xl:mx-14 p-10 ">
      <div className="w-full text-center flex justify-center items-center">
        <div className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[90%]">
          <div>
            <Image
              src={blogData[0]?.mainImage?.asset?.url}
              alt={blogData[0]?.slug?.current}
              width="200"
              height="80"
            //   sizes="30vw"
              className="rounded-lg lg:w-80 lg:h-60 xl:w-90 mx-auto xl:h-60 sm:w-96 sm:h-52 md:w-80 md:h-60 h-64"
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
            {session  && (
              <Image
                src={isBookmark ? bookmarkImageFill : bookmarkImage}
                height={40}
                width={40}
                alt="bookmark"
                title={isBookmark ? "Remove from bookmark": "Add to bookmark"}
                className="pt-4 text-center cursor-pointer"
                onClick={isBookmark ? ()=>removeFromReadingList(blogData[0].slug.current)  :  () => addToReadingList(blogData[0].slug.current)}
              /> 
            )}
          </div>
          <div className="text-justify md:py-2 sm:py-2 xl:py-4 text-lg">
            <PortableText
              value={blogData[0]?.body}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogPage

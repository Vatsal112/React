import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { config } from "@/utils/sanityConfig";

function getImage({ value, isInline }: any) {
  return imageUrlBuilder({
    clientConfig: config,
  })
    .image(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();
}

const RichTextComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }} className="my-3 mx-10">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "number" }} className="my-3 mx-5">
        {children}
      </li>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    internalLink: ({ value, children }) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ value, children }) => {
      const { href } = value;
      return (
        <a href={href} className="text-blue-600">
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="text-xl font-semibold mt-5 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold mt-5 mb-3">{children}</h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500 text-xl">
        <em>{children}</em>
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  types: {
    image: ({ value, isInline }) => {
      const { width, height } = getImageDimensions(value);
      return (
        <Image
          width={width}
          height={height}
          src={getImage({ value, isInline }) || ""}
          alt={value.alt || " "}
          loading="lazy"
          className="py-4 rounded-sm"
        />
      );
    },
  },
};
export default RichTextComponents;

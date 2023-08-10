import client from "./sanityConfig";

export async function getAllBlogs() {
  const data = await client.fetch(`*[_type=='post']{
        _id,
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        categories[]->{
          title
        }
      }`);
  return data;
}

export async function getSingleBlog(slug: string) {
  const data = await client.fetch(
    `*[_type=='post' && slug.current==$slug]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    },
    categories[]->{
      title
    },
    body,
    author->{
      name,
      image{
        asset->{
          url
        }
      }
    }
  }
`,
    {
      slug,
    }
  );
  return data;
}

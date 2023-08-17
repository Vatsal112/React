import Blogs from "../pages/blog/index";
import { getAllBlogs } from "@/utils/blogFetcher";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// const mockData = [
//     {
//         title:'this is a title',
//         _id:"122333434",
//         slug:{
//             current:'how-to-reinvent-the-scrum-process-for-modern-distributed-teams',
//             _type:'slug'
//         },
//         mainImage:{
//             asset: {
//                 _id: 'image-b6bbfc971f94c31f1d5b525d450c08b7692c76fd-5092x4000-jpg',
//                 url: 'https://cdn.sanity.io/images/kga4x4qi/production/b6bbfc971f94c31f1d5b525d450c08b7692c76fd-5092x4000.jpg'
//               }
//         },
//         categories: [
//             {
//               title: 'Why Your Business Should Take The WhatsApp Chatbot Plunge'
//             }
//           ]
//     }
// ]

// describe("renderd a home page", () => {
//   //   let data;
//   //   const fetch = async () => {
//   //     data = await getAllBlogs();
//   //   };
//   //   fetch();
//   //   if (data) {
//   //     const { container } = render(<Blogs blogs={data} />);
//   //     expect(container).toMatchSnapshot();
//   //   }
// });

describe("App", () => {
  it("should be able to run tests", () => {
    let data;
    const fetch = async () => {
      data = await getAllBlogs();
      console.log(data);
    };
    fetch();
    if (data) {
      const { container } = render(<Blogs blogs={data} />);
      expect(container).toBeInTheDocument();
    }
  });
});

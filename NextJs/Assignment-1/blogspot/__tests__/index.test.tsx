import Blogs from "../pages/blog/index";
import { getAllBlogs } from "@/utils/blogFetcher";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { error } from "console";
import {useSession} from "next-auth/react";

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "admin" }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

describe("App", () => {
  it("should be able to run tests", async () => {
    let data = await getAllBlogs();
    const { container } = render(<Blogs blogs={data} />);
      expect(container).toMatchSnapshot();
    // console.log(data);
    // expect(data).not.toBeNull();
  });
});

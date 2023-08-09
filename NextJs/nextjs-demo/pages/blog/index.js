import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };
  return (
    <>
      <div>blog page</div>
      <Link href="/blog/first">
        <h1>First Blog</h1>
      </Link>
      <br />
      <Link href="/blog/second" replace>
        <h1>second Blog</h1>
      </Link>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default index;

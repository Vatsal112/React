import { useRouter } from "next/router";
const productId = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default productId;

export async function getStaticProps(context) {
  console.log("Regeneration of product id..");
  const { params } = context;

  const response = await (
    await fetch(`http://localhost:4000/products/${params.productId}`)
  ).json();

  return {
    props: {
      product: response,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

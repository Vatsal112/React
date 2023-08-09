const index = ({ products }) => {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default index;

export async function getStaticProps() {
  console.log("regenration of productIndex");
  const response = await (await fetch("http://localhost:4000/products")).json();

  return {
    props: {
      products: response,
    },
    revalidate: 5,
  };
}

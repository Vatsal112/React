const Category = ({ articles, category }) => {
  return (
    <>
      <h1>Showing news for category {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.desription}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default Category;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await (
    await fetch(`http://localhost:4000/news?category=${params.category}`)
  ).json();

  return {
    props: {
      articles: response,
      category: params.category,
    },
  };
}

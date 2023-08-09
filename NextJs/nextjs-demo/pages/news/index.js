const index = ({ articles }) => {
  return (
    <div>
      <h1>List of articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const response = await (await fetch("http://localhost:4000/news")).json();

  return {
    props: {
      articles: response,
    },
  };
}

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const Query = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: "super-heroes",
    queryFn: fetchHeroes,
  });

  console.log(data);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>Query Super Heroes page</h2>
      {data.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};

export default Query;

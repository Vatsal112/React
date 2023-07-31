import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicQuery = ({ heroIds }) => {
  const data = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchHero(id),
      };
    })
  );
  console.log({ data });
  return <div>dynamic query</div>;
};

export default DynamicQuery;

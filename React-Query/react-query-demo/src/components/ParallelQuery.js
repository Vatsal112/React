import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const ParallelQuery = () => {
  useQuery("super-heroes", fetchHeroes);
  useQuery("super-hero", () => fetchHero(1));
  return <div>ParallelQuery</div>;
};

export default ParallelQuery;

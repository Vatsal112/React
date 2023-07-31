import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useSingleSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["super-hero", heroId],
    queryFn: () => fetchHero(heroId),
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-hero")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

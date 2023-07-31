import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroData = (onError, onSuccess, isEnabled) => {
  return useQuery({
    queryKey: "super-heroes",
    queryFn: fetchHeroes,
    enabled: isEnabled,
    onError,
    onSuccess,
    // select: (data) => {
    //   return data.data.map((hero) => hero.name);
    // },
  });
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};
export const useAddSuperHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   queryClient.setQueryData("super-heroes", (oldData) => {
    //     return {
    //       data: [...oldData.data, data.data],
    //     };
    //   });
    // },
    onMutate: (newHero) => {
      console.log("onMutate", newHero);
      queryClient.cancelQueries("super-heroes");
      const previousData = queryClient.getQueryData("super-heroes");
      queryClient.setQueryData("super-heroes", (oldData) => {
        return {
          data: [...oldData.data, { id: oldData.data.length + 1, ...newHero }],
        };
      });
      return {
        previousData,
      };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousData);
    },
    onSettled: () => {
      console.log("onSettled");
      queryClient.invalidateQueries("super-heroes");
    },
  });
};

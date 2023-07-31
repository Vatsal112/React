import { useParams } from "react-router-dom";
import { useSingleSuperHeroData } from "../hooks/useSingleSuperHeroData";

const SingleHeroDetails = () => {
  const { heroId } = useParams();
  const { isError, data, isLoading, error } = useSingleSuperHeroData(heroId);
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <div>
      {data.data.name} - <i>{data.data.alterEgo}</i>
    </div>
  );
};

export default SingleHeroDetails;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHero, useSuperHeroData } from "../hooks/useSuperHeroData";

const Query = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data) => {
    console.log("Side effect after data fetching", data);
  };

  const onError = (err) => {
    console.log("Side effect after error", err.message);
  };
  const { isLoading, data, isFetching, isError, error, refetch } =
    useSuperHeroData(onError, onSuccess, true);

  const { mutate: addHero } = useAddSuperHero();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError)
    return (
      <h2>
        <span>{error.message}</span>
      </h2>
    );
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data?.map((heroname) => {
        return <div key={heroname}>{heroname}</div>;
      })} */}
    </>
  );
};

export default Query;

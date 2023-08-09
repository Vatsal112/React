import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await (
    await fetch("http://localhost:4000/dashboard")
  ).json();
  return response;
};

const DashboardSwr = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h2>Error</h2>;
  if (!data) return <h2>Loading...</h2>;
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data?.posts}</h2>
      <h2>Likes - {data?.likes}</h2>
      <h2>followers - {data?.followers}</h2>
      <h2>following - {data?.following}</h2>
    </div>
  );
};

export default DashboardSwr;

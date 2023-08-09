import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await (
        await fetch("http://localhost:4000/dashboard")
      ).json();
      setDashboardData(response);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) <h2>Loading....</h2>;
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData?.posts}</h2>
      <h2>Likes - {dashboardData?.likes}</h2>
      <h2>followers - {dashboardData?.followers}</h2>
      <h2>following - {dashboardData?.following}</h2>
    </div>
  );
};

export default Dashboard;

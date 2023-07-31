import "./App.css";
import SuperHeros from "./components/SuperHeros.page";
import Query from "./components/Query.page";
import Home from "./components/Home.page";
import SingleHeroDetails from "./components/SingleHeroDetails";
import ParallelQuery from "./components/ParallelQuery";
import DynamicQuery from "./components/DynamicQuery";
import InfiniteQueriesPage from "./components/InfiniteQuery";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/parallel-query">ParallelQuery</Link>
            </li>
            <li>
              <Link to="/dynamic-query">Dynamic Query</Link>
            </li>
            <li>
              <Link to="/infinite-query">Infinite Query</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<Query />} />
          <Route path="/parallel-query" element={<ParallelQuery />} />
          <Route path="/infinite-query" element={<InfiniteQueriesPage />} />
          <Route
            path="/dynamic-query"
            element={<DynamicQuery heroIds={[1, 3]} />}
          />
          <Route
            path="/rq-super-heroes/:heroId"
            element={<SingleHeroDetails />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

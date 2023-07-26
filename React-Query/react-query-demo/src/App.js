import "./App.css";
import SuperHeros from "./components/SuperHeros.page";
import Query from "./components/Query.page";
import Home from "./components/Home.page";
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
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeros />} />
          <Route path="/rq-super-heroes" element={<Query />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

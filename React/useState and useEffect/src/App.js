import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component.jsx";

function App() {
  //state initialization
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // for getting the data from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMonsters(data);
      });
  }, []);

  //for filter the data based on the search parameters
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    //set the state of filter data.
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  //to set the state of the search field
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

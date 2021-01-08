import React, { useState } from "react";
import "./App.css";
import NamesList from "./NamesList";
import SearchName from "./SearchName";

const containerStyle = {
  margin: "auto",
  maxWidth: "500px",
  padding: "1em",
  background: "grey",
  backgroundImage: 
    'url("https://image.freepik.com/free-vector/geometric-grey-background_1055-3147.jpg")'
};

const App = () => {  
  const [ showAll, setShowAll ] = useState<Boolean>(true);

  return (
    <div style={containerStyle}>
      <h1>dev-academy-2021 exercise - Name Application</h1>
      <button onClick={() => setShowAll(true)}>Show All</button>
      <button onClick={() => setShowAll(false)}>Search by Name</button>
      <hr />
      {showAll ? 
        <NamesList />
      :
        <SearchName />
      }
      <footer>
        <hr />Olavi Hartonen <a href="https://github.com/Tambourin">https://github.com/Tambourin</a>
      </footer>
    </div>
  );
};

export default App;

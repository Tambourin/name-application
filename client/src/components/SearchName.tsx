import React, { useState } from "react";
import useFetch from "use-http";
import { apiUrl } from "../config";
import { NameItem } from "../types/types";

const amountStyle: React.CSSProperties = {
  backgroundColor: "rebeccapurple",
  color: "#fff",
  fontWeight: "bold",  
  borderRadius: "10em",
  minWidth: "1.5em",
  padding: ".25em",
  textAlign: "center"
}

const headerStyle: React.CSSProperties = { 
  textAlign: "center", 
  marginTop: "2em" 
}

const SearchName = () => {
  const { get, loading, error } = useFetch<NameItem>(apiUrl);
  const [ nameData, setNameData ] = useState<NameItem>();
  const [ searchword, setSearchword ] = useState<string>("");

  if(error) {
    return <p>An error occured while loading data from the server.</p>
  }

  if(loading) {
    return <p>loading...</p>
  }

  const getName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await get("/" + searchword);
    setNameData(res);
    return res;
  }

  return (
    <div>
      <form onSubmit={(e) => getName(e)}>
        <p>Find name:</p>
        <input value={searchword} onChange={(e) => setSearchword(e.target.value)} />
        <input type="submit" />
      </form>
      {nameData && 
        <div>
          <h3 style={headerStyle}>
            number of {nameData?.name}s
          </h3>
          <div style={amountStyle}><p>{nameData?.amount}</p></div> 
        </div>
      }
    </div>
  );
};

export default SearchName;
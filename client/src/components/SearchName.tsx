import React, { useState } from "react";
import useFetch from "use-http";
import { apiUrl } from "../config";
import { NameItem } from "../types/types";
import SearchResult from "./SearchResult";

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
      {nameData && <SearchResult resultItem={nameData} />}
    </div>
  );
};

export default SearchName;
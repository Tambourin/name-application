import React, { useState } from "react";
import { Order } from "../types/types";
import useFetch from "use-http"
import { sortNames } from "../utils/utils";
import { apiUrl } from "../config";
import NamesListItem from "./NamesListItem";

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0
}



const NamesList = () => {
  const { loading, error, data } = useFetch(apiUrl, [])
  const [ order, setOrder ] = useState<Order>("desc");

  if(error) {
    return <p>An error occured while loading data from the server.</p>
  }

  if(loading) {
    return <p>loading...</p>
  }

  return (    
    <div>
      <p>Total count: {data.count}</p>
      <span>Order by: </span>
      <button onClick={() => setOrder("desc")}>Amount</button>
      <button onClick={() => setOrder("alph")}>Alphabetic</button>
      <ul style={listStyle}>
        {
          sortNames([...data.names], order).map((item) => 
            <NamesListItem item={item} key={item.name} /> )
        }
      </ul>
    </div>
  );
};

export default NamesList;
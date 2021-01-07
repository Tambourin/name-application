import React, { useState } from "react";
import { NameItem, Order } from "../types/types";
import useFetch from "use-http"
import { sortNames } from "../utils/utils";
import { apiUrl } from "../config";

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0
}

const listItemStyle: React.CSSProperties = {  
  padding: "1em",
  marginBottom: ".5em", 
  background: "#eee",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#333",
  borderRadius: ".1em"
}

const amountStyle: React.CSSProperties = {
  backgroundColor: "rebeccapurple",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "80%",
  borderRadius: "10em",
  minWidth: "1.5em",
  padding: ".25em",
  textAlign: "center"
}

const NamesList = () => {
  const { loading, error, data } = useFetch(apiUrl, [])
  const [ order, setOrder ] = useState<Order>("desc");

  if(error) {
    console.log(error)
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
          sortNames([...data.names], order).map((item: NameItem) => 
            <li style={listItemStyle} key={item.name}>
              {item.name}
              <span style={amountStyle}>{item.amount}</span>
            </li>)
        }
      </ul>
    </div>
  );
};

export default NamesList;
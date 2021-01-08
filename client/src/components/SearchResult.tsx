import React from "react";
import { NameItem } from "../types/types";

const headerStyle: React.CSSProperties = { 
  textAlign: "center", 
  marginTop: "2em" 
};

const amountStyle: React.CSSProperties = {
  backgroundColor: "rebeccapurple",
  color: "#fff",
  fontWeight: "bold",  
  borderRadius: "10em",
  minWidth: "1.5em",
  padding: ".25em",
  textAlign: "center"
};

interface Props {
  resultItem: NameItem
};

const SearchResult = ({ resultItem }: Props) => {
  return (
    <div>
      <h3 style={headerStyle}>
        number of {resultItem?.name}s
      </h3>
      <div style={amountStyle}><p>{resultItem?.amount}</p></div>
    </div>
  );
};

export default SearchResult;
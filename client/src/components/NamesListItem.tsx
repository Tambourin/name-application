import React from "react";
import { NameItem } from "../types/types";

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

interface Props {
  item: NameItem
}

const NamesListItem = ({ item }: Props) => {
  return (
    <li style={listItemStyle}>
      {item.name}
      <span style={amountStyle}>{item.amount}</span>
    </li>
  );
};

export default NamesListItem;
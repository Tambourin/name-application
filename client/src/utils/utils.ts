import { NameItem, Order } from "../types/types";

export const sortNames = (names: NameItem[], order: Order) => {
  switch (order) {
    case "desc":
      return names.sort((a, b) => {return b.amount - a.amount});    
    case "alph":    
      return names.sort((a, b) => {return b.name > a.name ? -1 : 1});
    default:
      return names;
  } 
};
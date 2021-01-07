export interface NamesResponse {
  names: NameItem[],
  count: string
}

export interface NameItem {
  name: string,
  amount: number
};

export type Order = "desc" | "alph";
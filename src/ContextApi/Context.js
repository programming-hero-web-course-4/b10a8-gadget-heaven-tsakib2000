import { createContext } from "react";

const GadgetContext = createContext({});

const AddWishContext = createContext({});

const AddWishArrayContext = createContext([]);
const AddCartArrayContext = createContext([]);
const SortCartFunc = createContext([]);
const PurchaseItem =createContext([])
export {
  AddWishArrayContext,
  AddCartArrayContext,
  SortCartFunc,
  AddWishContext,
  GadgetContext,
  PurchaseItem
};

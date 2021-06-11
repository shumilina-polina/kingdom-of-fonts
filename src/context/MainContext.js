import { createContext } from "react";

export const MainContext = createContext({
  selectedCategory: null,
  selectedSubcategory: null,
});

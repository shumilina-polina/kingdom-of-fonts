import React from "react";
import { CategoryItem, Wrapper } from "./styles";

import { useStore } from "../../../../context/StoreContext"

const CategoriesFilter = ({ category, withMargin }) => {
  const store = useStore()
  const categories = store.categories.data

  if (!categories) return null

  return (
    <Wrapper withMargin={withMargin}>
      {categories.map((cat) => {
        return (
          <CategoryItem
            key={cat.id}
            to={`/fonts/library/${cat.slug}`}
            selected={cat.id === category?.id}
          >
            {cat.name}
          </CategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoriesFilter;

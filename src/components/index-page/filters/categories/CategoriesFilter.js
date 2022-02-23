import React from "react";
import { CategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../../../categories";


const CategoriesFilter = ({ category, withMargin }) => {
  return (
    <Wrapper withMargin={withMargin}>
      {categories.map((cat) => {
        return (
          <CategoryItem
            key={uuidv4()}
            to={`/fonts/library/${cat.url}`}
            selected={cat.name === category?.name}
          >
            {cat.name}
          </CategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoriesFilter;

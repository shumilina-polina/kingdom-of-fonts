import React from "react";
import Categories from "./categories/Categories";
import { Wrapper } from "./styles";
import Subcategories from "./subcategories/Subcategories";

const Filters = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  categories,
  multiPropsFilter,
}) => {
  return (
    <Wrapper>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
        categories={categories}
        multiPropsFilter={multiPropsFilter}
      />
      <Subcategories
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
        selectedCategory={selectedCategory}
        multiPropsFilter={multiPropsFilter}
      />
    </Wrapper>
  );
};

export default Filters;

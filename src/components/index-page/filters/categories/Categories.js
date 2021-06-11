import React from "react";
import { CategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Categories = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  setSelectedSubcategory,
}) => {
  const handleSelectCategory = (cat) => {
    console.log("selected category", cat);
    // console.log("selected SUBcategory", cat.subCategories[0]);
    setSelectedCategory(cat);
    setSelectedSubcategory(cat.subCategories[0]);
  };
  return (
    <Wrapper>
      {categories.map((cat) => {
        return (
          <CategoryItem
            key={uuidv4()}
            onClick={handleSelectCategory.bind(null, cat)}
            selected={cat.name === selectedCategory.name}
          >
            {cat.name}
          </CategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default Categories;

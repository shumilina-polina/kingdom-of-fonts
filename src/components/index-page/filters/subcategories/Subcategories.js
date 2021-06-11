import React from "react";
import { SubCategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Subcategories = ({
  selectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
}) => {
  const handleSelectSubcategory = (subCat) => {
    console.log("selected SUBcategory", subCat);
    setSelectedSubcategory(subCat);
  };
  return (
    <Wrapper>
      {selectedCategory.subCategories.map((subCat) => {
        return (
          <SubCategoryItem
            key={uuidv4()}
            selected={selectedSubcategory === subCat}
            onClick={handleSelectSubcategory.bind(null, subCat)}
          >
            {subCat}
          </SubCategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default Subcategories;

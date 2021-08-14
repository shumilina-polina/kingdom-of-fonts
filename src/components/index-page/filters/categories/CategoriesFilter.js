import React from "react";
import { CategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../../../../categories";
import { navigate } from "gatsby";
import { useQuery } from "../../../../hooks/useQuery";

const CategoriesFilter = ({ setFilters }) => {
  const query = useQuery();
  const selectCategory = (cat) => {
    setFilters((prevState) => {
      return {
        // subCategory: "",
        category: cat.name,
      };
    });
    navigate(`/?category=${cat.url}`);
  };
  const selectedCategory = categories.find(
    (el) => el.url === query.get("category")
  );
  return (
    <Wrapper>
      {categories.map((cat) => {
        return (
          <CategoryItem
            key={uuidv4()}
            onClick={selectCategory.bind(null, cat)}
            selected={cat.name === selectedCategory?.name}
          >
            {cat.name}
          </CategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoriesFilter;

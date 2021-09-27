import React from "react";
import { SubCategory, SubCategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";
// import { navigate } from "gatsby";
import { categories } from "../../../../categories";
import { useQuery } from "../../../../hooks/useQuery";
import scrollTo from "gatsby-plugin-smoothscroll"
// import scrollTo from "gatsby-plugin-smoothscroll"

const SubcategoriesFilter = ({ setFilters, subCatInView, currentElementIndexInViewport }) => {
  const query = useQuery();

  const selectedCategory = categories?.find(
    (el) => el.url === query.get("category")
  );

  // const selectedSubcategory = selectedCategory?.subCategories?.find(
  //   (el) => el.url === query.get("subcategory")
  // );

  const selectSubcategory = (subcategory) => {
    // setFilters((prevState) => {
    //   return {
    //     ...prevState,
    //     subCategory: subcategory.name,
    //   };
    // });
    // scrollTo(`#${subcategory.url}`)
    // navigate(
    //   `?category=${selectedCategory.url}&subcategory=${subcategory.url}`
    // );
  };

  // console.log("subCatInView", subCatInView)
  
  return (
    <Wrapper>
      {selectedCategory?.subCategories?.map((subCat, idx) => {
        return (
          <SubCategory
            key={uuidv4()}
            onClick={selectSubcategory.bind(null, subCat)}
          >
            <SubCategoryItem
              href={`#${subCat.url}`}
              // onClick={() => scrollTo(`#${subCat.url}`)}
              // selected={subCatInView[0]?.name === subCat.name}
              selected={currentElementIndexInViewport === idx}
            >
              {subCat.name}
            </SubCategoryItem>
            
          </SubCategory>
        );
      })}
    </Wrapper>
  );
};

export default SubcategoriesFilter;

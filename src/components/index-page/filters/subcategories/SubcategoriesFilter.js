import React from "react";
import { SubCategoryItem, Wrapper } from "./styles";
import { v4 as uuidv4 } from "uuid";
import scrollTo from "gatsby-plugin-smoothscroll"

const SubcategoriesFilter = ({ currentElementIndexInViewport, category }) => {
  // const query = useQuery();

  // const selectedCategory = categories?.find(
  //   (el) => el.url === query.get("category")
  // );

  // const selectedSubcategory = selectedCategory?.subCategories?.find(
  //   (el) => el.url === query.get("subcategory")
  // );

  // const selectSubcategory = (subcategory) => {
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
  // };

  // const clickLink = (subCat) => {
  //   scrollTo(`#${subCat.url}`)
  //   // navigate(`?category=${selectedCategory.url}#${subCat.url}`)
  // }

  // console.log("subCatInView", subCatInView)

  return (
    <Wrapper>
      {category?.subCategories?.map((subCat, idx) => {
        return (
          <SubCategoryItem
            key={uuidv4()}
            // href={`#${subCat.url}`}
            onClick={() => scrollTo(`#${subCat.url}`)}
            // to={`/?category=${selectedCategory.url}#${subCat.url}`}
            // offset={300}
            // duration={1000}
            // selected={subCatInView[0]?.name === subCat.name}
            selected={currentElementIndexInViewport === idx}
          >
            {subCat.name}
          </SubCategoryItem>
        );
      })}
    </Wrapper>
  );
};

export default SubcategoriesFilter;

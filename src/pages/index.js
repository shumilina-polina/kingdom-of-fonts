import React, { useContext, useState, useEffect } from "react";
import CardList from "../components/index-page/cards/CardList";
import { cards } from "../components/index-page/cards/data";
import Filters from "../components/index-page/filters/Filters";
import Layout from "../components/Layout";
import Logo from "../components/logo/Logo";

const categories = [
  {
    name: "С придурью",
    subCategories: [
      "Широкие",
      "Вытянутые",
      "Гиперконтрастные",
      "Трафаретные",
      "Скруглённые",
      "С обратным контрастом",
      "С росчерками",
      "Инк Трапы",
    ],
  },
  {
    name: "Гротески",
    subCategories: [
      "Нейтральные",
      "Геометрические",
      "Брусковые",
      "Моноширинные",
    ],
  },
  {
    name: "Антиквы",
    subCategories: [
      "Старостильные",
      "Переходные",
      "Новостильные",
      "Брусковые",
      "Латинские",
    ],
  },
  {
    name: "Стилизованные",
    subCategories: [
      "Аниме",
      "Славянский стиль",
      "Советские",
      "Готические",
      "Восточные",
    ],
  },
  { name: "Рукописные", subCategories: ["Каллиграфия", "Почерк"] },
];

// markup
const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    categories[0].subCategories[0]
  );

  if (typeof window !== "undefined") {
    if (!localStorage.getItem("kingdomOfFontsAccess")) {
      return <>cannot give you access</>;
    }
  }

  const filters = {
    category: selectedCategory.name,
    subCategory: selectedSubcategory,
  };

  const multiPropsFilter = (cards, filters) => {
    const filterKeys = Object.keys(filters);
    return cards.filter((item) => {
      // validates all filter criteria
      return filterKeys.every((key) => {
        // ignores non-function predicates
        if (typeof filters[key] !== "function") {
          // return true;
          if (!filters[key].length) return true;
          if (Array.isArray(item[key])) {
            return item[key].some((keyElem) => filters[key].includes(keyElem));
          }
          return filters[key].includes(item[key]);
        }
        return filters[key](item[key]);
      });
    });
  };

  // useEffect(() => {

  // }, [selectedCategory, selectedSubcategory])

  const filteredCards = multiPropsFilter(cards, filters);
  console.log("filteredCards", filteredCards);

  return (
    <Layout>
      <Logo />
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
        categories={categories}
        multiPropsFilter={multiPropsFilter}
      />
      <CardList
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        // cards={cards}
        filteredCards={filteredCards}
      />
    </Layout>
  );
};

export default IndexPage;

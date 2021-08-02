import React, {useEffect} from 'react'
import {categories} from '../../../categories'
import { useQuery } from '../../../hooks/useQuery';
import { Wrapper, SubcategoryTitle, SubcategoryItems, SubcategorySectionItem } from './styles';
import Card from './card/Card';
// import { useInView } from 'react-intersection-observer';
import SubcategorySection from './SubcategorySection'

const CardListBySubcat = ({cards, setSubCatInView}) => {

    const query = useQuery();

    const selectedCategory = categories.find((el) => el.url === query.get("category"));
    console.log("selectedCategory", selectedCategory)
    return (
        <>
            {selectedCategory.subCategories.map((subCat, idx) => {
                const sortedCards = cards.filter((card) => card.subCategory === subCat.name)
                console.log("sub", sortedCards)
                return (
                    <SubcategorySection key={idx} subCat={subCat} sortedCards={sortedCards} setSubCatInView={setSubCatInView}/>
                )
            })}
        </>
    )
}

export default CardListBySubcat


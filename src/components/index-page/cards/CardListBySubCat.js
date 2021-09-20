import React from 'react'
import {categories} from '../../../categories'
import { useQuery } from '../../../hooks/useQuery';
import SubcategorySection from './SubcategorySection'

const CardListBySubcat = ({cards, setSubCatInView}) => {

    const query = useQuery();



    const selectedCategory = categories.find((el) => el.url === query.get("category"));
    // console.log("selectedCategory", selectedCategory)
    return (
        <>
            {selectedCategory.subCategories.map((subCat, idx) => {
                const sortedCards = cards.filter((card) => card.subCategory === subCat.name)
                // console.log("sub", sortedCards)
                // console.log("subCat", subCat)
                return (
                    <SubcategorySection selectedCategory={selectedCategory}  key={idx} subCat={subCat} sortedCards={sortedCards} setSubCatInView={setSubCatInView}/>
                )
            })}
        </>
    )
}

export default CardListBySubcat


import React, {useEffect} from 'react'
import {categories} from '../../../categories'
import { useQuery } from '../../../hooks/useQuery';
import { Wrapper, SubcategoryTitle, SubcategoryItems, SubcategorySectionItem } from './styles';
import Card from './card/Card';
// import { useInView } from 'react-intersection-observer';

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

const SubcategorySection = ({subCat, sortedCards, setSubCatInView}) => {
    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //   });

    // useEffect(() => {
    //     if (inView) {
    //         console.log("in view", subCat.name)
    //         setSubCatInView((prevState) => {
    //             return {
    //                 ...prevState,
    //                 [subCat.name]: true
    //             }
    //         })
    //     }
        
    // }, [])

    console.log("ddf", sortedCards)
    return (
        // <InView onChange={() => console.log("in view", subCat.name)}>
        <SubcategoryItems >
            <SubcategorySectionItem>
                <SubcategoryTitle>{subCat.name}</SubcategoryTitle>
            </SubcategorySectionItem>
            <Wrapper>
                {sortedCards.map((card, idx) => {
                    return (
                        <Card key={idx} data={card}/>
                    )
                })}
            </Wrapper>
        </SubcategoryItems>
        // </InView>

    )
}

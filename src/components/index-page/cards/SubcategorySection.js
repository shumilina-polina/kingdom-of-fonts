import React, {useEffect} from 'react'
import Card from './card/Card'
import { SubcategoryItems, SubcategorySectionItem, SubcategoryTitle, Wrapper, SubcategoryItemsId } from './styles'
import { useInView } from 'react-intersection-observer';
import { useQuery } from '../../../hooks/useQuery';
import { categories } from '../../../categories';
import { useScrollDirection } from '../../../hooks/useScrollDirection';

const SubcategorySection = ({selectedCategory, subCat, sortedCards, setSubCatInView}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.06,
      });

    const scrollDir = useScrollDirection()

    // console.log("selectedCategory", selectedCategory)

    useEffect(() => {
        // const subCatIdx = selectedCategory.subCategories.findIndex((el) => el.name === subCat.name)
        
        console.log("subCat IN VIEWWW", subCat)
        if (inView) {
            if (scrollDir === "scrolling down") {
                setSubCatInView((prevState) => {
                    return [...prevState, subCat]
                })
            } else {
                setSubCatInView((prevState) => {
                    return [subCat, ...prevState]
                })
            }

        } else {
            setSubCatInView((prevState) => {
                const filtered = prevState.filter(el => el.name !== subCat.name)
                return filtered
            })
        }
        
    }, [inView])

    // console.log("ddf", sortedCards)
    return (
        // <InView onChange={() => console.log("in view", subCat.name)}>
        <SubcategoryItems ref={ref}>
            <SubcategoryItemsId id={subCat.url}/>
            <SubcategorySectionItem >
                <SubcategoryTitle>{subCat.name}</SubcategoryTitle>
            </SubcategorySectionItem>
            <Wrapper >
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


export default SubcategorySection
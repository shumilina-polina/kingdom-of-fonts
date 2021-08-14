import React from 'react'
import Card from './card/Card'
import { SubcategoryItems, SubcategorySectionItem, SubcategoryTitle, Wrapper, SubcategoryItemsId } from './styles'

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
            <SubcategoryItemsId id={subCat.url}/>
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


export default SubcategorySection
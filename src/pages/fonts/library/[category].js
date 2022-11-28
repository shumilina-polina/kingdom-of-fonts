import React, { useEffect } from "react"
import Layout from "../../../components/Layout"
import IndexPageCategoryFilterView from "../../../views/IndexPageCategoryFilterView"
import SEO from "../../../seo"
import { useAccess } from "../../../hooks/useAccess"
import Spinner from "../../../components/Spinner"
import { useStore } from "../../../context/StoreContext"

const CategoryPage = ({ params }) => {
  // TODO: deduplicate

  const { loading: isUserFetching } = useAccess()
  const store = useStore()

  useEffect(() => {
    if (!store.categories.data) {
      store.categories.fetchData()
    }
  }, [store.categories.data, store.categories.fetchData])

  useEffect(() => {
    if (!store.fonts.data) {
      store.fonts.fetchData()
    }
  }, [store.fonts.data, store.fonts.fetchData])

  if (isUserFetching || store.categories.isFetching || store.fonts.isFetching) {
    return (
      <Layout>
        <Spinner/>
      </Layout>
    )
  }

  const category = store.categories.data.find((item) => item.slug === params.category)

  return (
    <Layout logoHref="/fonts/library/">
      <SEO /> {/* TODO */}
      <IndexPageCategoryFilterView
          cards={store.fonts.data.filter((item) => item.categories.includes(category.id))}
          category={category}
      />
    </Layout>
  );
};

export default CategoryPage

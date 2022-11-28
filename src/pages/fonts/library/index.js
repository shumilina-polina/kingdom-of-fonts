import React, {useEffect} from "react";
import Layout from "../../../components/Layout";
import IndexPageNoFiltersView from "../../../views/IndexPageNoFiltersView";
import SEO from "../../../seo";
import { useAccess } from "../../../hooks/useAccess";
import Spinner from "../../../components/Spinner";
import { useStore } from "../../../context/StoreContext"

const IndexPage = () => {
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

  // TODO: check `isFetching` too?
  if (isUserFetching || !store.categories.data || !store.fonts.data) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  return (
    <Layout logoHref="/fonts/library/">
      <SEO
        url="https://pavlushin.design/fonts/library"
      />
        <IndexPageNoFiltersView cards={store.fonts.data}/>
    </Layout>
  )
};

export default IndexPage;

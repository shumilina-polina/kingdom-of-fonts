import React, { useCallback, useContext, useState } from "react"

import api from "../api"

const StoreContext = React.createContext({
  fonts: {
    data: null,
    isFetching: null,
    fetchData: null,
  },
  categories: {
    data: null,
    isFetching: null,
    fetchData: null,
  },
})

const useFetchData = (callback) => {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const fetchData = useCallback(() => {
    // TODO: cancel current fetch

    setIsFetching(true)

    return callback()
      .then((response) => {
        setData(response.data)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [callback])

  return {
    data,
    isFetching,
    fetchData,
  }
}

const useFontsStore = () => {
  const fetchFonts = useCallback(() => api.get("/fonts/fonts/"), [])
  return useFetchData(fetchFonts)
}

const useCategoriesStore = () => {
  const fetchCategories = useCallback(() => api.get("/fonts/categories/"), [])
  return useFetchData(fetchCategories)
}

export const StoreContextProvider = ({ children }) => {
  const store = {
    fonts: useFontsStore(),
    categories: useCategoriesStore(),
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  return useContext(StoreContext)
}

import { useCallback, useState } from "react"

import { defineStore } from "../context/StoreContext"

import api from "../api"

const useFetchData = (callback) => {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const fetchData = useCallback(() => {
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

defineStore("fonts", () => ({
  fonts: useFontsStore(),
  categories: useCategoriesStore(),
}))

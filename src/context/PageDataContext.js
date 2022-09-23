import React, { useCallback, useContext, useEffect, useState } from "react"
import api from "../api"

const PageDataContext = React.createContext({
    data: null,
    error: null,
    isFetching: true,

    fetchPageData: null,
})

export const PageDataContextProvider = ({ url, children }) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  const fetchData = useCallback(() => {
    setIsFetching(true)

    return api.get(url)
      .then((response) => {
        setData(response.data)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [url])

  useEffect(() => {
    fetchData().catch(setError)
  }, [fetchData])

  const value = {
    data,
    error,
    isFetching,

    fetchData,
  }

  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  )
}

export const usePageData = () => {
  return useContext(PageDataContext)
}

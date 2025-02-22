import React, { useCallback, useEffect, useState } from "react"
import api from "../api"

export const UserContext = React.createContext({
    user: null,
    error: null,
    isFetching: true,
    isUpdating: false,

    fetchUser: null,
    updateName: null,
})

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  const setUserFromResponse = useCallback((response) => {
    const email = response.data.email
    const name = response.data.display_name
    const subscriptions = {}

    for (const subscription of response.data.subscriptions) {
      subscriptions[subscription.product] = {
        dateStart: new Date(subscription.date_start),
        dateEnd: new Date(subscription.date_end)
      }
    }

    setUser({email, name, subscriptions})
  }, [])

  const fetchUser = useCallback(() => {
    setIsFetching(true)

    return api.get('/me/')
      .then(setUserFromResponse)
      .finally(() => {
        setIsFetching(false)
      })
  }, [setUserFromResponse])

  const updateName = useCallback((name) => {
    setIsUpdating(true)

    return api.patch('/me/', {display_name: name})
      .then(setUserFromResponse)
      .finally(() => {
        setIsUpdating(false)
      })
  }, [setUserFromResponse])

  useEffect(() => {
    fetchUser().catch(setError)
  }, [fetchUser])

  const value = {
    user,
    error,
    isFetching,
    isUpdating,

    fetchUser,
    updateName,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

import {useContext, useEffect, useState} from 'react'
import { navigate } from "gatsby-link";
import { UserContext } from "../context/UserContext";

export const useAccess = () => {
  const [loading, setLoading] = useState(false)

  const {user} = useContext(UserContext)

  useEffect(() => {
    if (!user || !user.subscriptions.fonts) {
      navigate("/fonts/subscribe/")
    }
  }, [user])

  return { loading }
}

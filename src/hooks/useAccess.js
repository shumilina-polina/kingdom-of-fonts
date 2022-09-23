import { useContext, useEffect } from "react"
import { navigate } from "gatsby-link"
import { UserContext } from "../context/UserContext"

export const useAccess = () => {
  const { user, isFetching } = useContext(UserContext)
  const hasAccess = user && user.subscriptions.fonts

  useEffect(() => {
    if (isFetching) return

    if (!user) {
      navigate("/fonts/login/")
    } else if (!hasAccess) {
      navigate("/fonts/subscribe/")
    }
  }, [isFetching, user, hasAccess])

  return { loading: isFetching || !hasAccess }
}

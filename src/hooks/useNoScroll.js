import { useEffect } from "react"

export const useNoScroll = (isActive, className) => {
  useEffect(() => {
    if (isActive) {
      document.documentElement.scrollTo({top: 0, behavior: "instant"})
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }
  }, [isActive])
}

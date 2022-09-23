import { useEffect } from "react"

const useScrollObserver = (ref, onScroll) => {
  useEffect(() => {
    const element = ref.current
    const handleScroll = () => {
      onScroll(element)
    }

    element.addEventListener("scroll", handleScroll)

    return () => {
      element.removeEventListener("scroll", handleScroll)
    }
  }, [ref, onScroll])
}

export default useScrollObserver

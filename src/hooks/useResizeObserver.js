import { useEffect } from "react"

const useResizeObserver = (ref, onResize) => {
  useEffect(() => {
    const element = ref.current
    const handleResize = () => {
      onResize(element)
    }

    const observer = new ResizeObserver(handleResize)
    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, onResize])
}

export default useResizeObserver

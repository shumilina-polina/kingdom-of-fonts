import { useEffect } from "react"

const useCSSVariable = (ref, name, value) => {
  useEffect(() => {
    ref.current.style.setProperty(name, value)
  }, [ref, name, value])
}

export default useCSSVariable

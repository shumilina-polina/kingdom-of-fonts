import { useEffect } from "react";
import { navigate } from "gatsby";

const FontsIndexPage = () => {
  useEffect(() => {
    navigate("/fonts/library/")
  }, [])

  return null
}

export default FontsIndexPage

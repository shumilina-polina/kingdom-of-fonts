import {useEffect, useState} from 'react'

import { navigate } from "gatsby-link";
// import Layout from "../components/Layout";


export const useAccess = () => {
    // включить эти две вещи когда будешь тестировать доступность
  const [loading, setLoading] = useState(true);
//   const [access, setAccess] = useState(false);


  //включить когда будешь тестировать доступность
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("kingdomOfFontsAccess")) {
        setLoading(false);
        // setAccess(true);
      } else {
        navigate("https://fonts.pavlushin.design/")
      }
    }
  }, []);

  return { loading }
}
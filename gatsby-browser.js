import React from "react"

import "./src/styles/constants.css"
import "./src/styles/fonts.css"
import "./src/styles/global.css"

import { StoreContextProvider } from "./src/context/StoreContext"
import { UserContextProvider } from "./src/context/UserContext"

export const wrapRootElement = ({element}) => (
  <UserContextProvider>
    <StoreContextProvider>
      {element}
    </StoreContextProvider>
  </UserContextProvider>
)

import React from "react"
import DefaultAppBar from "../components/Navbar/AppBar"

const AuthLayout = ({ children }) => {
  return (
    <>
      <DefaultAppBar />
      {children}
    </>
  )
}

export default AuthLayout

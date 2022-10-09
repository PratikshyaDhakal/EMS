import React from "react"
import { Grid } from "@mui/material"
import PropTypes from "prop-types"
import DefaultAppBar from "../components/Navbar/AppBar"
import { UserContext } from "../context/userContext"
import { Navigate, useLocation } from "react-router-dom"

const AuthLayout = ({ children }) => {
  const location = useLocation()
  const { currentUser } = React.useContext(UserContext)

  if (!currentUser) return <Navigate to="/login" state={{ from: location }} replace />
  return (
    <Grid container>
      <Grid item xs={12}>
        <DefaultAppBar />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.any,
}

export default AuthLayout

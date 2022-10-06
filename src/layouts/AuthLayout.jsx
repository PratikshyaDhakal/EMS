import { Grid } from "@mui/material"
import React from "react"
import DefaultAppBar from "../components/Navbar/AppBar"

const AuthLayout = ({ children }) => {
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

export default AuthLayout

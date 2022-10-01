import React from "react"
import { Box, Grid, Typography, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "./validation"
import BootstrapInput from "../Input/BootstrapInput"
import styles from "./style"

const defaultValues = {
  identifier: "",
  password: "",
}

const LoginForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema.loginSchema),
  })

  const onSubmit = (value) => {
    console.log("value", value)
    navigate("/")
  }

  const commonProps = { register, formState }
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={styles.formContainer}>
          <Grid item xs={12} sx={styles.title}>
            <Typography variant="h6">Employee Management System</Typography>
          </Grid>
          <Grid item xs={12}>
            <BootstrapInput {...commonProps} label="Username/Email" name="identifier" />
          </Grid>
          <Grid item xs={12}>
            <BootstrapInput {...commonProps} label="Password" name="password" type="password" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default LoginForm

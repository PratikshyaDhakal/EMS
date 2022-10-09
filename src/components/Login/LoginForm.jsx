import React from "react"
import { toast } from "react-hot-toast"
import { Box, Grid, Typography, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "./validation"
import BootstrapInput from "../Input/BootstrapInput"
import styles from "./style"
import { auth, saveAuthToken } from "../../services/localstorageService"
import { UserContext } from "../../context/userContext"

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
  const { currentUser, setCurrentUser } = React.useContext(UserContext)

  const onSubmit = (value) => {
    const isDefaultUser = value.identifier === "Admin" && value.password === "Password1#"
    const user = auth(value)
    if (user || isDefaultUser) {
      setCurrentUser(user || value)
      saveAuthToken(user || value)
      toast.success("Logged In Successfully")
      navigate("/")
    } else {
      toast.error("Invalid User credential")
    }
  }

  const commonProps = { register, formState }

  if (currentUser) return <Navigate to="/" replace />
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

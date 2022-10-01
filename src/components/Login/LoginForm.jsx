import React from "react"
import { TextField, Box, Grid, Typography, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "./validation"

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

  return (
    <Box style={{ height: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Username/Email</Typography>
            <TextField {...register("identifier")} variant="outlined" size="small" fullWidth />
            {formState.errors?.identifier ? (
              <Typography variant="subtitle2" color="red">
                {formState.errors?.identifier?.message}
              </Typography>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography>Password</Typography>
            <TextField
              {...register("password")}
              variant="outlined"
              size="small"
              type="password"
              fullWidth
            />
            {formState.errors?.password ? (
              <Typography variant="subtitle2" color="red">
                {formState.errors?.password?.message}
              </Typography>
            ) : (
              ""
            )}
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

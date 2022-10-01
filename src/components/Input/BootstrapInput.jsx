import React from "react"
import { TextField, Typography } from "@mui/material"

const BootstrapInput = ({ label, name, register, formState, ...props }) => {
  return (
    <>
      <Typography>{label}</Typography>
      <TextField
        {...props}
        {...register(name)}
        variant="outlined"
        size="small"
        fullWidth
        error={formState.errors[name]}
      />
      {formState.errors[name] ? (
        <Typography variant="subtitle2" color="red">
          {formState.errors[name]?.message}
        </Typography>
      ) : (
        ""
      )}
    </>
  )
}

export default BootstrapInput

import * as React from "react"
import Select from "@mui/material/Select"
import PropTypes from "prop-types"
import { MenuItem, Typography } from "@mui/material"
import { Controller } from "react-hook-form"

const BootstrapSelect = ({ name, control, label, options }) => {
  return (
    <>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} fullWidth size="small">
            {options.map((option) => (
              <MenuItem value={option.value} key={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </>
  )
}

BootstrapSelect.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  control: PropTypes.func.isRequired,
  options: PropTypes.any,
}

export default BootstrapSelect

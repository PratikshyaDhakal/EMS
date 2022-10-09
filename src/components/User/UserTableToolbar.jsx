import React from "react"
import { TextField, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types"
import AddOrEditUser from "./AddOrEditUser"

const EnhancedTableToolbar = (props) => {
  const { onSearch, onUserAdd } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        Users
        <AddOrEditUser onUserAdd={onUserAdd} />
      </Typography>

      <TextField variant="outlined" size="small" onChange={onSearch} />
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onUserAdd: PropTypes.func.isRequired,
}

export default EnhancedTableToolbar

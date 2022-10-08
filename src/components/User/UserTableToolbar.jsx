import React from "react"
import { IconButton, TextField, Toolbar, Tooltip, Typography } from "@mui/material"
import PropTypes from "prop-types"
import AddBoxIcon from "@mui/icons-material/AddBox"

const EnhancedTableToolbar = (props) => {
  const { onUserAdd } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        Users
        <Tooltip title="Add user">
          <IconButton>
            <AddBoxIcon color="error" onClick={onUserAdd} />
          </IconButton>
        </Tooltip>
      </Typography>

      <TextField variant="outlined" size="small" />
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  onUserAdd: PropTypes.func,
}

export default EnhancedTableToolbar

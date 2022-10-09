import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import LogoutIcon from "@mui/icons-material/Logout"
import { UserContext } from "../../context/userContext"
import { logout } from "../../services/localstorageService"
import { useNavigate } from "react-router-dom"

export default function DefaultAppBar() {
  const navigate = useNavigate()
  const { setCurrentUser } = React.useContext(UserContext)

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
  }

  //handler for dashboard
  const handleDashboardRedirect = () => {
    navigate("/")
  }

  //handle user redirect
  const handleUserRedirect = () => {
    navigate("/users")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" onClick={handleDashboardRedirect}>
            EMS
          </Typography>
          <Box component="div" sx={{ flexGrow: 1, textTransform: "none" }}>
            <Button color="inherit" onClick={handleUserRedirect}>
              Users
            </Button>
          </Box>
          <Button color="inherit" endIcon={<LogoutIcon />} onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

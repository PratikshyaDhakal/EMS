import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { Grid, IconButton, Tooltip } from "@mui/material"
import { useForm } from "react-hook-form"
import EditIcon from "@mui/icons-material/Edit"
import { toast } from "react-hot-toast"
import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import validationSchema from "./validation"
import BootstrapInput from "../Input/BootstrapInput"
import BootstrapSelect from "../Select/BootstrapSelect"
import { addUserToDb, editUser } from "../../services/localstorageService"

const fields = [
  { name: "username", label: "Username", type: "text" },
  { name: "password", label: "Password", type: "password" },
  { name: "email", label: "Email", type: "text" },
  { name: "name", label: "Name", type: "text" },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { value: "Manager", label: "Manager" },
      { value: "Normal_User", label: "Normal_User" },
      { value: "Admin", label: "Admin" },
    ],
  },
]

const defaultValues = fields.reduce((acc, red) => ({ ...acc, [red.name]: "" }), {})

const AddOrEditUser = ({ onUserAdd, row }) => {
  const [open, setOpen] = React.useState(false)
  const { register, reset, control, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema.userCreationSchema),
  })

  const handleClickOpen = () => {
    setOpen(true)
    if (row) reset(row)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (value) => {
    //save user to db
    if (!row) addUserToDb(value)
    else editUser({ ...row, ...value })
    reset(defaultValues)
    setOpen(false)
    toast.success(`Successfully ${row ? "updated" : "added"} user!`)
    onUserAdd()
  }
  //common props of react hook form
  const commonProps = { register, control, formState }

  return (
    <React.Fragment>
      <Tooltip title={row ? "Update user" : "Add user"}>
        <IconButton>
          {row ? (
            <EditIcon color="error" onClick={handleClickOpen} />
          ) : (
            <AddBoxIcon color="error" onClick={handleClickOpen} />
          )}
        </IconButton>
      </Tooltip>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>{row ? "Update user" : "Add User"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {fields.map((field) => (
                <Grid item xs={6} key={field.name}>
                  {field.type === "select" ? (
                    <BootstrapSelect {...field} {...commonProps} />
                  ) : (
                    <BootstrapInput {...field} {...commonProps} />
                  )}
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

AddOrEditUser.propTypes = {
  onUserAdd: PropTypes.func.isRequired,
  row: PropTypes.any,
}

export default AddOrEditUser

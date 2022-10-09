import * as React from "react"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { toast } from "react-hot-toast"
import EnhancedTableToolbar from "./UserTableToolbar"
import EnhancedTableHead from "./UserTableHeader"
import { deleteUser, getUsersFromDb } from "../../services/localstorageService"
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep"
import { IconButton, Tooltip } from "@mui/material"
import AddOrEditUser from "./AddOrEditUser"

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export default function UsersTable() {
  const [order, setOrder] = React.useState("asc")
  const [orderBy, setOrderBy] = React.useState("calories")
  const [page, setPage] = React.useState(0)
  const [users, setUsers] = React.useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [search, setSearch] = React.useState("")

  //populate state with fake data on component mount
  React.useEffect(() => {
    setUsers(getUsersFromDb())
  }, [])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  //handler for users search
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  //refresh data on user addition
  const handleUserCreation = () => {
    setUsers(getUsersFromDb())
  }

  const handleDelete = (row) => {
    deleteUser(row)
    setUsers(getUsersFromDb())
    toast.success("User deleted!")
  }

  let filteredUsers = users
  if (search) {
    filteredUsers = users.filter((user) => user.name.toLowerCase().startsWith(search.toLowerCase()))
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar onSearch={handleSearch} onUserAdd={handleUserCreation} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium">
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {stableSort(filteredUsers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell component="th" id={labelId} scope="row" align="left">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.role}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        <AddOrEditUser row={row} onUserAdd={handleUserCreation} />
                        <Tooltip title="delete">
                          <IconButton>
                            <DeleteSweepIcon onClick={() => handleDelete(row)} />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

import * as React from "react"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import EnhancedTableToolbar from "./UserTableToolbar"
import EnhancedTableHead from "./UserTableHeader"

function createData(id, name, role, email) {
  return {
    id,
    name,
    role,
    email,
  }
}

const rows = [
  createData(1, "John", "Admin", "johndoe@mail.com"),
  createData(2, "Shayam", "Coordinator", "Shayamdoe@mail.com"),
  createData(3, "Ram", "Manager", "Ramdoe@mail.com"),
  createData(4, "Sita", "Normal_User", "Sitadoe@mail.com"),
  createData(5, "Hari", "Admin", "Haridoe@mail.com"),
  createData(6, "Gita", "Normal_User", "Gitadoe@mail.com"),
  createData(7, "sagar", "Normal_User", "sagardoe@mail.com"),
  createData(8, "Pratik", "Normal_User", "Pratikdoe@mail.com"),
  createData(9, "cena", "Normal_User", "cenadoe@mail.com"),
  createData(10, "Alina", "Normal_User", "Alinadoe@mail.com"),
  createData(11, "gixxer", "Normal_User", "gixxerdoe@mail.com"),
  createData(12, "dendi", "Normal_User", "dendidoe@mail.com"),
  createData(13, "Sherpa", "Manager", "Sherpadoe@mail.com"),
]

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

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

  //open dialog box on button click
  const handleShowDialog = () => {}

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar onUserAdd={handleShowDialog} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
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
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

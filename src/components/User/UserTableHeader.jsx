import React from "react"
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"
import PropTypes from "prop-types"

const headCells = [
  {
    id: "id",
    label: "Employee Id",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "role",
    label: "Role",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    label: "Action",
  },
]
function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}
export default EnhancedTableHead

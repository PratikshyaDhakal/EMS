import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averageHour" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="active" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

CustomLineChart.propTypes = {
  data: PropTypes.any,
}

export default CustomLineChart

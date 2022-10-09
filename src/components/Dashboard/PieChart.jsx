import React from "react"
import { PieChart, Pie, ResponsiveContainer } from "recharts"
import PropTypes from "prop-types"

const CustomPieChart = ({ data, data1 }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie
          data={data1}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

CustomPieChart.propTypes = {
  data: PropTypes.any,
  data1: PropTypes.any,
}

export default CustomPieChart

import { Card, Grid, CardContent, Typography } from "@mui/material"
import React from "react"
import FilterListIcon from "@mui/icons-material/FilterList"
import CustomLineChart from "../../components/Dashboard/LineChart"
import CustomPieChart from "../../components/Dashboard/PieChart"
import { colors } from "../../theme/color"
import {
  userRegistrationByYear,
  usersRegisteredByMonth,
  userHourStat,
} from "../../services/fakeUserStat"

const stats = [
  { filterApplied: 1, title: "Active", count: 16 },
  { filterApplied: 1, title: "Pending", count: 26 },
  { filterApplied: 1, title: "Blocked", count: 41 },
  { filterApplied: 1, title: "New", count: 33 },
]

const Dashboard = () => {
  return (
    <Grid container spacing={4} mt={1}>
      {stats.map((stat, idx) => (
        <Grid item xs={3} key={stat.count + idx}>
          <Card height="170px">
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h5" component="div" fontWeight={500}>
                    {stat.title}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle" color={colors.link}>
                    <FilterListIcon />
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle" color={colors.link}>
                    {stat.filterApplied}&nbsp;Filter
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="div" fontWeight={700}>
                    {stat.count}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle" component="div">
                    Count
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid item xs={6}>
        <Card style={{ height: "350px" }}>
          <CustomLineChart data={userHourStat} />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card style={{ height: "350px" }}>
          <CustomPieChart data={usersRegisteredByMonth} data1={userRegistrationByYear} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dashboard

import React from 'react'
import Chart from 'react-google-charts'
import college from '../college.json'

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  colors: ["#b0120a", "#ffab91"],
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

const Chartx = () => {
  return (
    <div>
      <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={college}
      options={options}
    />
    </div>
  )
}

export default Chartx
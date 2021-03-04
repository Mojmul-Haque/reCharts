import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
const data = [
  { name: 'Alamin', salary: 16000, bouns: 2400, amt: 2400 },
  { name: 'Abdus Salam', salary: 13300, bouns: 2400, amt: 2400 },
  { name: 'Sagor', salary: 10500, bouns: 2400, amt: 2400 },
  { name: 'M. Jannat', salary: 12150, bouns: 2400, amt: 2400 },
  { name: 'Mojmul Haque', salary: 20000, bouns: 2400, amt: 2400 },
  { name: 'Keya', salary: 7000, bouns: 18100, amt: 2400 },
  { name: 'Rubel Mahamud', salary: 14000, bouns: 2400, amt: 2400 },
  { name: 'Anamul', salary: 19000, bouns: 2400, amt: 2400 },
  { name: 'Sultan Khan', salary: 12000, bouns: 2400, amt: 2400 }
]



const SalaryChart = () => {
  return (
    <>
      <h3>Salary Chart</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LineChart
          width={1140}
          height={300}
          data={data}
          margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
        >
          <Line type='monotone' dataKey='salary' stroke='#8884d8' />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='name'  />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </>
  )
}

export default SalaryChart

import './App.css'
import AreaCharts from './Components/PiChart/AreaCharts/AreaChart'
import PiChart from './Components/PiChart/PiChart'
import ShapePieChart from './Components/PiChart/ShapePieChart/ShapePieChart'
import BarAreaChart from './Components/PiChart/SimpleSaleryChart/InitializeChart'
import SalaryChart from './Components/PiChart/SimpleSaleryChart/SalaryChart'

function App () {
  return (
    <div className='App'>
      <SalaryChart></SalaryChart>
      <AreaCharts></AreaCharts>
      <div style={{ display: 'flex', justifyContent: 'center', margin:' 50px 0'}}>
        <BarAreaChart></BarAreaChart>
        <PiChart></PiChart>
        <ShapePieChart></ShapePieChart>
      </div>
    </div>
  )
}

export default App

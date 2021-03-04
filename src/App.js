import './App.css'
import AreaCharts from './Components/PiChart/AreaCharts/AreaChart';
import SalaryChart from './Components/PiChart/SimpleSaleryChart/SalaryChart'


function App () {
  return (
    
    <div className='App'>
     <SalaryChart></SalaryChart>
     <AreaCharts></AreaCharts>
    </div>
  )
}

export default App

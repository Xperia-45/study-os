import Welcome from './components/welcome.jsx'
import Statecard from './components/StatCard.jsx'
function App() {
  return (
  <><Welcome />





  <Statecard
      title="CGPA"
      value="8.0"
      description="Current semester" />
      <Statecard
      title="Tasks "
      value="12"
      description="Completed" />
      <Statecard
      title="Study Hours"
      value="120"
      description="Total hours studied" /></>
  )
}

export default App
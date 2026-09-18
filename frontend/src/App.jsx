import Welcome from './components/welcome.jsx'
import Statecard from './components/StatCard.jsx'
import Counter from './components/Counter.jsx'
function App() {
  return (
    
    <div className="dashboard">
      <Welcome />



     <div className="stats">
      <Statecard
      title="CGPA"
      value="8.0"
      description="Current semester"
      />
      <Statecard
      title="Tasks "
      value="12"
      description="Completed"
      />
      <Statecard
      title="Study Hours"
      value="120"
      description="Total hours studied"
      />
     </div>


      <Counter
        />
    </div>    
    
  )
}

export default App
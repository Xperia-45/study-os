function Statecard({ title, value, description }) {
  return (
    <div className="stat-card">
      <h2>{title}</h2>

      
      <p className="stat-value">{value}</p>
      <p>{description}</p>
    </div>
  )
}
export default Statecard
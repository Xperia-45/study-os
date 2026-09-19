function Welcome() {
  const studentName = "Ayush"
  const uniname = "CGC university mohali"

  return (
    <div>
      <h1 className = "Welcome-title">WELCOME, {studentName} 👋</h1>
      <p className="subtitle">Your AI-powered academic workspace.</p>
      <p>University: {uniname}</p>
    </div>
  )
}

export default Welcome
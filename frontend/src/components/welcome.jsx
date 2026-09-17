function Welcome() {
  const studentName = "Ayush"
  const uniname = "CGC university mohali"

  return (
    <div>
      <h1>Welcome, {studentName} 👋</h1>
      <p>Your AI-powered academic workspace.</p>
      <p>University: {uniname}</p>
    </div>
  )
}

export default Welcome
import React from 'react'
import { Link } from 'react-router-dom'

const btnStyle = {display:'block', padding:'12px', margin:'10px auto', width:'200px', background:'#2f9e44', color:'#fff', border:'none', borderRadius:'8px'}

export default function Dashboard() {
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h2>Dashboard</h2>
      <Link to="/crop"><button style={btnStyle}>🌾 Crop Prediction</button></Link>
      <Link to="/soil"><button style={btnStyle}>💧 Soil Analysis</button></Link>
      <Link to="/market"><button style={btnStyle}>🛒 Market Prices</button></Link>
      <Link to="/chat"><button style={btnStyle}>🤖 Chatbot</button></Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{textAlign:'center', marginTop:'80px'}}>
      <h1>Kisan AI 🌱</h1>
      <p>Smart Farming Companion</p>
      <Link to="/dashboard">
        <button style={{padding:'12px 20px', marginTop:'20px', fontSize:'16px'}}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  )
}

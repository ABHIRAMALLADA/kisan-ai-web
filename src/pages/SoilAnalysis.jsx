import React, {useState} from 'react'

const RECOMMEND = {
  clay: 'Rice, Sugarcane',
  sandy: 'Groundnut, Watermelon',
  loam: 'Wheat, Cotton, Vegetables'
}

export default function SoilAnalysis() {
  const [soil, setSoil] = useState('')
  const [result, setResult] = useState('')
  
  const analyze = () => {
    const rec = RECOMMEND[soil.toLowerCase()] || 'Try mixed cropping or consult local expert'
    setResult(rec)
  }

  return (
    <div style={{padding:'30px'}}>
      <h2>Soil Analysis</h2>
      <input value={soil} onChange={e=>setSoil(e.target.value)} placeholder="Enter soil type" />
      <button onClick={analyze} style={{marginLeft:'10px'}}>Analyze</button>
      {result && <p><b>Recommended:</b> {result}</p>}
    </div>
  )
}

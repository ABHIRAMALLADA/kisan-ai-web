import React, {useState} from 'react'

export default function CropPrediction() {
  const [crop,setCrop] = useState('Rice')
  const [area,setArea] = useState(1)
  const [rainfall,setRainfall] = useState(100)
  const [prediction,setPrediction] = useState('')

  const predict = () => {
    const base = {Rice:30, Wheat:25, Maize:28}[crop] || 20
    const yieldPerAcre = Math.round(base * (1 + Math.min(rainfall,300)/300))
    const total = yieldPerAcre * area
    setPrediction(`Estimated yield: ${total} quintals (≈ ${yieldPerAcre}/acre)`)
  }

  return (
    <div style={{padding:'30px'}}>
      <h2>Crop Prediction</h2>
      <label>Crop: <input value={crop} onChange={e=>setCrop(e.target.value)} /></label><br/>
      <label>Area (acres): <input type="number" value={area} onChange={e=>setArea(+e.target.value)} /></label><br/>
      <label>Rainfall (mm): <input type="number" value={rainfall} onChange={e=>setRainfall(+e.target.value)} /></label><br/>
      <button onClick={predict}>Predict</button>
      {prediction && <p style={{color:'green'}}>{prediction}</p>}
    </div>
  )
}

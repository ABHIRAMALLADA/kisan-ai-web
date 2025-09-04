import React from 'react'

const data = [
  {crop:'Rice', price:'₹ 1800 / quintal'},
  {crop:'Wheat', price:'₹ 2100 / quintal'},
  {crop:'Maize', price:'₹ 1400 / quintal'}
]

export default function MarketPrices() {
  return (
    <div style={{padding:'30px'}}>
      <h2>Market Prices</h2>
      <table border="1" cellPadding="10">
        <thead><tr><th>Crop</th><th>Price</th></tr></thead>
        <tbody>
          {data.map((item,i)=>(
            <tr key={i}><td>{item.crop}</td><td>{item.price}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

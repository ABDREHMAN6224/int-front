import React, { useEffect, useState } from 'react'
import { difference, formatPrice } from './formatprice'

const Table = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await fetch("http://localhost:3001/data")
      const got= await response.json();
      setData(got)
    }
    fetchData()
  },[data])
  if(data.length==0){
    return <div className="loading"></div>
  }
  
  return (
    <div className='table-container'>
      <table>
        <tbody>
          
        <tr className='head row'>
          <td>#</td>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy / Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
        {data.map((d,index)=>{
          return <tr className='table-data row' key={index}>
            <td>{index+1}</td>
            <td>{d.name}</td>
            <td>{formatPrice(Number(d.last))}</td>
            <td>{formatPrice(Number(d.buy))}/{formatPrice(Number(d.sell))}</td>
            <td className='prices'>{difference(Number(d.sell),Number(d.buy))}%</td>
            <td className='prices'>{formatPrice(Number(d.sell)-Number(d.buy))}</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
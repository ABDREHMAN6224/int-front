import React, { useEffect, useState } from 'react'
import { formatPrice } from './formatprice'

const Info = () => {
  const [data,setData]=useState([])
  const [max,setMax]=useState(0)
  useEffect(()=>{
    const fetchData=async ()=>{
      const response=await fetch("http://localhost:3001/data")
      const got= await response.json();
      setData(got)
    }
    fetchData()
  },[])
  useEffect(()=>{
    const prices=data.map(d=>{
     return Number(d.sell)==0?0:Number(d.sell)
    })
    setMax(Math.max(...prices))
  },[data])
  
  return (
    <div className='info-container'>
      <h3>Best price to trade</h3>
      <div className="statistics">
        <div className="data">
          <div className="percent">
            0.39%
          </div>
          <div className="time">
            5 min
          </div>
        </div>
        <div className="data">
          <div className="percent">
            0.45%
          </div>
          <div className="time">
            1 hour
          </div>
        </div>
        <div className="max">
          {max?
          formatPrice(max):
          "..."
          }
        </div>
        <div className="data">
          <div className="percent">
            4.34%
          </div>
          <div className="time">
            1 day
          </div>
        </div>
        <div className="data">
          <div className="percent">
            11.45%
          </div>
          <div className="time">
            7 days
          </div>
        </div>
      </div>
      Average BTC/INR net price including commission
    </div>
  )
}

export default Info
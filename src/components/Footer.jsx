import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-info'>
        <p>Copyright © {new Date().getFullYear()}</p>
          <p>HodlInfo.com</p>
      </div>
      <div >
        <p>Support</p>
      </div>
    </div>
  )
}

export default Footer
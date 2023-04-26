import React from 'react'

export const Footer = () => {
  let footerstyle={
      position: "relative",
      top:"70vw",
      width:"100%",
      }
  return (
    <div>
      <footer className='bg-dark text-light py-1' style={footerstyle}>
        <p className='text-center'>copyrights&copy; Kaushik</p>
      </footer>
    </div>
  )
}

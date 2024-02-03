import React from 'react'

const Orderdetails = () => {
  return (
    <div>
      <span>Your Order History!</span>
      <span>{localStorage.getItem('input')}</span>
      <br/>
      <span>{localStorage.getItem('inputemail')}</span>
      <br/>
      <span>{sessionStorage.getItem('orderId')}</span>
      <br/>
      <span>{localStorage.getItem('name')}</span>

    </div>
  )
}

export default Orderdetails

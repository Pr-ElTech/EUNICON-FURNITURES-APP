import React from 'react'
import CheckoutForm from '../Components/CheckoutForm'
import OrderSummary from '../Components/OrderSummary'
import "../Style/CheckoutPage.css"

const CheckoutPage = () => {
  return (
    < div className='checkout_container'>
        <CheckoutForm/>
        <OrderSummary/>
    </div>
  )
}

export default CheckoutPage

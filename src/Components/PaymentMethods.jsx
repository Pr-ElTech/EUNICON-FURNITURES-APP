import React from 'react'

const PaymentMethods = () => {
  return (
     <div className="payment_section">
      <p>Payment method</p>

      <div className="payment_options">
        <label>
          <input type="checkbox" />
          Card
        </label>

        <label>
          <input type="checkbox" />
          Transfer
        </label>

        <label>
          <input type="checkbox" />
          PayPal
        </label>

        <label>
          <input type="checkbox" />
          Cash
        </label>
      </div>
    </div>
  )
}

export default PaymentMethods

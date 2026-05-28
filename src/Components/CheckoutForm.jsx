import React from 'react'
import InputField from './InputField'
import PaymentMethods from './PaymentMethods'

const CheckoutForm = () => {
  return (
    <div className="checkout_form">
      <InputField type="text" placeholder="Full Name" />

      <div className="row">
        <InputField type="text" placeholder="City" />
        <InputField type="text" placeholder="State" />
      </div>

      <InputField type="text" placeholder="Phone Number" />
      <InputField type="email" placeholder="Email" />
      <InputField type="text" placeholder="Address" />
      <InputField type="text" placeholder="Country" />
      <InputField type="text" placeholder="Postal Code" />

      <select>
        <option>Shipping Method</option>
      </select>

      <PaymentMethods />

      <button>Complete Order</button>
    </div>
  )
}

export default CheckoutForm

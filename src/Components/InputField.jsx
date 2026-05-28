import React from 'react'

const InputField = ({type, placeholder}) =>  {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input_field"
    />
  )
}

export default InputField

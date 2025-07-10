import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
   <PayPalScriptProvider option = {{"client-id": "AXAI7KvP_dB7pTaowQEhWQgZk4WSCcCDIZ8EH2c35_DCVjbIHeFtNT7mfDLbMVhVRaj5Ebu0-h1n2YOf"}}>
      <PayPalButtons style={{layout: "vertical"}} 
      createOrder={(data, action) => {
return action.order.create({
  purchase_units: [{amount: {value: amount}}]
})

      }}
      onApprove={(data, action) => {
        return action.order.capture().then(onSuccess)
      }}
      onError={onError}
      >

      </PayPalButtons>
   </PayPalScriptProvider>
  )
}

export default PayPalButton

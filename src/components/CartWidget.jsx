import React, { useState } from 'react'

export const CartWidget = () => {
  
  const [numberWidget, setNumberWidget] = useState(0);

  return (
    <div className='flex flex-row pt-5 min-w-4 max-w-20' >CartWidget {numberWidget}</div>
  )
}

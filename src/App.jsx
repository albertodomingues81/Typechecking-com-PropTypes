import React from 'react'
import Petshop from './PetShop'


function App () {
  const handleClick () => {
    console.log
  }
  return (
    <PetShop 
      dogs={2}
      customerName='Alberto Domingues'
      onClick={handleClick}
      status="done"
      />
  )
}

export default App
import React from 'react'
import ProptTypes from 'prop-types'

function PetShop (props) {

  const { dogs, cats, customers, customerName ,onClick } = props
  return (
  <div>
    <h1>Dogs: {dogs}</h1>
    <h2>Cats: {Cats}</h2>
    <div>
      Quantidade de Clientes: {customers}
    </div>
    <div>
      Nome do cliente: {customerName}
    </div>
    <button onClick={onClick}>Iniciar banho</button>
  </div>
  )
}
PetShop.defaultProps = {
  cats: 0,
  customers: []
}

PetShop.proptTypes = {
  dogs: ProptTypes.number.isRequired,
  cats: ProptTypes.number,
  customers: ProptTypes.array,
  customerName: ProptTypes.string.isRequired,
  onClick: ProptTypes.func.isRequired,
  status: ProptTypes.oneOf(["Completed", "Disabled"])
}

export default PetShop
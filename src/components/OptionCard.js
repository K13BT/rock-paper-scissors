import React from 'react'

const OptionCard = ({option}) => {
  return (
    <img src={option.img} alt={option.name} />
  )
}

export default OptionCard
import React from 'react'

const OptionCard = ({option}) => {
  return (
    <div className='rounded-full' style={{border: `30px solid ${option.border}`, boxShadow: `0px 10px 0px 0px ${option.shadow}, inset 0px 10px 0px 0px #ddd`}} >
      <img src={option.img} alt={option.name} className='h-40 w-40 p-10' />
    </div>
  )
}

export default OptionCard
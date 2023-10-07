import React from 'react'

const OptionCard = ({option, bg, winner}) => {
  return (
    <div 
      className={winner ? 'winner' : ''}>
      <div 
        className='rounded-full h-36 w-36 md:h-44 md:w-44 relative' 
        style={{border: `20px solid ${option.border}`,
        boxShadow: `0px 10px 0px 0px ${option.shadow}, inset 0px 10px 0px 0px #ddd`, backgroundColor: `${bg}`}}>
      <img src={option.img} 
        alt={option.name} 
        className='md:h-36 h-28 p-8 absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2' />
      </div>
    </div>
  )
}

OptionCard.defaultProps = {
  bg: 'white',
  winner: false
}


export default OptionCard
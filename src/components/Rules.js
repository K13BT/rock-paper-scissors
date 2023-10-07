import React, { useState } from 'react'
import rulesImg from '../images/image-rules-bonus.svg'
import closeBtn from '../images/icon-close.svg'

const Rules = () => {
    const [showRules, setShowRules] = useState(false)

    const RulesBox = () => {
        return (
            <div className='fixed top-0 right-0 bottom-0 left-0 z-0 bg-neutral-950/60 min-h-full'>
                <div className='z-10 bg-white opacity-100 absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 px-6 py-8 rounded-md md:w-auto md:h-auto w-full h-full grid justify-items-center md:grid-cols-2 md:grid-rows-[auto, auto] md:gap-y-6'>
                    <span className='text-dark_text md:text-xl text-3xl font-bold md:col-start-1 md:justify-self-start'>Rules</span>
                    <img src={rulesImg} alt='rules' className='md:row-start-2 md:col-span-2' />    
                    <button onClick={() => setShowRules(false)}
                    className='md:row-start-1 md:col-start-2 md:justify-self-end' ><img src={closeBtn} alt='close button'/></button>          
                </div>
            </div>
        )    
    }

  return (
    <div className='md:justify-self-end'>
        <button className='md:mr-10 mb-10 px-10 py-2 border-white border-2 rounded-md text-lg' onClick={() => setShowRules(true)}>Rules</button>
        {showRules && <RulesBox />}
    </div>
  )
}

export default Rules
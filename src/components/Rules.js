import React, { useState } from 'react'
import rulesImg from '../images/image-rules-bonus.svg'
import closeBtn from '../images/icon-close.svg'

const Rules = () => {
    const [showRules, setShowRules] = useState(false)

    const RulesBox = () => {
        return (
            <div>
                <p>RULES</p>
                <button onClick={() => setShowRules(false)}><img src={closeBtn} alt='close button' /></button>
                <img src={rulesImg} alt='rules' />
            </div>
        )    
    }

  return (
    <div>
        <button onClick={() => setShowRules(true)}>RULES</button>
        {showRules && <RulesBox />}
    </div>
  )
}

export default Rules
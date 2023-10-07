import React, { useContext } from 'react'
import { ScoreContext } from '../Context'
import logoImg from '../images/logo-bonus.svg'

const Header = () => {
    const {state : { score }} = useContext(ScoreContext)

  return (
    <header className='flex items-center justify-between border-header_outline border-4 md:px-8 py-2 md:py-4 rounded-2xl lg:w-[900px] md:w-[700px] w-[350px] sm:w-[500px] px-2 my-10'>
        <img src={logoImg} className='md:scale-100 scale-[0.6]' />

        <div className='grid justify-items-center bg-white md:px-12 px-8 py-3 md:py-5 rounded-md'>
            <p className='text-score_text'>Score</p>
            <h1 className='text-dark_text md:text-6xl text-5xl'>{score}</h1>
        </div>
    </header>
  )
}

export default Header
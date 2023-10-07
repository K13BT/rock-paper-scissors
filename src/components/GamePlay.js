import React, { useContext, useEffect, useState } from 'react'
import { options } from '../options'
import OptionCard from './OptionCard'
import { ScoreContext } from '../Context'

const GamePlay = ({playerCard, setGameOngoing}) => {
  const [houseCard, setHouseCard] = useState({})
  const {dispatch, state} = useContext(ScoreContext)
  const [showResult, setShowResult] = useState(false)
  const [house, setHouse] = useState(false)

  useEffect(() => {
    dispatch({type: 'RESET_WINNER'})
    setTimeout(() => {
      determineGameResult()
    }, 1000)
  }, [])

  const determineGameResult = () => {
    const randomNum = Math.floor(Math.random() * 5)
    const randomCard = options[randomNum]
    setHouseCard(randomCard)

    dispatch({type: 'UPDATE_SCORE', payload: {playerCard: playerCard.name, houseCard: randomCard.name}})

    setHouse(true)

    setTimeout(() => {  
      setShowResult(true)  
    }, 1000)
  }

  const onPlayAgain = () => {
    setShowResult(false)
    setGameOngoing(false)
  }

  return (
    <main className='grid grid-cols-2 grid-rows-2 md:flex items-center mt-16 md:mt-40 justify-between lg:scale-150 md:scale-125 text-center gap-x-5 md:mb-20'>
        <section className='relative md:mb-0 mb-20'>
          <h3 className='absolute right-1/2 translate-x-1/2 md:-top-16 -bottom-24 font-bold text-lg'>You picked</h3>
          <OptionCard option={playerCard} winner={state.winner === 'Player' ? true : false} />
        </section>
        
        {showResult && (
          <section className='mx-3 row-start-2 col-start-1 col-end-3 md:mb-20 md:mt-0 mt-10'>
            <p className='text-5xl mb-2'>
              {state.winner === 'Player' ? 'You Win' : state.winner === 'House' ? 'You Lose' : 'Draw'}
            </p>
            <button onClick={onPlayAgain} className='bg-white text-dark_text px-10 py-2 rounded-md'>Play again</button>
          </section>
        )}

        <section className='relative md:mb-0 mb-20'>
          <h3 className='absolute right-1/2 translate-x-1/2 md:-top-16 -bottom-28 font-bold text-lg'>The house picked</h3>
          <OptionCard option={houseCard} bg={house ? 'white' : 'hsl(229, 25%, 31%)' } winner={state.winner === 'House' ? true : false} />
        </section>
    </main>
  )
}

export default GamePlay
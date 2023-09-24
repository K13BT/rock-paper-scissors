import React, { useContext, useEffect, useState } from 'react'
import { options } from '../options'
import OptionCard from './OptionCard'
import { ScoreContext } from '../Context'

const GamePlay = ({playerCard, setGameOngoing}) => {
  const [houseCard, setHouseCard] = useState({})
  const {dispatch, state} = useContext(ScoreContext)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      determineGameResult()
    }, 1000)
  }, [])

  const determineGameResult = () => {
    const randomNum = Math.floor(Math.random() * 5)
    const randomCard = options[randomNum]
    setHouseCard(randomCard)

    dispatch({payload: {playerCard: playerCard.name, houseCard: randomCard.name}})

    setShowResult(true)
  }

  const onPlayAgain = () => {
    setShowResult(false)
    setGameOngoing(false)
  }

  return (
    <main>
        <section>
          <h3>You picked</h3>
          <OptionCard option={playerCard} />
        </section>

        <section>
          <h3>The house picked</h3>
          <OptionCard option={houseCard} />
        </section>

        {showResult && (
          <section>
            {state.result}
            <button onClick={onPlayAgain}>Play again</button>
          </section>
        )}
    </main>
  )
}

export default GamePlay
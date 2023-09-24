import React, { useContext } from 'react'
import { ScoreContext } from '../Context'

const gameOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const Header = () => {
    const {state : { score }} = useContext(ScoreContext)

  return (
    <header className='flex items-center'>
        <ul>
            {gameOptions.map((gameOption, index) => 
                <li key={index}>
                    {gameOption}
                </li>
            )}
        </ul>

        <div className='grid justify-items-center'>
            <p>Score</p>
            <h1>{score}</h1>
        </div>
    </header>
  )
}

export default Header
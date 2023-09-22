import React from 'react'

const gameOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const Header = () => {
  return (
    <header>
        <ul>
            {gameOptions.map((gameOption, index) => 
                <li key={index}>
                    {gameOption.toUpperCase()}
                </li>
            )}
        </ul>

        <div>
            <p>SCORE</p>
            <h1></h1>
        </div>
    </header>
  )
}

export default Header
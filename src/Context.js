import React, { createContext, useReducer } from 'react'
import { gameResult } from './gameResult'

export const ScoreContext = createContext()

const storedScore = JSON.parse(window.sessionStorage.getItem('score'))

const initialState = {
  score: storedScore ? storedScore : 0,
  result: ''
}

const Context = ({children}) => {
  const [state, dispatch] = useReducer(gameResult, initialState)

  return (
    <ScoreContext.Provider value={{state, dispatch}}>
      {children}
    </ScoreContext.Provider>
  )
}

export default Context
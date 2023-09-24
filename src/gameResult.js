export const gameResult = (state, action) => {
    const {playerCard, houseCard} = action.payload
    const { score } = state

    const onLose = () => {
        const newScore = score === 0 ? 0 : score - 1
        window.sessionStorage.setItem('score', newScore)
        return { ...state, score: newScore, result: 'You Lose' }
    }

    const onDraw = () => {
        window.sessionStorage.setItem('score', score)
        return { ...state, result: 'Draw' }
    }

    const onWin = () => {
        const newScore = score + 1
        window.sessionStorage.setItem('score', newScore)
        return { ...state, score: newScore, result: 'You Win' }
    }

    if (playerCard === 'rock') {
        switch(houseCard) {
            case 'paper':
                return onLose()
            case 'scissors':
                return onWin()
            case 'lizard':
                return onWin()
            case 'spock':
                return onLose()
            default:
                return onDraw()
        }
    }
    else if (playerCard === 'paper') {
        switch(houseCard) {
            case 'rock':
                return onWin()
            case 'scissors':
                return onLose()
            case 'lizard':
                return onLose()
            case 'spock':
                return onWin()
            default:
                return onDraw()
        }
    }
    else if (playerCard === 'scissors') {
        switch(houseCard) {
            case 'paper':
                return onWin()
            case 'rock':
                return onLose()
            case 'lizard':
                return onWin()
            case 'spock':
                return onLose()
            default:
                return onDraw()
        }
    }
    else if (playerCard === 'lizard') {
        switch(houseCard) {
            case 'paper':
                return onWin()
            case 'scissors':
                return onLose()
            case 'rock':
                return onLose()
            case 'spock':
                return onWin()
            default:
                return onDraw()
        }
    }
    else if (playerCard === 'spock') {
        switch(houseCard) {
            case 'paper':
                return onLose()
            case 'scissors':
                return onWin()
            case 'lizard':
                return onLose()
            case 'rock':
                return onWin()
            default:
                return onDraw()
        }
    }
}
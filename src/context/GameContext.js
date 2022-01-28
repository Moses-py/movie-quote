import React, {useState, useEffect} from "react";
import movieQuote from "popular-movie-quotes"
const GameContext = React.createContext({
    getQuote: () => {},
    answer: () => {},
    isCorrect: "",
    changeQuote: () => {},
    score: "",
    strike: "",
})

export default GameContext

export const GameContextProvider = ({children}) => {
    const getMovie = () => movieQuote.getSomeRandom(4)
    const [randomQuote, setRandomQuote] = useState(getMovie())
    const [score, setScore] = useState(0);
    const [strike, setStrike] = useState(0);
    const [gameOver, setGameOver] = useState(false)

    useEffect(()=> {
        setRandomQuote(getMovie())
    }, [])


    const checkAnswer = (key) => {
        key = key.replace(/\s+/g, '');
        let quoteAnswer = randomQuote[0].movie.replace(/\s+/g, '')

        if(quoteAnswer === key) {
            setScore((prev) => prev + 1)
            return true
        }else {
            setStrike(prev => prev + 1)
            strike > 2 && setGameOver(true)
            return false
        }
    }

    const changeQuote = () => setRandomQuote(getMovie())

    const updateGameStatus = () => setGameOver(false)

    const values = {
        getQuote: randomQuote,
        answer: checkAnswer,
        score,
        strike,
        gameOver,
        updateGameStatus,
        changeQuote
    }
  
    return <GameContext.Provider value={values}>
        {children}
    </GameContext.Provider>
}
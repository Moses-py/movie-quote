import React, {useState, useEffect} from "react";
import movieQuote from "popular-movie-quotes"

const GameContext = React.createContext({
    getQuote: () => {},
    answer: () => {},
    isCorrect: ""
})

export default GameContext

export const GameContextProvider = ({children}) => {
    const [randomQuote, setRandomQuote] = useState(movieQuote.getSomeRandom(4))
    const [validateAnswer, setValidateAnswer] = useState({})

    useEffect(()=> {
        setRandomQuote(movieQuote.getSomeRandom(4))
    }, [])

    const checkAnswer = (key) => {
        key = key.replace(/\s+/g, '');
        let quoteAnswer = randomQuote[0].movie.replace(/\s+/g, '')

        if(quoteAnswer === key) {
            setValidateAnswer({
                status: true,
                key
            })
        }else {
            setValidateAnswer({
                status: false,
                key
            })
        }
    }

    const values = {
        getQuote: randomQuote,
        answer: checkAnswer,
        isCorrect: validateAnswer
    }
  
    return <GameContext.Provider value={values}>
        {children}
    </GameContext.Provider>
}
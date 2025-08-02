'use client'
import { useState } from 'react'

const WORD = 'APPLE'

export default function Nodle() {
    const [guess, setGuess] = useState('')
    const [result, setResult] = useState('')

    const handleGuess = () => {
        if (guess.toUpperCase() === WORD) {
            setResult('🎉 Correct guess!')
        } else {
            setResult('❌ Wrong guess, try again.')
        }
    }

    return (
        <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Nodle Game</h1>
            <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="border px-2 py-1"
                maxLength={5}
                placeholder="Enter your guess"
            />
            <button onClick={handleGuess} className="bg-blue-600 text-white px-4 py-1 rounded">
                Guess
            </button>
            <div className="mt-2">{result}</div>
        </div>
    )
}

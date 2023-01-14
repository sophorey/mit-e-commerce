import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '200px',
                }}
            >
                <button
                    type="button"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    type="button"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    type="button"
                    aria-label="Reset value"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

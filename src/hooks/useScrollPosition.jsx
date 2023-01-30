import { useState, useEffect } from 'react'
import useRafState from './useRafState'

export function useScrollPosition(ref) {
    const [state, setState] = useRafState({ x: 0, y: 0 })

    useEffect(() => {
        const handler = () => {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                })
            }
        }
        if (ref.current && ref.current.addEventListener) {
            ref.current.addEventListener('scroll', handler)
        }
        return () => {
            if (ref.current && ref.current.removeEventListener) {
                ref.current.removeEventListener('scroll', handler)
            }
        }
    }, [ref])

    return state
}

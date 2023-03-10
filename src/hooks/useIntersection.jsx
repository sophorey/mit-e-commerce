import { useEffect, useState } from 'react'

export function useIntersection(ref, options) {
    const [intersectionObserverEntry, setIntersectionObserverEntry] =
        useState(null)

    useEffect(() => {
        if (ref.current) {
            const handler = (entries) => {
                setIntersectionObserverEntry(entries[0])
            }
            const observer = new IntersectionObserver(handler, options)
            observer.observe(ref.current)
            return () => {
                setIntersectionObserverEntry(null)
                observer.disconnect()
            }
        }
        return () => {}
    }, [ref.current])

    return intersectionObserverEntry
}

import { useEffect, useState } from 'react'
import { GalleryColumn } from './GalleryColumn'

export function Gallery({ scrollable, gallerySide, images }) {
    const [verticalScrollPosition, setVerticalScrollPosition] = useState(0)

    useEffect(() => {
        const handler = () => {
            if (scrollable.current) {
                const pageHeight =
                    scrollable.current.scrollHeight -
                    scrollable.current.clientHeight
                const pageLoading =
                    Math.trunc(
                        (1 -
                            (pageHeight - scrollable.current.scrollTop) /
                                pageHeight) *
                            10000
                    ) /
                    100 /
                    2
                setVerticalScrollPosition(pageLoading)
            }
        }

        if (scrollable.current) {
            scrollable.current.addEventListener('scroll', handler)
        }

        return () => {
            if (scrollable.current) {
                scrollable.current.removeEventListener('scroll', handler)
            }
        }
    }, [])

    return (
        <div ref={scrollable} className="overflow-scroll no-scrollbar">
            <div ref={gallerySide} className="hidden overflow-hidden">
                <div
                    className="fixed top-0 left-0 h-2 bg-amber-700 max-w-gallerySide"
                    style={{ width: `${verticalScrollPosition}%` }}
                />
                <div className="grid grid-cols-2 gap-[2.125rem]">
                    <GalleryColumn
                        images={images.filter((_, idx) => idx < 9)}
                        aspectRatio="3/4"
                    />
                    <GalleryColumn
                        images={images.filter((_, idx) => idx > 8)}
                        aspectRatio="2/3"
                    />
                </div>
            </div>
        </div>
    )
}

import { useEffect, useRef, useState } from 'react'
import { GalleryColumn } from './Components/GalleryColumn'
import { Image } from './Components/Image'

function App() {
    const [images, setImages] = useState([])
    const [isGalleryLoading, setIsGalleryLoading] = useState(true)
    const gallerySide = useRef(null)
    const page = useRef(null)
    const lastAnimatedWord = useRef(null)
    const awwwards = useRef(null)
    const aboutUs = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/gallery/`
            )
            return data.json()
        }

        setIsGalleryLoading(true)
        fetchData()
            .then((response) => {
                setImages(response)
            })
            .catch(console.error)
            .finally(() => {
                setIsGalleryLoading(false)
            })
    }, [])

    function onAnimationEnd(e) {
        if (e.target === lastAnimatedWord.current) {
            gallerySide.current.classList.remove('hidden')
            gallerySide.current.classList.add('animate-fadein')
            awwwards.current.classList.add('animate-fadein')
            aboutUs.current.classList.add('animate-fadein')
            page.current.classList.add('animate-off-white-to-white')
        }
    }
    return (
        <div className="bg-off-white">
            <header className="fixed px-[2vw] py-[1.875rem] w-full">
                <a href="/" className="contents">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22.73 8.62"
                        className="w-10"
                    >
                        <path
                            d="M0,8.59V0H1.71l2,6.08c.19.57.33,1,.41,1.27.1-.31.25-.77.46-1.38L6.64,0H8.17V8.56H7.1V1.4L4.6,8.59h-1L1.09,1.28V8.59Z"
                            transform="translate(0 0.03)"
                        />
                        <path
                            d="M10.87,8.59V2.37h1.06V8.59Z"
                            transform="translate(0 0.03)"
                        />
                        <path
                            d="M21.53,8.59V7.39h1.2v1.2Z"
                            transform="translate(0 0.03)"
                        />
                        <path
                            d="M15.85,1H13.24V0h6.35V1H17V8.58H15.85Z"
                            transform="translate(0 0.03)"
                        />
                    </svg>
                </a>
            </header>
            {/* page content wrapper */}
            <div
                ref={page}
                className="grid grid-cols-2 h-screen gap-[2.125rem]"
            >
                {/* gallery side */}
                {!isGalleryLoading && (
                    <div className="overflow-scroll no-scrollbar">
                        <div
                            ref={gallerySide}
                            className="hidden overflow-hidden"
                        >
                            <div className="grid grid-cols-2 gap-[2.125rem] ">
                                <GalleryColumn
                                    images={images.filter((_, idx) => idx < 9)}
                                    aspectRatio="[3/4]"
                                />
                                <GalleryColumn
                                    images={images.filter((_, idx) => idx > 8)}
                                    aspectRatio="[2/3]"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* page title side */}
                <div className="h-screen bg-off-white sticky">
                    <div
                        ref={awwwards}
                        className="absolute top-[1.875rem] right-[2vw] opacity-0"
                    >
                        <p className="font-title text-right">AWWWARDS</p>
                        <p>E-commerce of the Year ‘17, ‘18, ‘19 & ‘21</p>
                    </div>
                    <div className="pt-[24.5vh] pr-[5vw] pb-[3.75rem] pl-[4vw] flex flex-col justify-between h-full">
                        <h1 className="overflow-hidden">
                            <div
                                onAnimationEnd={onAnimationEnd}
                                className="uppercase font-header leading-header tracking-header text-header"
                            >
                                <div className="animate-slide-to-top">
                                    we build
                                </div>
                                <div className="animate-slide-to-top">
                                    digital
                                </div>
                                <div className="ml-1ch animate-slide-to-top">
                                    flagship
                                </div>
                                <div
                                    ref={lastAnimatedWord}
                                    className="animate-slide-to-top"
                                >
                                    stores
                                </div>
                            </div>
                        </h1>
                        <div
                            className="max-w-xs ml-auto opacity-0"
                            ref={aboutUs}
                        >
                            <p className="font-subheader text-[28px] leading-[1.05]">
                                We believe our industry is blinded by numbers.
                                While buying decisions are based on emotion.
                            </p>
                            <div className="mt-[1.25rem]">
                                <a href="/about">
                                    <span>
                                        <div className="text-[16px] uppercase font-title leading-[1.2]">
                                            About us
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { App }

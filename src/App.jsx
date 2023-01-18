import { useEffect, useState } from 'react'

function App() {
    const [galleryImagesPaths, setGalleryImagesPaths] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://127.0.0.1/gallery/')
            return data.json()
        }

        fetchData()
            .then((response) => {
                setGalleryImagesPaths(response)
            })
            .catch(console.error)
    }, [])
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
            <div className="grid grid-cols-2 h-screen gap-[2.125rem] bg-white">
                <div className="grid grid-cols-2 overflow-scroll no-scrollbar">
                    <div className="flex flex-col">
                        {galleryImagesPaths
                            .filter((_, idx) => idx < 9)
                            .map(({ url }, idx) => {
                                return (
                                    <a href={url} className="aspect-[2/3]">
                                        <img src={url} alt={`${idx + 1}`} />
                                    </a>
                                )
                            })}
                    </div>
                    <div className="flex flex-col">
                        {galleryImagesPaths
                            .filter((_, idx) => idx > 8)
                            .map(({ url }, idx) => {
                                return (
                                    <div className="aspect-[2/3]">
                                        <img src={url} alt={`${idx + 1}`} />
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="h-screen bg-off-white sticky">
                    <div className="absolute top-[1.875rem] right-[2vw]">
                        <p className="font-title text-right">AWWWARDS</p>
                        <p>E-commerce of the Year ‘17, ‘18, ‘19 & ‘21</p>
                    </div>
                    <div className="pt-[24.5vh] pr-[5vw] pb-[3.75rem] pl-[4vw] flex flex-col justify-between h-full">
                        <h1 className="overflow-hidden">
                            <div className="uppercase font-header leading-header tracking-header text-header">
                                <div className="animate-slide-to-top">
                                    we build
                                </div>
                                <div className="animate-slide-to-top">
                                    digital
                                </div>
                                <div className="ml-1ch animate-slide-to-top">
                                    flagship
                                </div>
                                <div className="animate-slide-to-top">
                                    stores
                                </div>
                            </div>
                        </h1>
                        <div className="max-w-xs ml-auto">
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

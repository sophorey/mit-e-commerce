import { useEffect } from 'react'
import { Counter } from './features/counter/Counter'

function App() {
    useEffect(() => {}, [])
    return (
        <>
            <header>
                <a href="/" className="contents">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22.73 8.59"
                        className="w-[8rem]"
                    >
                        <path
                            d="M2.13,16.75V8.16H3.84l2,6.08c.19.57.33,1,.41,1.27.1-.31.25-.77.46-1.38l2.06-6h1.53v8.59H9.23V9.56l-2.5,7.19h-1L3.22,9.44v7.31Z"
                            transform="translate(-2.13 -8.16)"
                        />
                        <path
                            d="M12,9.37V8.16h1.06V9.37Zm0,7.38V10.53h1.06v6.22Z"
                            transform="translate(-2.13 -8.16)"
                        />
                        <path
                            d="M14.84,16.75V8.16h3.81a5.2,5.2,0,0,1,1.75.23,1.85,1.85,0,0,1,1,.82,2.41,2.41,0,0,1,.36,1.29A2.16,2.16,0,0,1,21.12,12a3,3,0,0,1-1.83.8,3,3,0,0,1,.69.43,5.83,5.83,0,0,1,.94,1.14l1.49,2.34H21L19.85,15c-.33-.51-.61-.91-.82-1.18a2.61,2.61,0,0,0-.58-.58,1.84,1.84,0,0,0-.52-.23,4.26,4.26,0,0,0-.63,0H16v3.82ZM16,12h2.44a3.6,3.6,0,0,0,1.22-.16,1.27,1.27,0,0,0,.67-.52,1.39,1.39,0,0,0,.23-.77,1.3,1.3,0,0,0-.44-1,2.09,2.09,0,0,0-1.4-.39H16Z"
                            transform="translate(-2.13 -8.16)"
                        />
                        <path
                            d="M23.66,16.75v-1.2h1.2v1.2Z"
                            transform="translate(-2.13 -8.16)"
                        />
                    </svg>
                </a>
            </header>
            <div className="grid grid-cols-2 h-screen gap-[2.125rem]">
                <div>
                    <Counter />
                </div>
                <div className="bg-off-white pt-[24.5vh] pr-[5vw] pb-[3.75rem] pl-[4vw]">
                    <h1>
                        <div className="uppercase font-header leading-header tracking-header text-header">
                            <div>we build</div>
                            <div>digital</div>
                            <div className="ml-1ch">flagship</div>
                            <div>stores</div>
                        </div>
                    </h1>
                </div>
            </div>
        </>
    )
}

export { App }

import { Image } from './Image'

export function GalleryColumn({ images, aspectRatio }) {
    return (
        <ul className="flex flex-col gap-[2.125rem]">
            {images.map(({ compressed, id }, idx) => {
                return (
                    <li key={id}>
                        <a
                            href={compressed}
                            className={`aspect-${aspectRatio} block h-full`}
                        >
                            <Image
                                {...{
                                    url: compressed,
                                    alt: idx + 1,
                                }}
                            />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
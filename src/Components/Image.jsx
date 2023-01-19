export function Image({ url, alt }) {
    return (
        <img
            src={url}
            className="object-cover object-center w-full h-full will-change-auto"
            alt={alt}
            loading="lazy"
        />
    )
}

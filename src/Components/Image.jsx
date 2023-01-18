export function Image({ url, alt }) {
    return (
        <img
            src={url}
            className="object-cover object-center w-full h-full"
            alt={alt}
        />
    )
}

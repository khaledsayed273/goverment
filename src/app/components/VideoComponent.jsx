
function VideoComponent({ src }) {

    return (
        <video
            className="object-fill"
            height={"100%"}
            width={"100%"}
            controls>
            <source src={src} type="video/mp4" />
        </video>

    )
}

export default VideoComponent







function VideoComponent({ src }) {

    return (
        <video
            height={"100%"}
            width={"100%"}
            preload="none"
            controls>
            <source src={src} type="video/mp4" />
        </video>

    )
}

export default VideoComponent






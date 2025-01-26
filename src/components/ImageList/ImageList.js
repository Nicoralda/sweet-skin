import ImageShow from "../ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
    const displayedImages = images.slice(0, 5);

    const renderedImages = displayedImages.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
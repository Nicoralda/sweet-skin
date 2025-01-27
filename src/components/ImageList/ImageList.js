import ImageShow from "../ImageShow";
import "./imageList.css";

function ImageList({ images }) {
    const displayedImages = images.slice(0, 5);

    const renderedImages = displayedImages.map((image) => {
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
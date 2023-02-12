function ImageShow({ image }) {
  return <div>
    <img src={image.urls.small} id={image.id} alt={image.alt_description} />
    </div>;
}

export default ImageShow;

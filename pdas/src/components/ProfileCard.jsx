function ProfileCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.image} alt="image" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{props.title} </p>
          <p className="subtitle is-4">{props.handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

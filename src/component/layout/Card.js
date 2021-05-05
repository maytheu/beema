function Card(props) {
  return (
    <div className="card">
      <div className="card_text">
        <div className="card_title">
          <h3>{props.title}</h3>
        </div>
        <div className="card_details">{props.details}</div>
      </div>
      <div className="card_img">
        <img src={props.img} alt={props.img} />
      </div>
    </div>
  );
}

export default Card;

import "./style.css";

function handleRemove(id) {
  console.log(id);
  // remove item
}
function CardItem({ cardData }) {
  return (
    <div className="CardItem">
      <a href="#">
        <h2 className="title__cardList">{cardData.title}</h2>
      </a>
      <p>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p className="p__cardList">{cardData.description}</p>
      <div className="genre">
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li className="li__cardList" key={i}>{genre}</li>)}
        </ul>
        <button type="button" onClick={() => handleRemove(cardData.id)}>
            Remove
          </button>
      </div>
    </div>
  );
}

export default CardItem;
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {DELETE} from "../../utils/http";
import styles from "./styles.module.scss";


function CardItem({ cardData}) {
  

  const onCardDelete =() => {
    DELETE(cardData.id).then((data) => window.location.reload("/"));
  }

  return (
    <div className={styles.CardItem}>
      <Link className={styles.CardItem__link}to={`/edit-movie/${cardData.id}`}>
        <h2 className={styles.CardItem__title}>{cardData.title}</h2>
      </Link>
        
      <p className={styles.CardItem__year}>{cardData.year}</p>
      <img className={styles.CardItem__img} src={cardData.poster} alt={cardData.title} />
      <p className={styles.CardItem__desc}>{cardData.description}</p>
      <div className={styles.CardItem__genre}>
        <ul className={styles.CardItem__ul}>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i} className={styles.CardItem__genre}>{genre}</li> )}
        </ul>
      </div>
      <button onClick={onCardDelete} className={styles.CardItem__btn}>✖️</button>   
    </div>
  );
}

export default CardItem;
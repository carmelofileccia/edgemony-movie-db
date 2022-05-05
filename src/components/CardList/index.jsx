import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import styles from "./styles.module.scss";



function CardList({searchInput}) {

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    GET().then((data) => setMoviesData(data));
  }, []);

  return (
    <div className={styles.CardList}>
      <h1 className={styles.CardList__title}>Lista dei film</h1>
      <div className={styles.CardList__wrapper}>
        {moviesData &&
          moviesData.filter((movie)=>  movie.title.toLowerCase().includes(searchInput.toLowerCase())
          ||
          movie.genres
                  .toString()
                  .toLowerCase()
                  .includes(searchInput.trim().toLowerCase())
          )
          
          .map((movie) => (<CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;
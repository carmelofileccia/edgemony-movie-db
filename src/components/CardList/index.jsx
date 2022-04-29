import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import CardItem from "../CardItem";
import styles from "./styles.module.scss";



function CardList({searchInput}) {

  const [moviesData, setMoviesData] = useState([]);
  const [value, setValue] = useState ();

  useEffect(() => {
    GET().then((data) => setMoviesData(data));
  }, [value]);

  return (
    <div className={styles.CardList}>
      <h1 className={styles.CardList__title}>Lista dei film</h1>
      <div className={styles.CardList__wrapper}>
        {moviesData &&
          moviesData.filter((movie)=>movie.title.toLowerCase().trim().includes(searchInput.toLowerCase().trim())).map((movie) => (
            <CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;
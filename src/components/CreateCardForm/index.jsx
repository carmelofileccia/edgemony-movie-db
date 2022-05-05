import { useState } from "react";
import { useLocation } from "react-router-dom";
import { POST, PUT } from "../../utils/http";
import styles from "./styles.module.scss";


function CreateCardForm({callType, compCallBack, compPut }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");

  const location = useLocation();
  const movieId = location.pathname.split("/").reverse()[0];

  const unStringifyGenres = (genres) => genres.split(",");

  const addNewMovie = async (e) => {
    e.preventDefault();

    if (callType === "POST") {
      await POST({
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });
       compCallBack();
     
    } else {
      await PUT(movieId, {
        title,
        year,
        poster,
        genres: unStringifyGenres(genres),
        description,
      });

      compPut();
    }
  };

  return (
    <div className={styles.CreateCardForm}>
      <form onSubmit={addNewMovie} className={styles.CreateCardForm__form}>
        <label className={styles.CreateCardForm__label} htmlFor="title">Title:</label>
        <input
          className={styles.CreateCardForm__input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          placeholder="Titolo Film"
          required
        />

        <label className={styles.CreateCardForm__label} htmlFor="year">Year:</label>
        <input
          className={styles.CreateCardForm__input}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          id="year"
          name="year"
          placeholder="Anno"
          required
        />

        <label className={styles.CreateCardForm__label} htmlFor="poster">Poster:</label>
        <input
          className={styles.CreateCardForm__input}
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          type="text"
          id="poster"
          name="poster"
          placeholder="Poster Film"
          required
        />

        <label className={styles.CreateCardForm__label} htmlFor="genres">Genres:</label>
        <input
          className={styles.CreateCardForm__input}
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          type="text"
          id="genres"
          name="genres"
          required
        />

        <label className={styles.CreateCardForm__label} htmlFor="description">Description:</label>
        <input
          className={styles.CreateCardForm__input}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          required
        />

        <input className={styles.CreateCardForm__inputSub} type="submit" value="Conferma Modifica" />
      </form>
    </div>
  );
}

export default CreateCardForm;
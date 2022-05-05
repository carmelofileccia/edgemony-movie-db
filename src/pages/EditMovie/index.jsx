import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/http";

import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import styles from "./styles.module.scss";

function EditMovie(props) {
  const navigate = useNavigate();

  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];
  
  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
    
  }, [movieId]);

  const defPut = () => {
    props.editSucces();
    navigate("/");
  };

  


  return (
    <div className={styles.EditMovie}>
      <CardItem cardData={movieData} />
      <CreateCardForm   callType="PUT" compPut={defPut} />
    </div>
  );
}

export default EditMovie;
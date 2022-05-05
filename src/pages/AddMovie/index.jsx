import { useNavigate } from "react-router-dom";
import CreateCardForm from "./../../components/CreateCardForm";
import styles from "./styles.module.scss";

function AddMovie(props) {
  const navigate = useNavigate();

  const submitComplete = () => {
    props.addSucces();
    navigate("/");
    
  };

  return (
    <div className={styles.AddMovie}>
      <h1 className={styles.AddMovie__title}>Add a new movie.</h1>
      <CreateCardForm compCallBack={submitComplete} callType="POST" />
      
    </div>
  );
}

export default AddMovie;
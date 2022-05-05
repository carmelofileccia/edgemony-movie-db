
import styles from "./styles.module.scss"

const Alert = (props) => {
    const visible = props.visible || false;
    const content = props.content || "";
    const delContent = alert.content === "scheda rimossa con successo!";

    const classes =[
        styles.alert, 
        visible ? styles.visible : "",
        delContent ? styles.visibleRed :"",
        ]  
    return <div className={classes.join(" ")}>{content}</div>;
  };

  export default Alert
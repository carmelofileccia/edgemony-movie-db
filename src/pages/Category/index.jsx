import {useState} from 'react';
import CardList from './../../components/CardList'
import styles from "./styles.module.scss";

function Category() {
    
    const [category, setCategory] = useState ("");
    
   function onCategorySelect (event) {
        setCategory(...category,event.target.value)
        console.log(event.target.value)
    } 

    return(
        <div className={styles.Category}>
            <button className={styles.Category__btn} onClick={onCategorySelect} value="everything" >Everything</button>
            <button className={styles.Category__btn} onClick={onCategorySelect} value="action" >Action</button>
            <button className={styles.Category__btn }onClick={onCategorySelect} value ="adventure" >Adventure</button>
            <button className={styles.Category__btn} onClick={onCategorySelect} value="sci-fi" >Sci-fi</button>
            <CardList searchInput={category.toString()}/>
          
        
        </div>
     
    )

}

export default Category
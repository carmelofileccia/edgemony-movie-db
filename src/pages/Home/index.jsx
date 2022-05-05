import {useState} from 'react';
import CardList from "../../components/CardList";
import styles from "./styles.module.scss"



function Home() {
  const [searchInput, setSearchInput] = useState ("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  return (
    <div className={styles.home}>
      <label className={styles.home__label}htmlFor="search">Search by title or categories:</label>
      <input className={styles.home__input} type="text" id="search" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

      <CardList searchInput={searchInput}/>
    </div>
  );
}

export default Home;
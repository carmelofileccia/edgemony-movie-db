import {Suspense, lazy, useState} from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Loading from "./components/Loading";
import Alert from "./components/Alert";

import styles from "./styles.module.scss";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */ "./pages/AddMovie"));
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/EditMovie"));
const Category = lazy (() => import(/* webpackChunkName: "category" */ "./pages/Category"));

function App() {

  const [alert, setAlert] = useState({
  visible: false,
  content:''
})

const editSucces =() =>{
  setAlert({
    visible: true,
    content :" scheda aggiornata con successo!",
  }); 
  setTimeout(() => {
    setAlert(false);
    
  }, 2000);
  
};
const addSucces =() =>{
  setAlert({
    visible: true,
    content :" scheda aggiunta con successo!",
  }); 
  setTimeout(() => {
    setAlert(false);
    
  }, 2000);

};
const delSucces =() =>{
  setAlert({
    visible: true,
    content :"scheda rimossa con successo!",
  });
  setTimeout(() => {
    setAlert(false);
    
  }, 2000);
};
  return (
    <>
    <Alert visible={alert?.visible} content={alert?.content}/>
    <Router>
      <div className={styles.App}>
        <nav className={styles.App__navbar}>
          <ul className={styles.App__ul}>
            <li className={styles.App__li}>
              <Link className={styles.App__link}to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.App__link}to="/add-movie">Add movie</Link>
            </li>
            <li>
              <Link className={styles.App__link}to="/category">Category</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/category" 
            element={
              <Suspense fallback={<Loading/>}>
                <Category/>
              </Suspense>
            }
          />

          <Route 
            path="/edit-movie/:id" 
            element={
              <Suspense fallback ={<Loading/>}>
                <EditMovie editSucces={editSucces} delSucces={delSucces} />
              </Suspense>
            }
          />

          <Route 
            path="/add-movie" 
            element={
              <Suspense fallback={<Loading/>}> 
                <AddMovie addSucces={addSucces}/>
              </Suspense>
            } 
          />

          <Route 
            path="/" 
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } 
          />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
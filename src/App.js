import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import DisplayPost from './components/DisplayPost';

function App() {

  const [frontPage, setFrontPage] = useState([])

  useEffect(() => {
    async function getDataFromDB() {
      const querySnapshot = await getDocs(collection(db, 'reddit-front-hot'))
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        setFrontPage(oldArray => [...oldArray, obj]);
      })
    }
    getDataFromDB()
  }, [])


  return (
    <div>
      {frontPage[1] ? <DisplayPost posts={frontPage[1]} /> : null}

    </div>
  );
}

export default App;

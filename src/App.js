import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DisplayPost from './components/DisplayPost/DisplayPost';
import DisplayHeader from './components/DisplayHeader/DisplayHeader';
import GetComments from './components/DisplayPostWithComments/GetComments';
import DisplayPage from './components/DisplayPost/DisplayPage';
function App() {

  const [frontPage, setFrontPage] = useState([])
  const [commentID, setCommentID] = useState()

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

  function commentHandler(id) {
    setCommentID(id)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader />}>
          <Route path="/" element={frontPage ? <DisplayPage content={frontPage} /> : null} />
          <Route path='/comments'>
            <Route path=":Id" element={<GetComments />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;



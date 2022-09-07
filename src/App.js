import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayHeader from './components/DisplayHeader/DisplayHeader';
import GetComments from './components/DisplayPostWithComments/GetComments';
import DisplayPage from './components/DisplayPost/DisplayPage';

function App() {

  const [frontPage, setFrontPage] = useState([])
  const [subName, setSubName] = useState()

  //Display front page on first load
  useEffect(() => {
    async function getDataFromDB() {
      const querySnapshot = await getDocs(collection(db, 'reddit-front-hot'))
      let posts = []
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        posts = [...posts, obj]
      })
      setFrontPage(posts)
      setSubName('reddit-front-hot')
    }
    getDataFromDB()
  }, [])

  // Maps subreddit to firestore document
  const subMap = {
    AskReddit: 'askreddit-hot',
    ExplainLikeImFive: 'explainlikeimfive-hot',
    ['Front-Page']: 'reddit-front-hot'
  }

  function subHandler(event) {
    const name = event.target.textContent
    setSubName(subMap[name])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader handler={subHandler} />}>
          <Route path="/" element={frontPage ? <DisplayPage content={frontPage} /> : null} />
          <Route path='/r'>
            <Route path=":sub" element={<DisplayPage />} />
          </Route>
          <Route path='/comments'>
            <Route path=":Id" element={<GetComments sub={subName} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;



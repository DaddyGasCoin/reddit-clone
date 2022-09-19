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
      const querySnapshot = await getDocs(collection(db, 'front-page-hot'))
      let posts = []
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        posts = [...posts, obj]
      })
      setFrontPage(posts)
      setSubName('front-page-hot')
    }
    getDataFromDB()
  }, [])

  // Maps subreddit to firestore document
  const subMap = {
    AskReddit: {
      'ThisMonth': 'askreddit-top-month',
      'Hot': 'askreddit-hot',
      'ThisWeek': 'askreddit-top-week',
      'ThisYear': 'askreddit-top-year',
      'AllTime': 'askreddit-top-all',
      'New': 'askreddit-new'
    },
    ExplainLikeImFive: {
      'ThisMonth': 'explainlikeimfive-top-month',
      'Hot': 'explainlikeimfive-hot',
      'ThisWeek': 'explainlikeimfive-top-week',
      'AllTime': 'explainlikeimfive-top-all',
      'ThisYear': 'explainlikeimfive-top-year',
      'New': 'explainlikeimfive-new'
    },
    'front': {
      'Hot': 'front-page-hot',
      'ThisWeek': 'front-page-top-week',
      'AllTime': 'reddit-front-hot',
      'New': 'front-page-new',
      'ThisMonth': 'front-page-top-month',
      'ThisYear': 'front-page-top-year'
    }
  }

  function subHandler(event) {
    const name = event.target.textContent
    if (name === 'Front-Page' || name === 'reddit') {
      setSubName(subMap.front.Hot)
    }
    else {
      setSubName(subMap[name].Hot)
    }
  }

  function sortHandler(event, param, sort) {
    const doc = (subMap[param][sort])
    setSubName(doc)
  }

  return (
    <BrowserRouter basename="/reddit-clone">
      <Routes>
        <Route path="/" element={<DisplayHeader handler={subHandler} />}>
          <Route path="/" element={frontPage ? <DisplayPage content={frontPage} handler={sortHandler} /> : null} />
          <Route path='/r'>
            <Route path=":sub" element={<DisplayPage handler={sortHandler} />} />
            <Route path=":sub/:filter" element={<DisplayPage handler={sortHandler} />} />
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
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
      'ThisYear': 'explainlikeimfive-top-year'
    },
    'Front-Page': 'reddit-front-hot'
  }

  function subHandler(event) {
    const name = event.target.textContent
    if (name === 'Front-Page') {
      setSubName(subMap[name])
    }
    else {
      setSubName(subMap[name].Hot)
    }
  }

  function sortHandler(event, param, sort) {
    const doc = (subMap[param.sub][sort])
    setSubName(doc)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader handler={subHandler} />}>
          <Route path="/" element={frontPage ? <DisplayPage content={frontPage} /> : null} />
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


// function subHandler(event, param) {
//   const name = event.target.textContent
//   console.log(name)
//   console.log(param.filter)
//   if (name != 'Front-Page') {
//     if (param.filter) {
//       setSubName(subMap[name][param.filter])
//     }
//     else {
//       setSubName(subMap[name].Hot)
//     }
//   }
//   else {
//     setSubName(subMap[name])
//   }
// }
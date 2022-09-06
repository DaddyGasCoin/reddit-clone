import db from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayHeader from './components/DisplayHeader/DisplayHeader';
import GetComments from './components/DisplayPostWithComments/GetComments';
import DisplayPage from './components/DisplayPost/DisplayPage';
function App() {

  const [frontPage, setFrontPage] = useState([])
  const [currentSub, setCurrentSub] = useState([])
  const [subName, setSubName] = useState()

  //Display front page on first load
  useEffect(() => {
    async function getDataFromDB() {
      const querySnapshot = await getDocs(collection(db, 'reddit-front-hot'))
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        setFrontPage(oldArray => [...oldArray, obj]);
      })
      setCurrentSub(frontPage)
    }
    getDataFromDB()
    setSubName('reddit-front-hot')
  }, [])


  const subMap = {
    AskReddit: 'askreddit-hot',
    ExplainLikeImFive: 'explainlikeimfive-hot',
    ['Front-Page']: 'reddit-front-hot'
  }

  function subHandler(event) {
    const name = event.target.textContent
    const x = subMap[name]
    let arr = []
    async function changeSub() {
      const querySnapshot = await getDocs(collection(db, x))
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        arr = [...arr, obj]
      })
      setCurrentSub(arr)
      setSubName(x)
    }
    changeSub()
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayHeader handler={subHandler} />}>
          <Route path="/" element={currentSub ? <DisplayPage content={currentSub} /> : null} />
          <Route path='/comments'>
            <Route path=":Id" element={<GetComments sub={subName} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;



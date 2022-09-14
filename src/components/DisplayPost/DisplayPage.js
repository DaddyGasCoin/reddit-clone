import DisplayPost from './DisplayPost'
import DisplaySortBox from './DisplaySortBox';
import DisplayRules from './DisplayRules';
import db from '../../firebase.config'
import { getDocs, collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const DisplayPage = (props) => {

  // content prop contains front page;props optional parameter
  const { content, handler } = props
  const params = useParams();
  const [posts, setPosts] = useState([])
  const [rules, setRules] = useState()

  //Maps subreddit to firestore document
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
    }
  }
  useEffect(() => {
    async function getAllPostsFromDB(document) {
      const querySnapshot = await getDocs(collection(db, document))
      let posts = []
      querySnapshot.forEach((doc) => {
        const obj = {
          [doc.id]: doc.data()
        }
        posts = [...posts, obj]
      })
      setPosts(posts)
    }

    if (!content) {
      let doc
      if (params.filter) {
        doc = subMap[params.sub][params.filter]
      }
      else {
        doc = subMap[params.sub].Hot
      }
      getAllPostsFromDB(doc)
    }
    else {
      setPosts(content)
    }

  }, [params])

  useEffect(() => {
    async function getCommentsFromDB() {
      const docname = `${params.sub}-rules`.toLowerCase()
      const docRef = doc(db, docname, 'rules');
      const docSnap = await getDoc(docRef);
      setRules(docSnap.data())
    }
    getCommentsFromDB()
  }, [params.sub])

  return (

    <div className='page-wrapper'>
      <div className='content-wrapper'>
        <DisplaySortBox handler={handler} />
        {posts.map((post) => {
          return <DisplayPost posts={post} key={Object.keys(post)} />
        })}
      </div>
      {rules ? <DisplayRules data={rules.data} /> : null}
    </div>
  )
}

export default DisplayPage
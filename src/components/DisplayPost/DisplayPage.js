import DisplayPost from './DisplayPost'
import DisplaySortBox from './DisplaySortBox';
import DisplayRules from './DisplayRules';
import db from '../../firebase.config'
import DisplaySidebar from './DisplaySidebar';
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
      // check if front page
      if (docname === 'undefined-rules' || docname === 'front-rules') {
        setRules('front')
        return
      }
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
      {
        (() => {
          if (rules === 'front')
            return <DisplaySidebar />
          // return null while fetching data
          if (rules)
            return <DisplayRules data={rules.data} />
          else
            return null
        })()
      }

    </div>
  )
}

export default DisplayPage
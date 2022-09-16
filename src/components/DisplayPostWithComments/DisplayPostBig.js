import './Post.css'
import DisplayVoteContent from './DisplayVoteContent.js'
import DisplayPostInfo from './DisplayPostInfo'
import DisplayIconBar from './DisplayIconBar'
import DisplayComments from './DisplayComments'
import formater from '../../timeFormat'
import DisplayCommentSort from './DisplayCommentSort'
import DisplayRules from '../DisplayPost/DisplayRules'
import DisplaySidebar from '../DisplayPost/DisplaySidebar'
import { useState, useEffect } from 'react'
import db from '../../firebase.config'
import { getDoc, doc } from "firebase/firestore";
import { orderBy } from 'lodash'

//Displays single post including contents and comments 
const DisplayPostBig = (props) => {

   const { data, sub } = props
   const { author, img, comment, content, time, title, upvotes } = data
   const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)
   const diff = new Date() - new Date(time * 1000)
   const formatedTime = formater(diff)
   const [comments, setComments] = useState(comment)
   const [rules, setRules] = useState()
   const best = comment

   function sortComments(event, option) {
      if (option === 'best') {
         setComments(best)
         return
      }
      const sortedComments = orderBy(comments, ['upvotes'], [option])
      setComments(sortedComments)
   }
   useEffect(() => {
      async function getCommentsFromDB() {
         if (sub.includes('front')) {
            setRules('front')
            return
         }
         const str = sub.substring(0, sub.indexOf('-'))
         const docname = `${str}-rules`.toLowerCase()
         console.log(docname)
         const docRef = doc(db, docname, 'rules');
         const docSnap = await getDoc(docRef);
         setRules(docSnap.data().data)
      }
      getCommentsFromDB()
   }, [])

   return (
      <div className="row-wrapper">
         <div className="content-wrapper-big">
            <div className="vote-content">
               <DisplayVoteContent votes={formated_upvotes} />
            </div>
            <div className='post-content'>
               <DisplayPostInfo data={[author, title, formatedTime]} />
               <img src={img} />
               <DisplayIconBar />
               <DisplayCommentSort handler={sortComments} />
               {comments.map((x) => {
                  return <DisplayComments data={x} key={x.id} />
               })}
            </div>
         </div>
         {/* {rules ? <DisplayRules data={rules} /> : <DisplaySidebar />} */}
         {
            (() => {
               if (rules === 'front')
                  return <DisplaySidebar />
               if (rules)
                  return <DisplayRules data={rules} />
               else
                  return null
            })()
         }


      </div>
   )
}

export default DisplayPostBig

// {
//    (() => {
//        if (rules === 'front')
//           return <DisplaySidebar/>
//        if (rules)
//           return <DisplayRules data={rules}/>
//        else 
//           return null
//    })()
// }

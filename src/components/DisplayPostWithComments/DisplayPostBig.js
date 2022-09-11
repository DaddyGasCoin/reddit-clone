import './Post.css'
import DisplayVoteContent from './DisplayVoteContent.js'
import DisplayPostInfo from './DisplayPostInfo'
import DisplayIconBar from './DisplayIconBar'
import DisplayComments from './DisplayComments'
import formater from '../../timeFormat'



const DisplayPostBig = (props) => {

   const { data } = props
   const { author, img, comment, content, sub, thumbnil, time, title, upvotes } = data
   const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)
   const diff = new Date() - new Date(time * 1000)
   const formatedTime = formater(diff)


   return (
      <div className="content-wrapper">
         <div className="vote-content">
            <DisplayVoteContent votes={formated_upvotes} />
         </div>
         <div className='post-content'>
            <DisplayPostInfo data={[author, title, formatedTime]} />
            <img src={img} />
            <DisplayIconBar />
            {comment.map((x) => {
               return <DisplayComments data={x} key={x.id} />
            })}
         </div>
      </div>
   )
}

export default DisplayPostBig


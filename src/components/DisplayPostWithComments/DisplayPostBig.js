import './Post.css'
import DisplayVoteContent from './DisplayVoteContent.js'
import DisplayPostInfo from './DisplayPostInfo'
import DisplayIconBar from './DisplayIconBar'
import DisplayComments from './DisplayComments'

const DisplayPostBig = (props) => {

   const { data } = props
   const { author, img, comment, content, sub, thumbnil, time, title, upvotes } = data
   const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)
   return (
      <div className="content-wrapper">
         <div className="vote-content">
            <DisplayVoteContent votes={formated_upvotes} />
         </div>
         <div className='post-content'>
            <DisplayPostInfo data={[author, title]} />
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


import './Post.css'
import DisplayCommentLinks from './DisplayCommentLinks'

const DisplayComments= (props) => {

   const { data } = props
   const { author, id, text, upvotes } = data

   return (
      <div className='comment-wrapper'>
         <div className="comment-author">
            {author}
         </div>
         <p className="comment-content">
            {text}
         </p>
         <DisplayCommentLinks data={upvotes} />
      </div>
   )
}

export default DisplayComments
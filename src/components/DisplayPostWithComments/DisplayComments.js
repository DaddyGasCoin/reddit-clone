import './Post.css'
import DisplayCommentLinks from './DisplayCommentLinks'

const DisplayComments = (props) => {

   const { data } = props
   const { author, id, text, upvotes } = data
   const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)

   return (
      <div className='comment-wrapper'>
         <div className="comment-author">
            {author}
         </div>
         <p className="comment-content">
            {text}
         </p>
         <DisplayCommentLinks data={formated_upvotes} />
      </div>
   )
}

export default DisplayComments
import './DisplayPost.css'
import { Link } from "react-router-dom";


const DisplayPost = (props) => {
  const { posts } = props
  const { author, img, comment, content, sub, thumbnil, time, title, upvotes } = posts[Object.keys(posts)]
  const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)
  return (

    <div className="post-wrapper">
      <div className="upvotes">
        <div className='up'>
          <span className="material-symbols-outlined big up">
            arrow_drop_up
          </span>
        </div>
        {formated_upvotes}
        <div className='down'>
          <span className="material-symbols-outlined big">
            arrow_drop_down
          </span>
        </div>
      </div>
      <div className="post-content">
        <div className="post-info-wrap">
          <div className="subname">
            r/{sub}
          </div>
          <div className="author-text">
            Posted by u/{author}
          </div>
        </div>
        <div className="post=title">
          {title}
        </div>
        <div className='thumb-wrapper'>
          {img ? <img src={img} className="thumbnail" /> : null}
          <div className="link-wrapper">
            <Link style={{ textDecoration: 'none' }} to={`/comments/${[Object.keys(posts)]}`}>
              <div className="link-box">
                <span className="material-symbols-outlined">
                  chat_bubble
                </span>
                Comments
              </div>
            </Link>
            <div className="link-box">
              <span className="material-symbols-outlined">
                redeem
              </span>
              Award
            </div>
            <div className="link-box">
              <span className="material-symbols-outlined">
                share
              </span>
              Share
            </div>
            <div className="link-box">
              <span className="material-symbols-outlined" >
                bookmark
              </span >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayPost





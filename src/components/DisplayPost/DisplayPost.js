import './DisplayPost.css'
import { Link } from "react-router-dom";
import formater from '../../timeFormat'



const DisplayPost = (props) => {
  const { posts } = props
  const { author, img, comment, content, sub, thumbnil, time, title, upvotes } = posts[Object.keys(posts)]
  const formated_upvotes = Intl.NumberFormat('en', { notation: 'compact' }).format(upvotes)
  const diff = new Date() - new Date(time * 1000)
  const formatedTime = formater(diff)


  let outBoundLink = false;
  if (img) {
    if (!img.includes('jpg')) {
      outBoundLink = true
    }
  }
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
        <div className='test-wrap'>
          <div className='column-wrap'>
            <div className="post-info-wrap">
              {/* Render subname if frontpage */}
              {sub ? <div className="subname">
                r/{sub}
              </div> : null}
              <div className="author-text">
                Posted by u/{author} {formatedTime}
              </div>
            </div>
            <div className="post=title">
              {title}
            </div>
            {/* display thumbnail and link if foreign content */}
            {outBoundLink ? <a href={img} target="_blank" rel="noopener noreferrer" > {img} </a> : null}
          </div>
          {outBoundLink ? <img src={thumbnil} className="thumb-small" alt='content-thumbnail' /> : null}
        </div>
        <div className='thumb-wrapper'>
          {
            (() => {
              if (!img)
                return null
              if (!outBoundLink)
                return <img src={img} className="thumbnail" alt='content' />
              else
                return null
            })()
          }

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




      // {
      //   (() => {
      //     if (!img)
      //       return null
      //     // return null while fetching data
      //     if (!outBoundLink)
      //       return <img src={img} className="thumbnail" />
      //     else
      //       return null
      //   })()
      // }


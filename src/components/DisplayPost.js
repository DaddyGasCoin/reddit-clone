import './DisplayPost.css'

const DisplayPost = (props) => {
  const { posts } = props
  const { author, img, comment, content, sub, thumbnil, time, title, upvotes } = posts[Object.keys(posts)]
  return (
    <div className="post-wrapper">
      <div className="upvotes">
        <div className='up'>
          <span class="material-symbols-outlined big up">
            arrow_drop_up
          </span>
        </div>
        {upvotes}
        <div className='down'>
          <span class="material-symbols-outlined big">
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
          <img src={img} className="thumbnail" />
          <div className="link-wrapper">
            <div className="link-box">
              <span class="material-symbols-outlined">
                chat_bubble
              </span>
              Comments
            </div>
            <div className="link-box">
              <span class="material-symbols-outlined">
                redeem
              </span>
              Award
            </div>
            <div className="link-box">
              <span class="material-symbols-outlined">
                share
              </span>
              Share
            </div>
            <div className="link-box">
              <span class="material-symbols-outlined" >
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





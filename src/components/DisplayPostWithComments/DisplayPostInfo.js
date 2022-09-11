import './Post.css'


const DisplayPostInfo = (props) => {
  const [author, title, formatedTime] = props.data
  return (
    <div className="post-info">
      <div className="author-text">
        Posted by u/{author} {formatedTime}
      </div>
      <div className="post-title">
        {title}
      </div>
    </div>
  )
}

export default DisplayPostInfo
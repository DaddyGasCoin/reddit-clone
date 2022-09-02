import './Post.css'


const DisplayPostInfo = (props) => {
  const [author, title] = props.data

  return (
    <div className="post-info">
      <div className="author-text">
        Posted by u/{author}
      </div>
      <div className="post-title">
        {title}
      </div>
    </div>
  )
}

export default DisplayPostInfo
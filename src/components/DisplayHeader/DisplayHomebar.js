
const DisplayHomeBar = (props) => {
  const { handler } = props
  return (
    <div className="dropdown">
      <button className="head-item-wrapper homex">
        <div className="home-wrapper">
          <span className="material-symbols-outlined dark">
            home
          </span>
          <div className='home-text'>
            Home
          </div>
        </div>
        <span className="material-symbols-outlined">
          expand_more
        </span>
      </button>

      <div className="dropdown-content">
        <div className="sub-link" onClick={handler}>
          AskReddit
        </div>
        <div className="sub-link" onClick={handler}>
          ExplainLikeImFive
        </div>
        <div className="sub-link" onClick={handler}>
          Front-Page
        </div>
      </div>
    </div>


  )
}

export default DisplayHomeBar
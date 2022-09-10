import { Link } from "react-router-dom";

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
        <Link style={{ textDecoration: 'none' }} to={`/r/AskReddit`}>
          <div className="sub-link" onClick={handler}>
            AskReddit
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/r/ExplainLikeImFive`}>
          <div className="sub-link" onClick={handler}>
            ExplainLikeImFive
          </div>
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/`}>
          <div className="sub-link" onClick={handler}>
            Front-Page
          </div>
        </Link>
      </div>
    </div>


  )
}

export default DisplayHomeBar

// onClick={(event) => handler(event, params)}
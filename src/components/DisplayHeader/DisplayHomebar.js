
const DisplayHomeBar = () => {

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

      <div class="dropdown-content">
        <div className="sub-link">
          AskReddit
        </div>
        <div className="sub-link">
          ExplainLikeImFive
        </div>
      </div>
    </div>


  )
}

export default DisplayHomeBar
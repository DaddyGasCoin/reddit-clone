import { useState } from "react"

const DisplaySortBox = () => {

  const [topStatus, setStatus] = useState(false)
  const [timeFilter, setTimeFilter] = useState(false)
  return (

    <div className="sort-box">
      <div className="box-option">
        HOT
      </div>
      <div className="box-option">
        NEW
      </div>
      <div className="box-option" onClick={() => setStatus(!topStatus)}>
        TOP
      </div>
      {topStatus ? <div className="box-option sort-combo" onClick={() => setTimeFilter(!timeFilter)}>
        TODAY
        {timeFilter ? <div className="combo-item-wrapper">
          <div className="combo-item">Today</div>
          <div className="combo-item">This Week</div>
          <div className="combo-item">This Month</div>
          <div className="combo-item">This Year</div>
          <div className="combo-item">All Time</div>
        </div> : null}
      </div> : null}
    </div>
  )
}

export default DisplaySortBox
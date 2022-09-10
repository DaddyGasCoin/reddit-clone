import { useState } from "react"
import { Link, useParams } from "react-router-dom";


const DisplaySortBox = (props) => {

  const [topStatus, setStatus] = useState(false)
  const [timeFilter, setTimeFilter] = useState(false)
  const { handler } = props
  const params = useParams();

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

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisWeek`}>
            <div className="combo-item" onClick={(event) => handler(event, params, 'ThisWeek')}>This Week</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisMonth`}>
            <div className="combo-item" onClick={(event) => handler(event, params, 'ThisMonth')}>This Month</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisYear`}>
            <div className="combo-item" onClick={(event) => handler(event, params, 'ThisYear')}>This Year</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/AllTime`}>
            <div className="combo-item" onClick={(event) => handler(event, params, 'AllTime')}>All Time</div>
          </Link>

        </div> : null}
      </div> : null}
    </div>
  )
}

export default DisplaySortBox
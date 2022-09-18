import { useState } from "react"
import { Link, useParams } from "react-router-dom";


const DisplaySortBox = (props) => {

  const [topStatus, setStatus] = useState(false)
  const [timeFilter, setTimeFilter] = useState(false)
  const [currentSort, setCurrentSort] = useState('Today')
  const { handler } = props
  const params = useParams();
  let sub;
  if (!params.sub)
    sub = 'front'
  else
    sub = params.sub

  return (

    <div className="sort-box">
      <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/Hot`}>
        <div className="box-option" onClick={(event) => handler(event, sub, 'Hot')}>
          HOT
        </div>
      </Link>

      <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/New`}>
        <div className="box-option" onClick={(event) => handler(event, sub, 'New')}>
          NEW
        </div>
      </Link>
      <div className="box-option" onClick={() => setStatus(!topStatus)}>
        TOP
      </div>
      {topStatus ? <div className="box-option sort-combo" onClick={() => setTimeFilter(!timeFilter)}>
        {currentSort}
        {timeFilter ? <div className="combo-item-wrapper">

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/ThisWeek`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, sub, 'ThisWeek');
              setCurrentSort('This Week')
            }}>This Week</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/ThisMonth`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, sub, 'ThisMonth')
              setCurrentSort('This Month')
            }}>This Month</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/ThisYear`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, sub, 'ThisYear')
              setCurrentSort('This Year')
            }}>This Year</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${sub}/AllTime`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, sub, 'AllTime')
              setCurrentSort('All Time')
            }}>All Time</div>
          </Link>

        </div> : null}
      </div> : null}
    </div>
  )
}

export default DisplaySortBox
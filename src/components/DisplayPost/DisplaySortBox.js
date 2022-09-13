import { useState } from "react"
import { Link, useParams } from "react-router-dom";


const DisplaySortBox = (props) => {

  const [topStatus, setStatus] = useState(false)
  const [timeFilter, setTimeFilter] = useState(false)
  const [currentSort, setCurrentSort] = useState('Today')
  const { handler } = props
  const params = useParams();

  return (

    <div className="sort-box">
      <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/Hot`}>
        <div className="box-option" onClick={(event) => handler(event, params, 'Hot')}>
          HOT
        </div>
      </Link>

      <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/New`}>
        <div className="box-option" onClick={(event) => handler(event, params, 'New')}>
          NEW
        </div>
      </Link>
      <div className="box-option" onClick={() => setStatus(!topStatus)}>
        TOP
      </div>
      {topStatus ? <div className="box-option sort-combo" onClick={() => setTimeFilter(!timeFilter)}>
        {currentSort}
        {timeFilter ? <div className="combo-item-wrapper">

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisWeek`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, params, 'ThisWeek');
              setCurrentSort('This Week')
            }}>This Week</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisMonth`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, params, 'ThisMonth')
              setCurrentSort('This Month')
            }}>This Month</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/ThisYear`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, params, 'ThisYear')
              setCurrentSort('This Year')
            }}>This Year</div>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#878a8c' }} to={`/r/${params.sub}/AllTime`}>
            <div className="combo-item" onClick={(event) => {
              handler(event, params, 'AllTime')
              setCurrentSort('All Time')
            }}>All Time</div>
          </Link>

        </div> : null}
      </div> : null}
    </div>
  )
}

export default DisplaySortBox
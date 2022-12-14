import { useState } from "react"

const DisplayCommentSort = (props) => {
   const { handler } = props

   const [filterStatus, setFilterStatus] = useState(false)
   const [curentSort, setCurrentSort] = useState('Best')

   return (
      <div className="comment-sort" onClick={() => setFilterStatus(!filterStatus)}>

         <div> Sort By {curentSort} <span className="material-symbols-outlined comment">
            arrow_drop_down
         </span></div>
         {filterStatus ?
            <div className="comment-sort-combo">
               <div className="sort-combo-item" onClick={(event) => {
                  handler(event, 'desc');
                  setCurrentSort('Top')
               }}>
                  Top
               </div>
               <div className="sort-combo-item" onClick={(event) => {
                  handler(event, 'asc');
                  setCurrentSort('New')
               }}>
                  New
               </div>
               <div className="sort-combo-item" onClick={(event) => {
                  handler(event, 'best')
                  setCurrentSort('Best')
               }}>
                  Best
               </div>
            </div>
            : null}
      </div>
   )
}
export default DisplayCommentSort
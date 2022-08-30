import './DisplayHeader.css'
import DisplayHeadIcons from './DisplayHeadIcons'
import DisplayLoginBtns from './DisplayLoginBtns'
import DisplayHomeBar from './DisplayHomebar'

const DisplayHeader = () => {

   return (

      <div className="header">
         <div className="wrapper">
            <div className=' head-item-wrapper logo'>
               reddit
            </div>
            <DisplayHomeBar />
         </div>
         <div className="wrapper">
            <div className="head-item-wrapper">
               <div className='search-wrap'>
                  <label> <span class="material-symbols-outlined">
                     search
                  </span></label>
                  <input placeholder="Search Reddit" type='search' />
               </div>
            </div>
            <DisplayHeadIcons />
         </div>
         <DisplayLoginBtns />
      </div>

   )

}

export default DisplayHeader
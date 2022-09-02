import './DisplayHeader.css'
import DisplayHeadIcons from './DisplayHeadIcons'
import DisplayLoginBtns from './DisplayLoginBtns'
import DisplayHomeBar from './DisplayHomebar'
import { Outlet } from "react-router-dom";


const DisplayHeader = () => {

   return (
      <>
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
                     <label> <span className="material-symbols-outlined">
                        search
                     </span></label>
                     <input placeholder="Search Reddit" type='search' />
                  </div>
               </div>
               <DisplayHeadIcons />
            </div>
            <DisplayLoginBtns />
         </div>
         <Outlet />
      </>

   )

}

export default DisplayHeader
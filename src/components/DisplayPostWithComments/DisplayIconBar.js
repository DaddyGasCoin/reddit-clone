import './Post.css'


const DisplayIconBar = () => {

   return (
      <div className='icon-wrapper'>
         <div className="link-box">
            <span className="material-symbols-outlined">
               chat_bubble
            </span>
            Comments
         </div>
         <div className="link-box">
            <span className="material-symbols-outlined">
               redeem
            </span>
            Award
         </div>
         <div className="link-box">
            <span className="material-symbols-outlined">
               share
            </span>
            Share
         </div>
         <div className="link-box">
            <span className="material-symbols-outlined" >
               bookmark
            </span >
            Save
         </div>
      </div>
   )
}

export default DisplayIconBar
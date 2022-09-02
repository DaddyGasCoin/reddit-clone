
const DisplayCommentLinks = (props) => {

    const { data } = props

    return (

        <div className="comment-votes">
            <div className='up-comment'>
                <span className="material-symbols-outlined medium">
                    arrow_drop_up
                </span>
            </div>
            {data}
            <div className='down-comment'>
                <span className="material-symbols-outlined medium">
                    arrow_drop_down
                </span>
            </div>
            <div className="link-box light">
                Reply
            </div>
            <div className="link-box light">
                Give Award
            </div>
            <div className="link-box light">
                Share
            </div>
            <div className="link-box light">
                Report
            </div>
            <div className="link-box light">
                Save
            </div>
            <div className="link-box light">
                Follow
            </div>
        </div>
    )
}

export default DisplayCommentLinks
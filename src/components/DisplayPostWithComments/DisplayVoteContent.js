import './Post.css'


const DisplayVoteContent = (props) => {
	const { votes } = props
	return (

		<div className="upvotes">
			<div className='up'>
				<span className="material-symbols-outlined big">
					arrow_drop_up
				</span>
			</div>
			{votes}
			<div className='down'>
				<span className="material-symbols-outlined big">
					arrow_drop_down
				</span>
			</div>
		</div>

	)
}

export default DisplayVoteContent
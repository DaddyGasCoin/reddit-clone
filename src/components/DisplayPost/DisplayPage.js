import DisplayPost from './DisplayPost'
import DisplaySortBox from './DisplaySortBox';

const DisplayPage = (props) => {

    const { content } = props

    return (

        <div className='page-wrapper'>
            <DisplaySortBox />
            {content.map((post) => {
                return <DisplayPost posts={post} key={post[Object.keys(post)]} />
            })}
        </div>
    )
}

export default DisplayPage
import DisplayPost from './DisplayPost'
import DisplaySortBox from './DisplaySortBox';
import db from '../../firebase.config'
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const DisplayPage = () => {
    const params = useParams();
    const [posts, setPosts] = useState([])

    //Maps subreddit to firestore document
    const subMap = {
        AskReddit: 'askreddit-hot',
        ExplainLikeImFive: 'explainlikeimfive-hot',
    }
    useEffect(() => {
        let doc;
        subMap[params.sub] ? doc = subMap[params.sub] : doc = 'reddit-front-hot';
        async function getDataFromDB() {
            const querySnapshot = await getDocs(collection(db, doc))
            let posts = []
            querySnapshot.forEach((doc) => {
                const obj = {
                    [doc.id]: doc.data()
                }
                posts = [...posts, obj]
            })
            setPosts(posts)
        }
        getDataFromDB()
    }, [posts])

    return (

        <div className='page-wrapper'>
            <DisplaySortBox />
            {posts.map((post) => {
                return <DisplayPost posts={post} key={Object.keys(post)} />
            })}
        </div>
    )
}

export default DisplayPage
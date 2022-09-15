import { useParams } from "react-router-dom";
import db from '../../firebase.config'
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import DisplayPostBig from "./DisplayPostBig";

const GetComments = (props) => {
   const { sub } = props
   const params = useParams();
   const [data, setData] = useState()
   useEffect(() => {
      const docRef = doc(db, sub, params.Id);
      async function getCommentsFromDB() {
         const docSnap = await getDoc(docRef);
         setData(docSnap.data())
      }
      getCommentsFromDB()
   }, [])

   return (
      <>
         {data ? <DisplayPostBig data={data} sub={sub} /> : null}
      </>
   )
}

export default GetComments

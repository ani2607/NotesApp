import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom"
import { auth, db } from "../config/firebase.js";
import { getDoc,doc } from "firebase/firestore";


const NoteRendering = () => {
  const { id } = useParams();
  // console.log(id);
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');

  useEffect(() => {
      if (auth.currentUser) {
          const notesRef = doc(db, 'notes', id); 
          getDoc(notesRef)
              .then((snapshot) => {
                  if (snapshot.exists()) {
                      const noteData = snapshot.data();
                      setTitle(noteData.title);  
                      setDes(noteData.description);  
                  } else {
                      console.log("No such document!");
                  }
              })
              .catch(error => {
                  console.error("Error fetching notes:", error);
              });
      }
  }, [id]);

   


  return (
    <>
        <div className=" w-[300px] sm:h-[410px] sm:w-[550px]  m-auto mb-20 backdrop-blur-xl   mt-16   flex items-center flex-col text-white">
      
      <input type="text"className="mt-5 outline-none rounded  border border-teal-500/30 w-64  sm:w-96 p-2" placeholder="Title..." value={title} readOnly  />

      <textarea placeholder="Body..."
       cols="30"
       rows="12"
       value={des}
       readOnly
       className="border w-64  sm:w-96 h-auto  mt-5 rounded border-teal-500/30 outline-none p-2"
       ></textarea>

       <div className="btn mt-6  mb-2 flex gap-x-10 ">
        <Link to={`/edit/${id}`}>
        <button className="bg-teal-500 border border-teal-500  text-white text-xl  w-24 h-8 rounded text-center hover:bg-teal-600 hover:border-teal-600">Edit Here</button>
        </Link>

        <Link to={"/"}>
        <button className="border-teal-500 border  rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white h-8 w-20 text-xl">Cancel</button>
        </Link>
       </div>
    </div>
    
    </>
  )
}

export default NoteRendering

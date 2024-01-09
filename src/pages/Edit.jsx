import {useParams,Link,Navigate} from 'react-router-dom'
import { auth, db } from "../config/firebase.js";
import { doc, updateDoc,getDoc } from "firebase/firestore";
import { useState,useEffect} from "react";

const Edit = () => {

  const {id} = useParams(); 
  // write the logic of extracting the note with this **id** and then rendering the data
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [navigate,setNavigate] = useState(false);

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

  const handleUpdate = () => {
    if (auth.currentUser) {
        const notesRef = doc(db, 'notes', id);
        const updatedData = {
            title: title,
            description: des,
           
        };

        updateDoc(notesRef, updatedData)
            .then(() => {
              setNavigate(true);
                // console.log("Document successfully updated!");
                // history.push(`/note/${id}`);  // Redirect to the details page after successful update
            })
            .catch(error => {
                console.error("Error updating document:", error);
            });
    }
};

if(navigate){
  return <Navigate to={'/'} />
}

  return (
    <>
    <h1 className="text-center text-5xl   text-teal-500 mt-10">Edit Note</h1>
    <div className="sm:h-[410px] sm:w-[550px]  m-auto mb-20 backdrop-blur-xl   mt-5   flex items-center flex-col text-white">
      
      <input type="text"className="mt-5 outline-none rounded  border border-teal-500/30 w-64  sm:w-96 p-2" value={title} onChange={(e)=> setTitle(e.target.value)}  placeholder="Title..." />

      <textarea placeholder="Body..."
       cols="30"
       rows="12"
       value={des}
       onChange={(e)=> setDes(e.target.value)}
       className="border w-64  sm:w-96 mt-5 rounded border-teal-500/30 outline-none p-2"
       ></textarea>

       <div className="btn mt-6  mb-2 flex gap-x-10 ">
        <button onClick={handleUpdate} className="bg-teal-500 border border-teal-500  text-white text-xl  w-14 h-8 rounded text-center hover:bg-teal-600 hover:border-teal-600">Edit</button>

        <Link to={"/"}>
        <button className="border-teal-500 border  rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white h-8 w-16 text-xl">Cancel</button>
        </Link>
       </div>
    </div>
    </>
  )
}

export default Edit

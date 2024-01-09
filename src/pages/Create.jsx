import { Link } from "react-router-dom"
import { useState } from "react";
import { auth, db } from "../config/firebase.js";
import { addDoc,collection } from "firebase/firestore";
import {Navigate} from 'react-router-dom'


const Create = () => {

  const [title,setTitle]  = useState('');
  const [des,setDes]  = useState('');
  const  notesCollection = collection(db,'notes');
  const [navigate , setNavigate] = useState(false);

  async function  createNote(e){

    e.preventDefault();
    try{
      await addDoc(notesCollection,{
        title : title,
        description :des,
        userId :auth?.currentUser?.uid
      })

      setNavigate(true);
    }catch(err){
      console.log(err);
    }
  
  }
    if(navigate){
      return <Navigate to={'/'} />
    }

  return (

    <>
    <h1 className="text-center text-5xl   text-teal-500 mt-10">New Note</h1>
    <form className=" w-[300px] h-[400px]    sm:h-[410px] sm:w-[550px]  m-auto mb-20  mt-5   flex items-center flex-col text-white">
      
      <input type="text"className="mt-5 outline-none rounded  border border-teal-500/30 w-64  sm:w-96 p-2" placeholder="Title..." value={title}
      onChange={(e)=> setTitle(e.target.value)} />

      <textarea placeholder="Body..."
       cols="30"
       rows="12"
       value={des}
       onChange={(e)=> setDes(e.target.value)}
       className="border w-64  sm:w-96 mt-5 rounded border-teal-500/30 outline-none p-2"
       ></textarea>

       <div className="btn mt-3 mb-2 flex gap-x-10 ">
        <button className="bg-teal-500 border border-teal-500  text-white text-xl  w-14 h-8 rounded text-center hover:bg-teal-600 hover:border-teal-600" onClick={createNote}>Save</button>

        <Link to={"/"}>
        <button className="border-teal-500 border  rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white h-8 w-16 text-xl">Cancel</button>
        </Link>
       </div>
    </form>
    </>
  )
}

export default Create

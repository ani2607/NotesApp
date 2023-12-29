import { Link,useParams } from "react-router-dom"


const NoteRendering = () => {
    const {id} = useParams()
  return (
    <>
        <div className="h-[410px] w-[550px]  m-auto mb-20 backdrop-blur-xl   mt-5   flex items-center flex-col text-white">
      
      <input type="text"className="mt-5 outline-none rounded  border border-teal-500/30  w-96 p-2" placeholder="Title..." />

      <textarea placeholder="Body..."
       cols="30"
       rows="12"
       className="border w-96 h-auto  mt-5 rounded border-teal-500/30 outline-none p-2"
       ></textarea>

       <div className="btn mt-3 mb-2 flex gap-x-10 ">
        <Link to={`/edit/${id}`}>
        <button className="bg-teal-500 border border-teal-500  text-white text-xl  w-14 h-8 rounded text-center hover:bg-teal-600 hover:border-teal-600">Edit</button>
        </Link>

        <Link to={"/"}>
        <button className="border-teal-500 border  rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white h-8 w-16 text-xl">Cancel</button>
        </Link>
       </div>
    </div>
    
    </>
  )
}

export default NoteRendering

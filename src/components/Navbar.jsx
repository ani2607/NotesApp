import { useState } from "react"
import { Link } from "react-router-dom";


const Navbar = () => {

    const [user,setUser] = useState(false);
  return (
    <div className="mt-2 sticky z-10 mb-3" >
      
      {
        !user && (
            <div className="flex justify-evenly items-center ">
                <div className="logo text-4xl font-semibold text-white">
                    <Link to="/"><h1>Notes</h1></Link>
                </div>
                <div className="credentials text-xl flex gap-x-3">
                    <Link to="/login" className="bg-teal-500 border border-teal-500  text-white p-1 rounded text-center hover:bg-teal-600 hover:border-teal-600">Login</Link>

                    <Link to="/register" className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white">Register</Link>
                </div>
            </div>
        )
      }

{
        user && (
            <div className="flex justify-evenly items-center ">
                <div className="logo text-4xl font-semibold text-white">
                <Link to="/"><h1>Notes</h1></Link>
                </div>
                <div className="credentials text-xl flex gap-x-3">
                    <Link to="/create" className="bg-teal-500 border border-teal-500  text-white p-1 rounded text-center hover:bg-teal-600 hover:border-teal-600">Create</Link>
                    <a href="" className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white">Logout</a>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Navbar

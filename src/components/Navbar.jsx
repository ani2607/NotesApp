
import { Link,Navigate } from "react-router-dom";
import {userDetail} from '../recoil/User.js'
import { useRecoilValue } from "recoil";
import { auth } from "../config/firebase.js";
import { signOut} from "firebase/auth";
import { useState } from "react";


const Navbar = () => {

  
    const User = useRecoilValue(userDetail);
    const [navigate,setNavigate] = useState(false);
    
    
    console.log(User);
    // const logout = async() => {

    //   await signOut(auth);
      
      
    //   signOut(auth).then(()=>{
    //     console.log("successfully signed out")
    //     setNavigate(true);
    //   }).catch((err)=>{
    //       console.log("error at logout : ",err.message);
    //   })
    // };
    const logout = async () => {
      try {
        if (auth) {
          await signOut(auth);
        } else {
          console.error("Auth object is null or undefined");
        }
      } catch (err) {
        console.error(err);
      }
    };

    if(navigate){

      return <Navigate to={'/login'} replace />
    }

  return (
    <div className="mt-2 sticky z-10 mb-3" >
      
      {
        !User && (
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
        User && (
            <div className="flex justify-evenly items-center ">
                <div className="logo text-4xl font-semibold text-white">
                <Link to="/"><h1>Notes</h1></Link>
                </div>
                <div className="credentials text-xl flex gap-x-3">
                    <Link to="/create" className="bg-teal-500 border border-teal-500  text-white p-1 rounded text-center hover:bg-teal-600 hover:border-teal-600">Create</Link>
                    <button onClick={logout}  className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white">Logout</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Navbar


import { Link } from "react-router-dom";
import { auth } from "../config/firebase.js";
import { signOut} from "firebase/auth";
import { useEffect, useState } from "react";


const Navbar = () => {

  
    const [user,setUser] = useState();
    

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

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
                    <button onClick={logout}  className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white">Logout</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Navbar

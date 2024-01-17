import { Link } from "react-router-dom";
import { auth } from "../config/firebase.js";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [user, setUser] = useState();
  const [nav, setNav] = useState(false);

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
  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <nav className="mt-2 sticky top-0 p-2 z-10 mb-3">
      {/* desktop view */}
      {!user && (
        <div className=" hidden sm:flex justify-evenly items-center ">
          <div className="logo text-4xl font-semibold text-white">
            <Link to="/">
              <h1>Notes</h1>
            </Link>
          </div>
          <div className=" credentials text-xl flex gap-x-3">
            <Link
              to="/login"
              className="bg-teal-500 border border-teal-500  text-white p-1 rounded text-center hover:bg-teal-600 hover:border-teal-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      )}

      {/* mobile view */}
      {!user && (
        <nav className=" z-30   m-auto sm:hidden  text-white   ">
          <div className="flex gap-x-10   items-center justify-evenly flex-wrap ">
            <div className="right p-2 ">
              <Link to={"/"}>
                <h1 className="text-2xl  ">Notes</h1>
              </Link>
            </div>
            <div className={nav ? "hidden" : "inline mt-2  "}>
              <button onClick={toggleNav}>
                <RxHamburgerMenu size={25} />
              </button>
            </div>
            <div className={nav ? "inline mt-2" : "hidden"}>
              <button onClick={toggleNav}>
                <IoClose size={25} />
              </button>
            </div>
          </div>
          

          {nav && (
            <div className=" h-14 flex flex-col gap-y-3   items-center text-center   w-full    text-xl ">
           
              <Link onClick={toggleNav} to="/login" className="text-teal-500 " >
                Login
              </Link>
     

              <div className="register">

              <Link onClick={toggleNav} to="/register" className="text-teal-500" >
                Register
              </Link>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* desktop view */}
      {user && (
        <div className=" hidden sm:flex justify-evenly items-center ">
          <div className="logo text-4xl font-semibold text-white">
            <Link to="/">
              <h1>Notes</h1>
            </Link>
          </div>
          <div className=" credentials text-xl flex gap-x-3">
            <Link
              to="/create"
              className="bg-teal-500 border border-teal-500  text-white p-1 rounded text-center hover:bg-teal-600 hover:border-teal-600"
            >
              Create
            </Link>

             <button
                onClick={logout}
                className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white"
              >
                Logout
              </button>
          </div>
        </div>
      )}

      {/* mobile view */}
      {user && (
        <nav className=" z-30   m-auto sm:hidden  text-white   ">
          <div className="flex gap-x-10   items-center justify-evenly flex-wrap ">
            <div className="right p-2 ">
              <Link to={"/"}>
                <h1 className="text-2xl  ">Notes</h1>
              </Link>
            </div>
            <div className={nav ? "hidden" : "inline mt-2  "}>
              <button onClick={toggleNav}>
                <RxHamburgerMenu size={25} />
              </button>
            </div>
            <div className={nav ? "inline mt-2" : "hidden"}>
              <button onClick={toggleNav}>
                <IoClose size={25} />
              </button>
            </div>
          </div>
          

          {nav && (
            <div className="   h-14 flex flex-col gap-y-3   items-center text-center   w-full  text-xl ">
           
              <Link onClick={toggleNav} to="/create" className="text-teal-500 " >
                Create
              </Link>
              <Link onClick={logout} to={"/login"}>
              <button
                onClick={toggleNav}
                
                className="border-teal-500 border p-1 rounded hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white"
              >
                Logout
              </button>
              </Link>
     

              
            </div>
          )}
        </nav>
      )}









    
    </nav>
  );
};

export default Navbar;

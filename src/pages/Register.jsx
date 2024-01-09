import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { auth,googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";



const Register = () => {

  const [typeOfPassword, setTypeOfPassword] = useState("password");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [navigate,setNavigate] = useState(false);
  const [user,setUser] = useState(null);


  

  const registerInNotesApp = async(e)=>{
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      // console.log(res);
      // console.log(auth.currentUser.email)
      
      if(res.user.uid !== undefined){
        
        setNavigate(true);
        setUser(auth.currentUser);
      }
      else{
        alert("please enter correct email and password")
      }
      setNavigate(true);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      alert("please enter correct email and Password")
    }

    
  }

  const changeInputTypeOfPassword = (e) => {
    e.preventDefault();
    if (typeOfPassword === "password") {
      setTypeOfPassword("text");
    } else {
      setTypeOfPassword("password");
    }
  };

  async function signInWithGoogle(e){

    e.preventDefault();

    try {
        const res = await signInWithPopup(auth,googleProvider);
        console.log(res);
        setUser(res);

        if(res.user.uid !== undefined){

          setNavigate(true);
        }
        else{
          alert("please enter correct email and password")
        }
        setNavigate(true);
        setEmail('');
        setPassword('');

    } catch (error) {
      console.log('error while signin : ',error)
    }



  }

  if(navigate){
    return <Navigate to={'/'}/>
  }

 

  return (
    <form className=" w-[350px] h-[450px] sm:h-[500px] sm:w-[550px]  m-auto mb-10  backdrop-blur-xl   mt-10  border rounded-2xl border-teal-500/50 flex flex-col   text-white ">
    <h1 className="text-4xl mt-5 text-center">Sign Up</h1>

    <div className="input ml-6  sm:ml-24 flex flex-col gap-y-10  mt-16   ">
      <input
        type="email"
        placeholder="Email..."
        className="border border-b-white border-t-0 border-r-0 border-l-0  p-2 w-[300px]  sm:w-[350px]  outline-none "
        required 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <div className="password flex items-center border border-b-white border-t-0 border-r-0 border-l-0  p-2 w-[300px] sm:w-[350px]  outline-none justify-between ">
        <input
          type={typeOfPassword}
          placeholder="Password..."
          className=" outline-none sm:w-[330px] "
          value={password}
          required
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button className="ml-5" onClick={changeInputTypeOfPassword}>
          <BiShow />
        </button>
      </div>
      <button onClick={registerInNotesApp} className="text-center hover:bg-teal-700  mr-16 bg-teal-600 w-[300px]  sm:w-[350px] p-2 rounded-2xl font-serif ">
        SIGN UP
      </button>
    </div>

    <h1 className="text-xl mt-5 text-center">OR</h1>

    <div className="signwithgoogle mt-5 text-center ml-6  sm:ml-14">
      <button onClick={signInWithGoogle} className="text-center   mr-16 border-teal-500 border w-[300px]  sm:w-[350px] p-2 rounded-2xl font-serif hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white ">SignUp With Google</button>
    </div>
  </form>
  )
}

export default Register

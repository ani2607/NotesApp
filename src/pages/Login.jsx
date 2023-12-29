import { useState } from "react";
import { BiShow } from "react-icons/bi";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../config/firebase";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [typeOfPassword, setTypeOfPassword] = useState("password");
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [navigate,setNavigate] = useState(false)

  const changeInputTypeOfPassword = () => {
    if (typeOfPassword === "password") {
      setTypeOfPassword("text");
    } else {
      setTypeOfPassword("password");
    }
  };

  const signIn = async(e)=>{
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth,email,password);
      // console.log(user);
      // console.log(auth.currentUser.email)
      if(user.uid !== undefined){
        setNavigate(true);
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
  

  if(navigate){
    return  <Navigate to={'/'}/>
  }

  return (
    <form className="h-[500px] w-[550px]  m-auto mb-10  backdrop-blur-xl   mt-10  border rounded-2xl border-teal-500/50 flex flex-col   text-white ">
      <h1 className="text-4xl mt-5 text-center">Welcome Back!</h1>

      <div className="input ml-24 flex flex-col gap-y-10  mt-16   ">
        <input
          type="email"
          placeholder="Email..."
          className="border border-b-white border-t-0 border-r-0 border-l-0  p-2 w-[350px]  outline-none "
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />

        <div className="password flex items-center border border-b-white border-t-0 border-r-0 border-l-0  p-2 w-[350px]  outline-none justify-between ">
          <input
            type={typeOfPassword}
            placeholder="Password..."
            className=" outline-none w-[330px] "
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <button className="ml-5" onClick={changeInputTypeOfPassword}>
            <BiShow />
          </button>
        </div>
        <button onClick={signIn}  className="text-center hover:bg-teal-700  mr-16 bg-teal-600 w-[350px] p-2 rounded-2xl font-serif ">
          LOGIN
        </button>
      </div>

      <h1 className="text-xl mt-5 text-center">OR</h1>

      <div className="signwithgoogle mt-5 text-center ml-14">
        <button className="text-center   mr-16 border-teal-500 border  w-[350px] p-2 rounded-2xl font-serif hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white ">SignIn With Google</button>
      </div>
    </form>
  );
};

export default Login;

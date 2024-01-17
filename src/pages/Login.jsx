import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [typeOfPassword, setTypeOfPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [navigate, setNavigate] = useState(false);

  const changeInputTypeOfPassword = (e) => {
    e.preventDefault();
    if (typeOfPassword === "password") {
      setTypeOfPassword("text");
    } else {
      setTypeOfPassword("password");
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, pin);
      // console.log(res);
      // console.log(auth.currentUser.email)

      if (res.user.uid !== undefined) {
        setNavigate(true);
      } else {
        alert("please enter correct email and password");
      }
      setEmail("");
      setPin("");
    } catch (error) {
      console.log(error);
      alert("please enter correct email and Password");
    }
  };

  async function signInWithGoogle(e) {
    e.preventDefault();

    try {
      const res = await signInWithPopup(auth, googleProvider);

      if (res.user.uid !== undefined) {
        setNavigate(true);
      } else {
        alert("please enter correct email and password");
      }
      setEmail("");
      setPin("");
    } catch (error) {
      console.log("Error while login : ", error);
    }
  }

  if (navigate) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
    {/* desktop view and added mobile view using tailwind css  */}
      <form className=" w-[350px] h-[450px]  sm:h-[500px] sm:w-[550px]  m-auto  backdrop-blur-xl mt-10  border rounded-2xl border-teal-500/50 flex flex-col text-white ">
        <h1 className="text-4xl mt-5 text-center">Welcome Back!</h1>

        <div className="input ml-6 sm:ml-24 flex flex-col gap-y-10  mt-16   ">
          <input
            type="email"
            placeholder="Email..."
            className="border border-b-white border-t-0 border-r-0 border-l-0  sm:p-2 p-1
            w-[300px] sm:w-[350px]  outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password flex items-center border border-b-white border-t-0 border-r-0 border-l-0  p-2 w-[300px]  sm:w-[350px]   outline-none justify-between ">
            <input
              type={typeOfPassword}
              placeholder="Password..."
              className=" outline-none    sm:w-[330px] "
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            <button className="ml-5" onClick={changeInputTypeOfPassword}>
              <BiShow />
            </button>
          </div>
          <button
            onClick={signIn}
            className="text-center hover:bg-teal-700 sm:mr-16 bg-teal-600 w-[300px] sm:w-[350px] p-2 rounded-2xl font-serif "
          >
            LOGIN
          </button>
        </div>

        <h1 className="text-xl mt-5 text-center">OR</h1>

        <div className="signwithgoogle mt-5 text-center ml-6 sm:ml-14">
          <button
            onClick={signInWithGoogle}
            className="text-center   mr-16 border-teal-500 border w-[300px]  sm:w-[350px] p-2 rounded-2xl font-serif hover:bg-teal-700 hover:border-teal-700 text-teal-500 hover:text-white "
          >
            SignIn With Google
          </button>
        </div>
      </form>

    
    </>
  );
};

export default Login;

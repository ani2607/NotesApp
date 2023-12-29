import { Link } from "react-router-dom";
import { FaGithub,FaXTwitter,FaLinkedin,FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="text-white flex justify-evenly mt-3 ">
      <div className="left text-xl">
        <h1>Copyright &copy; <span className="text-teal-500">Aniket Sharma </span>2024</h1>
      </div>
      <div className="right flex gap-x-2 justify-center items-center ">
        <div className="github">
      <Link  target="_blank" to="https://github.com/ani2607"><FaGithub size={28} /> </Link>
        </div>
        <div className="twitter">
      <Link  target="_blank" to="https://twitter.com/_aniket22_"><FaXTwitter size={28} /> </Link>
        </div>
        <div className="linkedIN">
      <Link  target="_blank" to="https://www.linkedin.com/in/aniket-sharma-4638a5243/"><FaLinkedin size={28} /> </Link>
        </div>
        <div className="instagram">
      <Link  target="_blank" to="https://www.instagram.com/_aniket22_/"><FaInstagram size={28} /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

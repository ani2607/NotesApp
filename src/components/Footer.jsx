import { Link } from "react-router-dom";
import { FaGithub,FaXTwitter,FaLinkedin,FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
    <footer className="text-white hidden sm:fixed sm:inset-x-0 sm:bottom-5  sm:flex sm:justify-evenly  sm:mt-80 ">
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
    </footer>

    {/* mobile view */}
    <footer className="footer text-white text-center inset-x-0  sm:hidden fixed bottom-0 ">
    <div className="left text-xl text-center">
        <h1>Copyright &copy; <span className="text-teal-500">Aniket Sharma </span>2024</h1>
      </div>

      <div className="right flex gap-x-2 justify-center items-center mt-2 ">
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

    </footer>
    </>
  )
}

export default Footer

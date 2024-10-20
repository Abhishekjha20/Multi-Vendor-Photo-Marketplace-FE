import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 fixed left-0 right-0 top-0 shadow-md gap-1 sm:gap-0 z-30 bg-white">
        {/* Logo and Site name */}
        <div className="flex justify-betweenn items-center">
          {/* I will add the image later */}
          <Link to="/" className="font bold text-3xl ">PicPrism</Link>
        </div>
         {/*List of other tabs */}
         <ul className="flex gap-5 text-lg font-semibold text-gray-500">  
          <Link to="/" className = "hover:text-black cursor-pointer sm:p-2">About</Link>
          <Link to="/" className = "hover:text-black cursor-pointer sm:p-2">Contact</Link>
          <Link to="/login" className = "hover:text-black cursor-pointer sm:p-2">Login</Link>
          <Link to="/signup" className = "hover:text-black cursor-pointer sm:p-2">Signup</Link>

         </ul>
    </nav>
  )
}

export default Navbar
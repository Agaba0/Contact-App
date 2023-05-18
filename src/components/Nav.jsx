import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdRecentActors } from 'react-icons/md';
import { BsFillSaveFill } from 'react-icons/bs';


const Navbar = () => {
  return (
    <nav className="flex m-2 space-x-3 justify-center text-lg">
      <NavLink
        className="text-white border border-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        to="/"
      >
        <AiFillHome />
      </NavLink>
      <NavLink
        className="text-white border border-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        to="/recent"
      >
        <MdRecentActors/>
      </NavLink>
      {/* <NavLink to='/contact'>CONTACT</NavLink> */}
      <NavLink
        className="text-white border border-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        to="/save"
      >
        <BsFillSaveFill/>
      </NavLink>
      {/* <NavLink to='/myCenter'>MY CENTER</NavLink> */}
    </nav>
  );
};

export default Navbar;

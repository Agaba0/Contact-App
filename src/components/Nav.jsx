import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex space-x-3 justify-center text-lg">
      <NavLink
        className="bg-gray-300 hover:bg-gray-400 rounded p-1 hover:uppercase"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="bg-gray-300 hover:bg-gray-400 rounded p-1 hover:uppercase"
        to="/recent"
      >
        Recent
      </NavLink>
      {/* <NavLink to='/contact'>CONTACT</NavLink> */}
      <NavLink
        className="bg-gray-300 hover:bg-gray-400 rounded p-1 hover:uppercase"
        to="/save"
      >
        Save
      </NavLink>
      {/* <NavLink to='/myCenter'>MY CENTER</NavLink> */}
    </nav>
  );
};

export default Navbar;

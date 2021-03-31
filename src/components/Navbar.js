import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="mid-li">
        <Link to="/app">Claculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;

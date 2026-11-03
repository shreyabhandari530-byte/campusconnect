
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CampusConnect</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

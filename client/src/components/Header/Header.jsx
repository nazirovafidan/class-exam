import { Link } from "react-router-dom";
import './header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">Eatwell</div>
        <div className="navs">
          <nav>
              <Link to={"./"} className="home">Home</Link>
              <Link to={"./add"}>Add</Link>
              <Link to={"./basket"}>Basket</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

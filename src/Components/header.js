import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img src="../../download.jpeg" alt="no image" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
        <li>
          <Link to="events"> events</Link>
        </li>
        <li>
          <Link to="counter"> counter</Link>
        </li>
        <li>
          <Link to="form"> form</Link>
        </li>
        <li>
          <Link to="sent"> sent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

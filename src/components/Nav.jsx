import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Product</Link>
    </>
  );
};

export default Nav;

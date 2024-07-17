import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = {
  _id: "1",
  role: "admin",
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoutHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="header">
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};
export default Header;

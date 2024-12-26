import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navigation = ({}) => {

  const { amount } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header-container">
        <h1>
          coffee<br/>
          <span className="text-[12px]">blend</span>
        </h1>
        <div className="nav-menu">
          <NavLink to="/" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Menu</NavLink>
          <NavLink to="/order-history" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Order History</NavLink>
          <NavLink to="/cart" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
            <div className="item-count">{amount}</div>
            <FaCartShopping className="icon-cart" />
          </NavLink>
        </div>
      </div> 
    </header>
  )

}

export default Navigation;
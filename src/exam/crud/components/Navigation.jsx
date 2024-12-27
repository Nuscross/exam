import { NavLink } from "react-router-dom";

const Navigation = ({}) => {

  return (
    <header className="header">
      <div className="header-container">
        <h1>BOOKS DATA</h1>
        <div className="nav-menu">
          <NavLink to="/" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Books List</NavLink>
          <NavLink to="/add-product" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Add Book</NavLink>
        </div>
      </div> 
    </header>
  )

}

export default Navigation;
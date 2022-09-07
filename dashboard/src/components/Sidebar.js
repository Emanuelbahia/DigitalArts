import { Link } from "react-router-dom";
//import { useRef } from "react";

function Sidebar() {
  /*  const link = useRef();
  const changeColor = () => {
    link.current.style.color = "grey";
  }; */

  return (
    <div className="sidebar">
      <Link to="/" className="no-decoration">
        <div className="sidebar-dashboard">
          <p className="p-hover">
            Dashboard <br></br> DigitalArts
          </p>
        </div>
        <hr className="line-hr" />
      </Link>
      <div className="order-buttons">
        <Link to="/LinkUsers" className="sidebar-buttons">
          <button /* ref={changeColor} */ className="link-buttons">
            Listado usuarios
          </button>
        </Link>
        <Link to="/LinkCategories" className="sidebar-buttons">
          <button className="link-buttons">Listado categorias</button>
        </Link>
        <Link to="/LinkProducts" className="sidebar-buttons">
          <button className="link-buttons">Listado productos</button>
        </Link>
        <Link to="/LinkLastProducts" className="sidebar-buttons">
          <button className="link-buttons">Ultimo producto creado</button>
        </Link>
        <Link to="/LinkLastUser" className="sidebar-buttons">
          <button className="link-buttons">Ultimo usuario registrado</button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

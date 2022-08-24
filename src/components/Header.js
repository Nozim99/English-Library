import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { handleDarkMode } from "../redux/class";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const darkMode = useSelector(store => store.className.darkMode)

  return (
    darkMode ?
    <nav className="nav_dark d-flex justify-content-between px-4 align-items-center">
      <h1 onClick={()=>navigate('')} className="nav_h1 d-inline-block cursor-pointer">English Library</h1>
      <div className="nav__btns d-inline-block d-flex align-items-center">
      <button onClick={()=>dispatch(handleDarkMode(false))} className="btn mode__btn_dark d-flex align-items-center text-white">Light Mode <i className="fa-solid fa-sun ms-2 moon_icon text-yellow"></i></button>
      </div>
    </nav>
    :
    <nav className="nav d-flex justify-content-between px-4 align-items-center">
      <h1 onClick={()=>navigate('')} className="nav_h1 d-inline-block cursor-pointer">English Library</h1>
      <div className="nav__btns d-inline-block d-flex align-items-center">
        <button onClick={()=>dispatch(handleDarkMode(true))} className="btn mode__btn d-flex align-items-center">Dark Mode <i className="fa-solid fa-moon ms-2 moon_icon"></i></button>
      </div>
    </nav>
  );
};

export default Header;
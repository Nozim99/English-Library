import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { handleDarkMode } from "../redux/class";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const interval = useRef()
  const darkMode = useSelector(store => store.className.darkMode)
  const [h1, setH1] = useState("English Library")
  const [h1Toggle, setH1Toggle] = useState(true)
  const time = 80
  useEffect(() => {
    setTimeout(() => {
      clearInterval(interval.current)
      interval.current = setInterval(() => {
        setH1(prev => prev.slice(0, prev.length - 1))
      }, time);
    }, 2000);
  }, [])



  useEffect(() => {
    if (!h1.length) {
      if (h1Toggle) {
        setH1Toggle(!h1Toggle)
        clearInterval(interval.current)
        const text = "Ingliz Tili Kutubxonasi"
        let x = -1;
        interval.current = setInterval(() => {
          x++
          setH1(prev => prev + text[x])
          if (x > text.length - 2) {
            clearInterval(interval.current)
            setTimeout(() => {
              interval.current = setInterval(() => {
                setH1(prev => prev.slice(0, prev.length - 1))
              }, time);
            }, 1500);
          }
        }, time);
      } else {
        setH1Toggle(!h1Toggle)
        clearInterval(interval.current)
        const text1 = "English Library"
        let x = -1;
        interval.current = setInterval(() => {
          x++
          setH1(prev => prev + text1[x])
          if (x > text1.length - 2) {
            clearInterval(interval.current)
            setTimeout(() => {
              interval.current = setInterval(() => {
                setH1(prev => prev.slice(0, prev.length - 1))
              }, time);
            }, 1500);
          }
        }, time);
      }
    }
  }, [h1])

  return (
    darkMode ?
      <nav className="nav_dark d-flex justify-content-between align-items-center">
        <h1 onClick={() => navigate('')} className="nav_h1 d-inline-block cursor-pointer">{h1}</h1>
        <div className="nav__btns d-inline-block d-flex align-items-center">
          <button onClick={() => dispatch(handleDarkMode(false))} className="btn mode__btn_dark d-flex align-items-center text-white"><div className="me-2"><span className="d-block text-start">Light</span><span className="d-block text-start">Mode</span></div> <i className="fa-solid fa-sun ms-2 moon_icon text-yellow"></i></button>
        </div>
      </nav>
      :
      <nav className="nav d-flex justify-content-between align-items-center">
        <h1 onClick={() => navigate('')} className="nav_h1 d-inline-block cursor-pointer">{h1}</h1>
        <div className="nav__btns d-inline-block d-flex align-items-center">
          <button onClick={() => dispatch(handleDarkMode(true))} className="btn mode__btn d-flex align-items-center"><div className="me-2"><span className="d-block text-start">Dark</span><span className="d-block text-start">Mode</span></div> <i className="fa-solid fa-moon ms-2 moon_icon"></i></button>
        </div>
      </nav>
  );
};

export default Header;
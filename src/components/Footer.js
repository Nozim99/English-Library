import { useDispatch, useSelector } from "react-redux/es/exports";

const Footer = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(store => store.className.darkMode)
  return (
    darkMode ?
      <footer className='footer_dark d-flex justify-content-around align-items-center'>
        <div>23.08.2022</div>
        <div>
          {new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.{new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.{new Date().getFullYear()}
        </div>
      </footer>
      : <footer className='footer d-flex justify-content-around align-items-center'>
        <div>23.08.2022</div>
        <div>
          {new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.{new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.{new Date().getFullYear()}
        </div>
      </footer>
  );
};

export default Footer;
import { useSelector } from "react-redux/es/exports";

const Footer = () => {
  const darkMode = useSelector(store => store.className.darkMode)
  return (
      <footer className={darkMode ? 'footer_dark d-flex justify-content-around align-items-center' : 'footer d-flex justify-content-around align-items-center'}>
        <div>28.08.2022</div>
        <div>
          {new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}.{new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.{new Date().getFullYear()}
        </div>
      </footer>
  );
};

export default Footer;
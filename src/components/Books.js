import { useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import {data} from '../redux/data'
import Book from './Book';

const Books = () => {
  const navigate = useNavigate()
  const darkMode = useSelector(store=>store.className.darkMode)
  const bookClas = "card Book__card mx-2 my-3 cursor-pointer"
  const bookClasDark = "card Book__card_dark mx-2 my-3 cursor-pointer"
  // darkMode ? setBookClas("card Book__card_dark mx-2 my-3") : setBookClas("card Book__card mx-2 my-3")

  return (
    <div className="container min-height pt-5">
      <div className='Books row m-auto mb-5 d-flex justify-content-center'>
      {data.map(({id, image, title, year, degre})=>(
        // <Book key={item.id} {...item} />
        <div key={id} onClick={()=>navigate(`${id}`)} className={darkMode ? bookClasDark : bookClas}>
        <div className="Book__card__img__box position-relative">
          <img src={image} className="Book__card__img card-img-top position-absolute top-50 start-50 translate-middle" alt="..." />
        </div>
        <div className="card-body position-relative">
          <p className="card-text h6">{(title + '').length > 32 ? title.slice(0, 32)+'...' : title}</p>
          <div className="card__end position-absolute bottom-0 start-50 translate-middle-x mb-1 w-100">
            <span className="year float-start">{year}</span>
            <span className="degre float-end">{degre}</span>
          </div>
        </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Books;
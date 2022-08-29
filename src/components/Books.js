import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { data } from '../redux/data'
import Book from './Book';
import axios from "axios"
import { KEY, bookURL } from "../api";
import { inputF, changePagination, pagination0, selfLinkF } from "../redux/class";
import Categories from "./Categories";

const Books = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { darkMode, input, pagination, bought } = useSelector(store => store.className)
  const bookClas = "card Book__card mx-2 my-3 cursor-pointer"
  const bookClasDark = "card Book__card_dark mx-2 my-3 cursor-pointer"
  const searchRef = useRef()
  const [books, setBooks] = useState([])
  // const [pagination, setPagination] = useState(0)

  const handleClick = () => {
    searchRef.current.focus()
  }

  useEffect(() => { //&startIndex=${pagination}
    axios.get(`${bookURL}?q=${input === '' ? "Search" : input}&printType=books&key=${KEY}&filter=ebooks&startIndex=${pagination * 10}`)
      .then(data => { setBooks(data.data.items); dispatch(pagination0()) })
      .catch(err => console.log(err))
  }, [input])

  useEffect(() => {
    axios.get(`${bookURL}?q=${input === '' ? "Search" : input}&printType=books&key=${KEY}&filter=ebooks&startIndex=${pagination * 10}`)
      .then(data => {
        setBooks(data.data.items)
        if (!data.data.items) {
          // nechta element borligi noaniq bo'lgani uchun
          // shu usuldan foydalandim
          dispatch(changePagination(-1))
        }
      })
      .catch(err => console.log('second ERR', err))
  }, [pagination])

  // onChange={(e) => dispatch(inputF(e.target.value))}
  // onClick={handleClick}
  return (
    <div className="container min-height pt-5">
      <div className="mb-4 input-mobile">
        <input onChange={(e) => dispatch(inputF(e.target.value))} defaultValue={input} className={darkMode ? "Book_search_input" : "Book_search_input Book_search_input_light"} ref={searchRef} type="text" placeholder="Search" />
        <i onClick={handleClick} className="search_icon fa-solid fa-magnifying-glass cursor-pointer"></i>
      </div>

      <div>
      <div className='Books row m-auto mb-5 d-flex justify-content-center'>
        {books ? books.length ? books.map((item) => {
          // const bookId = `https://books.google.com/ebooks?id=${item.id}=holmes&as_brr=4&source=webstore_bookcard`
          return (
            <div onClick={() => { dispatch(selfLinkF(item.selfLinkF)); navigate(item.id) }} key={item.id} className={darkMode ? bookClasDark : bookClas}>
              <div className="Book__card__img__box position-relative">
                <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "http://www.dcac.gr/wp-content/plugins/lightbox/images/No-image-found.jpg"} className="Book__card__img card-img-top position-absolute top-50 start-50 translate-middle" alt="..." />
              </div>
              <div className="card-body position-relative">
                <p className="card-text h6">{(item.volumeInfo.title + '').length > 32 ? (item.volumeInfo.title + '').slice(0, 32) + '...' : item.volumeInfo.title}</p>
                <div className="card__end position-absolute bottom-0 start-50 translate-middle-x mb-1 w-100 d-flex justify-content-between align-items-center">
                  <span className="year">{(item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate.slice(0, 4) : "N/F")}</span>
                  <span className={darkMode ? "amount degre" : "amount_light degre"}>{item.saleInfo.isEbook ? (item.saleInfo.saleability === "FOR_SALE" ? (item.saleInfo.retailPrice.amount === 0 ? 'free' : (item.saleInfo.retailPrice.amount + ' ' + item.saleInfo.retailPrice.currencyCode)) : 'free') : 'free'}</span>
                </div>
              </div>
              {bought.includes(item.id) ? <div className={darkMode ? "position-absolute amount_bought Books_status" : "position-absolute amount_bought__light Books_status"}>active</div> : ''}
              
            </div>
          )
        }) :
          <h1>Loading</h1> : ''
        }
      </div>
      <div aria-label="Page navigation example">
        <div className="d-inline-block pb-5">
          <button onClick={() => dispatch(changePagination(-1))} className={darkMode ? "paggination" : "pagination__light"}><i className="fa-solid fa-angle-left"></i></button>
          <button onClick={() => dispatch(changePagination(1))} className={darkMode ? "paggination ms-4" : "pagination__light ms-4"}><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Books;
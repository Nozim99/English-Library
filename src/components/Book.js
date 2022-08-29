import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import { data } from "../redux/data";
import uuid from "react-uuid";
import { useEffect, useMemo, useState } from "react";
import { bookURL } from "../api";
import { addBought } from "../redux/class";
import telegram from "../images/Telegram_logo.svg.webp"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.webp"

const Book = () => {
    const dispatch = useDispatch();
    const { darkMode, bought } = useSelector((store) => store.className);
    const { idItem } = useParams();
    const [book, setBook] = useState("");
    const num = Math.ceil((Math.random() * 30) + 1)
    const boughtDOM = document.querySelector(".bought")
        ? document.querySelector(".bought").textContent === "free"
        : "";
    useEffect(() => {
        axios
            .get(bookURL + idItem)
            .then((data) => setBook(data.data))
            .catch((err) => console.error(err));
    }, []);
    return book ? (
        <div className="Book min-height py-5 container m-auto row">
            <div className="row col-12 col-lg-8">
                <div className="Book_image col-12 col-md-4 m-auto">
                    <img
                        className="img-fluid wh100"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                    />
                </div>
                <div className="col-12 col-md-6 mt-md-4 ">
                    <h3>{book.volumeInfo.title}</h3>
                    <p className="authors mb-4">{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : 'N/F'}</p>
                    <p className="text-start p-date">
                        <span className="me-2">Published Date:</span>{" "}
                        {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'N/F'}
                    </p>
                    <div className="d-flex align-items-center">
                        <span className="me-3">Share</span>
                        <div className="share-icon__box d-inline-block position-relative"><img className="share-icon position-absolute position-absolute top-50 start-50 translate-middle" src={telegram} alt="telegram" /></div>
                        <div className="share-icon__box d-inline-block position-relative"><img className="share-icon position-absolute position-absolute top-50 start-50 translate-middle" src={facebook} alt="facebook" /></div>
                        <div className="share-icon__box d-inline-block position-relative"><img className="share-icon position-absolute position-absolute top-50 start-50 translate-middle" src={instagram} alt="instagram" /></div>
                    </div>

                </div>
            </div>
            <div className="col-12 mt-md-4 col-lg-4 mt-lg-1">
                <div className="cost-box mt-4">
                    <h2 className="bought mb-5">
                        {book.saleInfo.isEbook
                            ? book.saleInfo.retailPrice
                                ? book.saleInfo.retailPrice.amount !== 0
                                    ? '$USD ' + book.saleInfo.retailPrice.amount
                                    : "free"
                                : "free"
                            : "free"}
                    </h2>
                    {/* <p className="mb-4">Only {num} left in stock</p> */}
                    {boughtDOM ? (
                        <a href={book.accessInfo.pdf.isAvailable ? book.accessInfo.pdf.downloadLink : (book.accessInfo.epub.isAvailable ? book.accessInfo.epub.downloadLink : book.volumeInfo.previewLink)}>
                            <button
                                className={
                                    darkMode
                                        ? "Book__buy__btn"
                                        : "Book__buy__btn__ligth btn btn-primary"
                                }
                            >
                                Open
                            </button>
                        </a>
                    ) : bought.includes(book.id) ? (
                        <a target={"{_blank}"} href={book.accessInfo.pdf.downloadLink ? book.accessInfo.pdf.downloadLink : (book.accessInfo.epub.downloadLink ? book.accessInfo.epub.downloadLink : book.volumeInfo.previewLink)}>
                            <button
                                className={
                                    darkMode
                                        ? "Book__buy__btn"
                                        : "Book__buy__btn__ligth btn btn-primary"
                                }
                            >
                                Open
                            </button>
                        </a>
                    ) : (
                        <button
                            onClick={() => {
                                dispatch(addBought(book.id));
                            }}
                            className={
                                darkMode
                                    ? "Book__buy__btn"
                                    : "Book__buy__btn__ligth btn btn-primary"
                            }
                        >
                            Buy
                        </button>
                    )}
                    <p className="cost-bottom">Not ordering to Argentina? Click <span className="underline cursor-pointer">here</span></p>
                </div>
            </div>
            <div className="pt-5 text-start">
                <h4 className="ms-4">Description</h4>
                <p>
                    {" "}
                    {book.volumeInfo.description
                        ? book.volumeInfo.description
                        : "Description is empty"}
                </p>
            </div>
        </div>
    ) : (
        ""
    );
};

export default Book;

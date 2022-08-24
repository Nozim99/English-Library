import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { data } from "../redux/data";

const Book = () => {
  const darkMode = useSelector(store => store.className.darkMode)
  const navigate = useNavigate();
  const { idItem } = useParams();
  const bookData = data.filter((e) => e.id === +idItem)[0];
  const { degre, image, title, year, text, bookUrl, audioUrl, id } = bookData;

  return (
    <div className="Book min-height pt-5">
      <h1 className="">{title}</h1>
      <div className="">
        <a
          className="Book__bookUrl"
          target={"_blank"}
          rel="noreferrer"
          href={bookUrl}
        >
          <button className={darkMode ? "btn downoad_btn text-white" : "btn"}>
            Download book <i className="fa-solid fa-book ms-1 brown"></i>
          </button>
        </a>

        <a
          className="Book__audioUrl ms-4"
          href={audioUrl}
          target={"_blank"}
          rel="noreferrer"
        >
          <button className={darkMode ? "btn downoad_btn text-white" : "btn"}>
            Download audio{" "}
            <i className="fa-solid fa-circle-play ms-1 text-primary"></i>
          </button>
        </a>
      </div>

      {text ?
        text.length
          ? text.map((item) => (
            <div key={'textId: ' + item.idEl}>
              <div className={darkMode ? "Book__text_dark m-4 px-4 py-2 pt-3" : "Book__text m-4 px-4 py-2 pt-3"}>
                <h4>{item.titleEn}</h4>
                <p className="text-start">{item.en}</p>
                <h4>{item.titleUz}</h4>
                <p className="text-start">
                  <i>{item.uz}</i>
                </p>
                <div className="mb-2 mt-4 text-start">
                {item.dictionary ? item.dictionary.map((e, index) => (
                  <div key={'key-' + index} className="mx-4 d-inline-block">{e}</div>
                )) : ''}
              </div>
              </div>
              
            </div>
          ))
          : "" : ''}
    </div>
  );
};

export default Book;

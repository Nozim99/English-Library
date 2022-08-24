import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './components/Test';
import Books from './components/Books';
import Book from './components/Book';
import { useEffect, useState } from 'react';


function App() {
  const darkMode = useSelector(store=>store.className.darkMode)
  const [classN, setClassN] = useState("App dark_mode")
  useEffect(()=>{
    darkMode ? setClassN("App dark_mode") : setClassN("App")
  }, [darkMode])
  return (
    <div className={classN}>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Books />} />
          <Route path='test' element={<Test />} />
          <Route path='/:idItem' element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

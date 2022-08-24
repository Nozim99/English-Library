import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Books from './components/Books';
import Book from './components/Book';


function App() {
  const darkMode = useSelector(store=>store.className.darkMode)
  return (
    <div className={darkMode ? "App dark_mode" : "App"}>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Books />} />
          <Route path='/:idItem' element={<Book />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

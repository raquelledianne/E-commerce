import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Books from './pages/books.jsx'
import { books } from './data'
import BookInfo from './pages/bookInfo.jsx'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/books" exact element={<Books books={books} /> } />
     <Route path="/books/:id" exact element={<BookInfo books={books} /> }  />
     </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

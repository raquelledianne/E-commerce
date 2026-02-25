import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Books from './pages/books.jsx'
import { books } from './data'
import BookInfo from './pages/bookInfo.jsx'
import Cart from './pages/Cart.jsx'
import React, {useEffect, useState} from 'react'


function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book])

  }

    useEffect(() => {
    console.log(cart)
    }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/books" exact element={<Books books={books} /> } />
     <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart} /> }  />
     <Route path="/cart" exact element={<Cart books={books} /> }  />
     </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

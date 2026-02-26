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
    setCart([...cart, {...book, quantity: 1}])

  }

  function changeQuantity(book, quantity) {
        setCart(cart.map(item => item.id === book.id
            ? {
              ...item,
              quantity: +quantity,
            }
            : item
           )
          )
  }

  function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0
    cart.forEach(item => {
      counter += item.quantity
    })

    return counter

  }

    useEffect(() => {
    console.log(cart)
    }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/books" exact element={<Books books={books} /> } />
     <Route path="/books/:id" exact element={<BookInfo books={books} addToCart={addToCart} changeQuantity = {changeQuantity} removeItem = {removeItem} cart={cart} /> }  />
     <Route path="/cart" exact element={<Cart books={books} cart={cart} changeQuantity={changeQuantity}
      removeItem={removeItem}/> }  />
     </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home.jsx'
import Books from './pages/books.jsx'
import { books } from './data'
import BookInfo from './pages/bookInfo.jsx'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact render={() => <Books books={books} /> } />
     <Route path="/books/:id" exact render={() => <BookInfo books={books} /> } />
      <Footer />
    </div>
    </Router>
  );
}

export default App;

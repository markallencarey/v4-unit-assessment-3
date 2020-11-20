import { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Shelf from './Components/Shelf'
import BookList from './Components/BookList'
import SearchBar from './Components/SearchBar'
import bookData from './data.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      books: bookData,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(title) {
    let newShelf = [...this.state.shelf, title]

    this.setState({
      shelf: newShelf,
    })
  }

  clearShelf() {
    this.setState({
      shelf: [],
    })
  }

  filterBooks(input) {

    let filteredBooks = this.state.books.filter((element, index) => {
      if (this.state.books[index].title.includes(input) || this.state.books[index].author.includes(input)) {
        return this.state.books[index]
      }
    }
    )

    this.setState({
      books: filteredBooks,
    })
  }

  reset() {
    this.setState({
      books: bookData,
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <SearchBar filterBooksProp={this.filterBooks} resetProp={this.reset} />
        <div className='body'>
          <div className='book-list'>
            <BookList books={this.state.books} addToShelfProp={this.addToShelf} />
          </div>
          <div className='shelf'>
            <Shelf shelf={this.state.shelf}
              clearShelfProp={this.clearShelf} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

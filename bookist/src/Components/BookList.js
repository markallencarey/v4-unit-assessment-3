import React, { Component } from 'react'

class BookList extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  
  render() {
    
    const mappedBooks = this.props.books.map((element) => {
      return (
        <div key={element.id}>
          <img src={element.img} alt=''
            onClick={(e) => this.props.addToShelfProp(element.title)} />
          <p>{element.title}</p>
          <p>{element.author}</p>
        </div>
      )
    })

    return (
      <div>
        <h2>list</h2>
        <div>{mappedBooks}</div>
      </div>
    )
  }
}

export default BookList
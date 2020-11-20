import React, { Component } from 'react'

class Shelf extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {

    let mappedTitles = this.props.shelf.map((element) => {
      return (
        <div key={element.id}>
          <p>{element}</p>
        </div>
      )
    })

    return (
      <div>
        <h2>shelf</h2>
        <button
          onClick={(e) => this.props.clearShelfProp()}>clear shelf</button>
        {mappedTitles}
      </div>
    )
  }
}

export default Shelf
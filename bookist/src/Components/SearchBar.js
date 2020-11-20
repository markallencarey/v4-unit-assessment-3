import React, {Component} from 'react'

class SearchBar extends Component {
  constructor() {
    super()

    this.state = {
      userInput: '',

    }
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    })
  }

  handleClick() {
    this.props.filterBooksProp(this.state.userInput)
    
  }

  handleClear() {
    this.setState({
      userInput: '',
    })
    this.props.resetProp()
  }

  render() {
    return(
      <div>
        <input placeholder='search here'
        onChange={(e)  => this.handleChange(e)}
        value={this.state.userInput}/>
        <button onClick={(e) => this.handleClick()}>search</button>
        <button onClick={(e) => this.handleClear()}>clear search</button>
      </div>
    )
  }
}

export default SearchBar
import React, { Component } from "react"
import { connect } from "react-redux"
import { addRestaurant } from "../actions/restaurants"

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: "",
  }

  handleOnNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleOnLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    // add missing code
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            value={this.state.name}
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            value={this.state.location}
            id="location"
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

//connect this component by wrapping RestaurantInput below
export default connect(null, { addRestaurant })(RestaurantInput)

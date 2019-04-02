import React, { Component } from 'react'
import axios from 'axios'

export default class ResourceList extends Component {
  state = { resources: [] }

  async componentDidMount () {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    )
    this.setState({ resources: res.data })
  }

  // Lifecycle method gets called anytime our component re-renders either because of a parent component or whenever we call setSTate inside current component
  async componentDidUpdate (prevProps) {
    // if the previous props resource is different from current (based on click change), do another fetch to specified api to re-render component
    if (prevProps.resource !== this.props.resource) {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      )
      this.setState({ resources: res.data })
    }
  }

  render () {
    return <div>{this.state.resources.length}</div>
  }
}

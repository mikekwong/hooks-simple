import React, { useState, useEffect } from 'react'
import axios from 'axios'

// pass resource prop into argument to stay dry
const ResourceList = ({ resource }) => {
  // useState hook to replicate this.state and this.setState
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const res = await axios(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(res.data)
  }

  // useEffect hook to utilizes lifecycle methods CDU and CDM
  useEffect(
    () => {
      fetchResource(resource)
    },
    [resource]
  )

  return <div>{resources.length}</div>
}

export default ResourceList

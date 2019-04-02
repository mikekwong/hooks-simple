import React, { useState, useEffect } from 'react'
import axios from 'axios'

// pass resource prop into argument to stay dry
const ResourceList = ({ resource }) => {
  // useState hook to replicate this.state and this.setState
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const res = await axios(`https://jsonplaceholder.typicode.com/${resource}`)
    // same as setState of the resource prop to the new state
    setResources(res.data)
  }

  // useEffect hook to utilizes lifecycle methods CDU and CDM
  // the resource that gets passed in is the prop from above which determines if the function gets invoked again or not with the prop
  // Notes: no array will constant re-fetch spam,
  // Notes: empty array = CDM
  // Notes: array with exact same value(s) = CDM. 2nd time it will not re-fetch
  // Notes: array with changing values = CDM & CDU to re-fetch
  // Notes: array with exact same object = CDM & CDU due to nature of objects being different references in memory
  useEffect(
    () => {
      fetchResource(resource)
    },
    [resource]
  )

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList

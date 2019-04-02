import React from 'react'
import useResources from './useResources'

// pass resource prop into argument to stay dry
const ResourceList = ({ resource }) => {
  const resources = useResources(resource)
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList

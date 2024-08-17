import React from 'react'

const Meeting = ({time, day, note}) => {
  return (
    <tr>
      <td><p>{ time }</p></td>
      <td><p>{ day }</p></td>
      <td><p>{ note }</p></td>
    </tr>
  )
}

export default Meeting;
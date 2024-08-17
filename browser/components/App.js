import React from 'react'
import Heading from './Heading'

const App = ({children}) => {
  return (
    <div>
      <Heading />
      <div id="content">
        { children }
      </div>
    </div>
  )
}

export default App;

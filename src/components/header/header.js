import React from 'react'
import './header.css'
function header (props) {
    return(
        <header className="header">
  <h3>{props.title}</h3>
        </header>
    )
}

export default header
import React from 'react'
// import Spinner from "./Spinner.gif"
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader">
          <img src='https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif'   alt='loading'/>
          <h1>Fetching Data</h1>
            
        </div>
    )
}

export default Loader

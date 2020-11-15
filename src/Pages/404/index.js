import React from 'react';
import { Link } from 'react-router-dom';

import '../../global.css';
import '../../components/css/text.css';
import './styles.css'

function NotFound() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        console.log(x.className);
      }

    return (
        <div id="PageNotFound">
            <div className="content">
                <header className="topnav" id="myTopnav">
                    <a href="/*/#" className="icon" onClick={() => myFunction()}>
                        <i className="fa fa-bars"></i>
                    </a>
                    <Link to="/" rel="noopener noreferrer">Home</Link>
                    <Link to={{ pathname: "https://github.com/apilayer/restcountries" }} target="_blank" rel="noopener noreferrer">View on Github</Link>
                    <Link to={{ pathname: "https://restcountries.eu/#rest-countries" }} target="_blank" rel="noopener noreferrer">Docs API</Link>
                    <Link to="/listofcountries" rel="noopener noreferrer">Get Countries</Link>
                </header>
                <main>
                    <div className="TextContent">
                        <h2>We have a problem</h2>
                        <p>Page not found</p>
                        <Link to="/listofcountries" className="normal">Reload</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NotFound;
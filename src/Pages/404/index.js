import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../global.css';
import '../../components/css/text.css';
import './styles.css'

function NotFound() {

    const [time, setTime] = useState(30);
    const History = useHistory();

    function handleReloadTime(time) { 
        if(time > 1) {             
            setTime(time-1);
        } else {
            // Reload da pagina getCoutries
            History.push('/listofcountries');
        }
    } 

    useEffect(() => {
        setTimeout(                
            () => {handleReloadTime(time)}
        , 1000);        
    }, [time]);

    return (
        <div id="PageNotFound">
            <div className="content">
                <header>
                    <Link to="/" rel="noopener noreferrer">Home</Link>
                    <Link to={{ pathname: "https://github.com/apilayer/restcountries" }} target="_blank" rel="noopener noreferrer">View on Github</Link>
                    <Link to={{ pathname: "https://restcountries.eu/#rest-countries" }} target="_blank" rel="noopener noreferrer">Docs API</Link>
                    <Link to="/listofcountries" rel="noopener noreferrer">Get Countries</Link>
                    {/* <a href="http://" target="_blank" rel="noopener noreferrer">Contact US</a> */}
                </header>
                <main>
                    <div className="TextContent">
                        <h2>We have a problem</h2>
                        <p>Page not found</p>
                        <Link to="/listofcountries" className="normal">Reload {(time<=0)? '': time}</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NotFound;
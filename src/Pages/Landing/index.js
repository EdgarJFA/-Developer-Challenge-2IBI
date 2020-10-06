import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdventureImg from '../../assets/undraw_adventure_4hum.svg';
import ConnectWorldImg from '../../assets/undraw_connected_world_wuay.svg';
import shapes0Img from '../../assets/Shapes.svg';
import shapes1Img from '../../assets/Shapes1.svg';
import ArrowIcon from '../../assets/arrowUp.svg';
import separator from '../../assets/Separator.svg'

import '../../components/css/Button.css';
import './styles.css';
import '../../global.css';

function Landing() {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollUp = () => {
        if( !showScroll && window.pageYOffset > 150) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 150) {
            setShowScroll(false);
        }
    }

    window.addEventListener('scroll', checkScrollUp);

    return (
        <div id="landing">
            <div className="home-page">
                <div className="content">
                    <header>
                        <Link to="/" rel="noopener noreferrer">Home</Link>
                        <Link to={{ pathname: "https://github.com/apilayer/restcountries" }} target="_blank" rel="noopener noreferrer">View on Github</Link>
                        <Link to={{ pathname: "https://restcountries.eu/#rest-countries" }} target="_blank" rel="noopener noreferrer">Docs API</Link>
                        <Link to="/listofcountries" rel="noopener noreferrer">Get Countries</Link>
                        <a href="/#fim"  rel="noopener noreferrer">Contact US</a>
                    </header>
                    <main>
                        <div className="second-container">
                            <div className="TextContent">
                                <h2>Get information about countries</h2>
                                <p>The restcountries project has been acquired by apilayer, one of the leading providers of API microservices. We will keep
                                    supporting restcountries and providing it as a free solution for developers. We will finance this project fully and have
                                    turned off the donations feature.</p>
                                <Link to="/listofcountries" className="normal">Get Started</Link>
                            </div>                
                            <div className="imageContainer" name="img1">
                                <img src={AdventureImg} alt="adveture-on-the-world"/>
                            </div>
                        </div>
                        <div className="second-container">
                            <div className="imageContainer2" name="img2">
                                <img src={ConnectWorldImg} alt="connect-the-world"/>
                            </div>
                            <div></div>    
                            <img src={shapes0Img} className="shapes0" alt="shape"/>              
                            <div className="TextContent" >
                                <h2>Region and Regional Bloc</h2>
                                <p>Search by region: Africa, Americas, Asia, Europe, Oceania, and Search by regional bloc. example: EU (European Union), EFTA (European Free Trade Association), AU (African Union), NAFTA (North American Free Trade Agreement), PA (Pacific Alliance) and another regional bloc.</p>
                            
                                <Link to={{ pathname: "https://restcountries.eu/#rest-countries" }} target="_blank" rel="noopener noreferrer" className="learn-more">Learn More</Link>
                            </div>  
                        </div>
                        <img src={shapes1Img} className="shapes" alt="shape"/>                                    
                    </main>                         
                </div>
            </div>        
            <section >            
                {/* <div className="separator"></div> */}
                <img src={separator} className="separator" alt="separator"/>
            </section> 
            <a href="/#" className="top-button" style={{ display: showScroll ? 'flex' : 'none'}}>
                <img src={ArrowIcon} alt="Arrow Top"/>
            </a>
            <footer>
                <div className="footer" id="fim">
                    <div className="footer-links">
                        <strong>Usefull Links</strong>
                        <a href="https://github.com/apilayer/restcountries" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        <a href="https://restcountries.eu/#rest-countries" target="_blank" rel="noopener noreferrer">Docs API</a>
                        <Link to="/listofcountries" rel="noopener noreferrer">Get Countries</Link>
                    </div>                
                    <div className="footer-links">
                        <strong>Need help?</strong>
                        <Link to="/" rel="noopener noreferrer">FAQ’s</Link>
                        <Link to="/"rel="noopener noreferrer">Support</Link>
                        <Link to="/" rel="noopener noreferrer">Terms</Link>
                    </div>                
                    <div className="footer-links">
                        <strong>Our Social Medias</strong>                    
                    </div>                
                </div>
            </footer>
        </div>   
    );
}

export default Landing;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WaveLoading  } from 'react-loadingg';
import ReactToExcel from 'react-html-table-to-excel';
import { CSVLink } from "react-csv";

import api from '../../services/api';
import './styles.css';

function CountryList() {

    const [infoCountries, setInfoCountries] = useState([]);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [nameFile, setNameFile] = useState('');

    const headers = [
        { label: 'Country', key: 'name' },
        { label: 'Capital', key: 'capital' },
        { label: 'Native Name', key: 'nativeName' },
        { label: 'Calling Codes', key: 'callingCodes' },
        { label: 'Region', key: 'region' },
        { label: 'Subregion', key: 'subregion' },
        { label: 'Population', key: 'population' },
        { label: 'Area', key: 'area' },
        { label: 'Time zones', key: 'timezones' },
        { label: 'Flag Link', key: 'flag' },
      ];

    useEffect(() => {
        handleSetPath();
    }, []);

    function handleSetPath(path = 'all', fileName = 'All Countries') {
        setLoading(true);
        setApiLoaded(false);
        api.get(path).then(response => {             
            setInfoCountries(response.data);            
            setNameFile(fileName);
            setLoading(false);
            setApiLoaded(true);
        })
        setTimeout(() => {
            setLoading(false);
        },30000);  
    }

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        console.log(x.className);
      }

    function close() {
        var x = document.getElementById("myTopnav");
          x.className = "topnav";
      }

    return (
        <div id="GetCountries">
            <div className="content" >
                <header className="topnav" id="myTopnav">
                    <a href="javascript:void(0)" className="icon" onClick={() => myFunction()}>
                        <i className="fa fa-bars"></i>
                    </a>
                    <Link to="/" rel="noopener noreferrer">Home</Link>
                    <Link to={{ pathname: "https://github.com/apilayer/restcountries" }} target="_blank" rel="noopener noreferrer" onClick={() => close()}>View on Github</Link>
                    <Link to={{ pathname: "https://restcountries.eu/#rest-countries" }} target="_blank" rel="noopener noreferrer" onClick={() => close()}>Docs API</Link>
                    <Link to="/listofcountries" className="active" rel="noopener noreferrer">Get Countries</Link>
                    {/* <a href="http://" target="_blank" rel="noopener noreferrer">Contact US</a> */}
                </header>
                <main>
                    <div className="sub-content">
                        <h2>Discovery the world</h2>
                        <p>Find information about any country</p>                    
                    </div>
                    <div id="#app" className="main-content">
                        <div className="button">
                            <button onClick={ () => handleSetPath()} >All Countries</button>
                            <button onClick={ () => handleSetPath('region/africa','africa')} >Africa</button>
                            <button onClick={ () => handleSetPath('region/americas','americas')} >Americas</button>
                            <button onClick={ () => handleSetPath('region/asia','asia')} >Asia</button>
                            <button onClick={ () => handleSetPath('region/europe','europe')} >Europe</button>
                            <button onClick={ () => handleSetPath('region/oceania','oceania')} >Oceania</button>                        
                        </div>
                        <div className="content-API">
                            { loading ? <span className="loading">wait for data to load<WaveLoading  size="large" color="#63D4CC" /></span> :
                                ( apiLoaded ? 
                                    <table id="table-to-xls" >
                                        <tbody>
                                            <tr name="head">
                                                <th>Country</th>
                                                <th>Capital</th>
                                                <th>Native Name</th>
                                                <th>Calling Codes</th>
                                                <th>Region</th>
                                                <th>Subregion</th>
                                                <th>Population</th>
                                                <th>Area</th> 
                                                <th>Time zones</th>
                                                <th>Flag Link</th>
                                            </tr>
                                            {infoCountries.map(infoCountrie => {
                                                return (
                                                    <tr key={infoCountrie.name} name="body">
                                                        <td>{infoCountrie.name}</td>
                                                        <td>{infoCountrie.capital}</td>
                                                        <td>{infoCountrie.nativeName}</td>
                                                        <td>{infoCountrie.callingCodes.join(', ')}</td>
                                                        <td>{infoCountrie.region}</td>
                                                        <td>{infoCountrie.subregion}</td>
                                                        <td>{infoCountrie.population}</td>
                                                        <td>{infoCountrie.area}</td>                                                        
                                                        <td>
                                                            { 
                                                            (!infoCountrie.timezones[1]) ? infoCountrie.timezones[0] : `${infoCountrie.timezones[0]}, +`
                                                            }
                                                        </td>
                                                        <td><a href={infoCountrie.flag} target="_blank" rel="noopener noreferrer">{infoCountrie.flag}</a></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table> : <div className="loaded-container"><span className="loading-failed">failed to load data. check your internet connection and try again</span></div>
                                )
                            }
                        </div>
                        { apiLoaded ? 
                            <div className="exportButton">
                                <ReactToExcel
                                    className="export-excel"
                                    table="table-to-xls"
                                    filename= {nameFile}
                                    sheet="sheet 1"
                                    buttonText="EXPORT TO EXCEL"
                                />
                            </div>
                             : <></>    
                        }           
                    </div>
                </main>
            </div>
            { apiLoaded ? 
                <div className="exportButton">
                    <ReactToExcel
                        className="export-excel"
                        table="table-to-xls"
                        filename= {nameFile}
                        sheet="sheet 1"
                        buttonText="Export to XLS"
                    />

                    <CSVLink
                        headers={headers}
                        data={infoCountries.map(infoCountrie => ({
                            name: infoCountrie.name,
                            capital: infoCountrie.capital,
                            nativeName: infoCountrie.nativeName,
                            callingCodes: infoCountrie.callingCodes,
                            region: infoCountrie.region,
                            subregion: infoCountrie.subregion,
                            population: infoCountrie.population,
                            area: infoCountrie.area,
                            timezones: infoCountrie.timezones,
                            flag: infoCountrie.flag
                        }))}                        
                        filename={`${nameFile}.csv`}
                        className="export-excel-csv"
                        // target="_blank"
                    >
                        Export to CSV
                    </CSVLink>
                </div> : <></>    
            } 
        </div>
    );
}

export default CountryList;
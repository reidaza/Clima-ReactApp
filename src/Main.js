import './Main.css';

import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState } from 'react';
import  axios  from 'axios';
import { SystemSecurityUpdateRounded } from '@mui/icons-material';


export const Main = () => {
    const BuscarCiudad = evento =>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=774e100b9cef6dbfcbb636f4b990b9d7`)
        .then((response) => {
            console.log(response.data);
            setDatos(response.data);
            setHume(response.data.main);
            setVelo(response.data.wind);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const [Ciudad, setCiudad] = useState(" ")
    const [Pais, setPais] = useState(" ")
    const [{name}, setDatos] = useState({})
    const [{temp ,humidity}, setHume] = useState({})
    const [{speed}, setVelo] = useState({})

    
    const celcius = Math.round(temp -273.15);

    return(
        <article className="ContArt">
            <div className="ContSection">
                <div className="ContSearch">
                    <div className="ContCity"><input type="Search" onChange={(e) => setCiudad(e.target.value)} className="ContSearchCity" placeholder='Ciudad'/></div>
                    <div className="ContPais"><input type="Search" onChange={(e) => setPais(e.target.value)} className="ContSearchPais" placeholder='Pais'/></div>
                </div>
                <div className="ContBoton"> 
                    <Button 
                        variant="contained"
                        color="primary"
                        endIcon={<SearchIcon/>}
                        onClick={BuscarCiudad}
                        >
                        Search
                    </Button>
                </div>
                <div className="ContCiudad">{name}</div>
                <div className="ContTemp">{celcius}°C</div>
                <div className="TxtTemp">Temperatura</div>
                <div className="ContHume">{humidity}%</div>
                <div className="TxtHume">Humedad</div>
                <div className="ContVelo">{speed}Km/h</div>
                <div className="TxtVelo">Velocidad Viento</div>
            </div>
            <p className="footer">By: Andres Daza</p>
        </article>
    )
}


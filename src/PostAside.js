import axios from "axios";
import { useEffect, useState } from "react";
import { Aside } from "./Aside";


export const PostAside = () =>{
    const [Bandera, setBandera] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });    
    }, [])
    return (
        <div>
            <Aside/>
        </div>
    )
}
import React from 'react';
import style from './country.module.css'

const Countries = ({flag, name,population,region,capital,code}) => {

    const getDetail = ()=>
    {
        window.location = `/countryDetail/${code}`
    }

    return (
        <li className={style.country} onClick={getDetail} title="Get Country Details">
            
            <a>
                <div className={style.ctyimgcont}>
                    <img className={style.ctyimg} src={flag} alt=""/>
                </div>
                <div className={style.ctyinfocont}>
                    <h1 className={style.ctyname}>{name}</h1>
                    <ul className={style.ctyinfo}>
                        <li className={style.ctyinfoit}><strong className="bold">Population:</strong> {population}</li>
                        <li className={style.ctyinfoit}><strong className="bold">Region:</strong> {region}</li>
                        <li className={style.ctyinfoit}><strong className="bold">Capital:</strong> {capital}</li>
                    </ul>
                </div>
            </a>
        </li>

    )
}

export default Countries
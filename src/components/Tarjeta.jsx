import React from 'react'
import './Tarjeta.css';

const Tarjeta = ({ cuento }) => {
  const url = `http://bibliotecadigital.ilce.edu.mx/Colecciones/CuentosMas${cuento.url}`;

  return (
    <div className='storie'>
        <h4 className='read-download'>Leer o Descargar</h4>
        <div className='storie-title'>
            <span>#0{cuento.id}.</span>
            <h5> {cuento.title}</h5>
        </div>
        <div className='storie-image'>
            <a href={url}>
                <img src={cuento.poster_path} alt={cuento.title} />
            </a>
        </div>
    </div>
  )
}

export default Tarjeta

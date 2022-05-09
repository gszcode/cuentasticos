import React from 'react';
import pdfs from '../pdfs.json'; 
import './Cuentos.css';
import Tarjeta from './Tarjeta';

const Cuentos = () => {
  return (
    <section className='stories-container'>
        <div className='stories-text'>
            <p>Estos libros infantiles son perfectos para leerlos online, pero también puedes imprimirlos si prefieres leerlos en papel.</p>
            <p>Simplemente pincha en la imagen y podrás ver la lectura infantil que hayas escogido.</p>
        </div>
        <hr />
        <div className="stories-image">
            {
              pdfs.map(cuento => (
                <Tarjeta key={cuento.id} cuento={cuento} />
              ))
            }
        </div>
    </section>
  )
}

export default Cuentos

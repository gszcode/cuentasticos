import React from 'react'
import Cuentos from '../components/Cuentos';
import principal from '../img/principal.jpg';
import secundaria from '../img/secundaria.jpg';
import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <section className='home-container'>
          <div className='home-text'>
              <p><span>¡Bienvenido!</span> aquí vas a encontrar Lecturas infantiles imprescindibles en PDF</p>
              <span className='span'>Disfruta de esta colección de libros infantiles en PDF, ¡perfectos para <strong>fomentar la lectura en los niños</strong>! Son 100% gratis.</span>
          </div>
          <div className='home-image'>
              <span>CUENTOS DIVERTIDOS Y PARA APRENDER</span>
              <img src={principal} alt={principal} />
          </div>
          <hr />
      </section>
      <section className='info-container'>
        <article className='info-text'>
          <p>Esta colección está compuesta de <span>obras literarias clásicas y cuentos</span> cortos para niños en PDF. ¡Los ayudarán a <span>entretenerse y desarrollar su mente</span> de forma sana!</p>
          <p>Así que si quieres <span>fomentar la lectura</span> de tus hijos o familiares, estos libros te ayudarán muchísimo y serán un buen descanso de los videojuegos y la Televisión.</p>
          <p>Puedes leérselos tú mismo o dejar que ellos los lean…</p>
          <p className='last'>¡Vamos a las lecturas!</p>
        </article>
        <div className='home-image'>
          <img className='info-image' src={secundaria} alt={secundaria} />
        </div>
      </section>
      <Cuentos />
    </>
  )
}

export default Inicio

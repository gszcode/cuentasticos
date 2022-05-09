import React from 'react'
import ElBarbaAzul from '../cuentos/BarbaAzul.pdf';
import './Pdf.css';

const BarbaAzul = () => {
  return (
    <div className='pdf-container'>
      <object 
        data={ElBarbaAzul} 
        type="application/pdf"
        width="100%"
        height="100%"
      >

      </object>
    </div>
  )
}

export default BarbaAzul;
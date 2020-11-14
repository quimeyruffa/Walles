import React from 'react'
const PruebaImage =(props)=>{
    const [nombre,categoria]= props.imagen
        return (
            <>
        
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="card">
                
                    <p className="card-text">{nombre} Me gusta </p>
                    <p className="card-text">{categoria} Vistas </p>
                    
                </div>
            </div>
   </>
    
        )
    
}
export default PruebaImage;
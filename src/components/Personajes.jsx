import React from "react";
import { connect } from "react-redux";


const Personajes = ({sincoestrellas}) => (
 <section>
  <h2>Personajes</h2>
   <div className="contender">
     
     {
      sincoestrellas.map (P => (
     <article className="personaje">
      <img src= {P.foto} alt={P.nombre}/>

        
       <h3> {P.nombre}</h3>
       <div>
        <button>5estrellas</button>
        <button>4estrellas</button>
       </div>

     </article>
     ))
    }
   </div>

 </section>



)

const mapStateToProps = state => ({
    sincoestrellas : state.sincoestrellas



}) 
 
const mapDispatchToProps = dispatch => ({})


export default connect (mapStateToProps, mapDispatchToProps) (Personajes);
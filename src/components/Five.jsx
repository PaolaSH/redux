import React from "react";
import { connect } from "react-redux";

const Five = ({fiveStarts}) => (
<section>

<h2>Fivestarts</h2>
<div className="cancha">

{
fiveStarts.map ( P => (

<article className="five">
<div>

<img src= {P.foto} alt={P.nombre}/>
<button>X</button>
</div>

<p>{P.nombre}</p>
</article>

))


}</div>
</section>
)



const mapStateToProps = state => ({
    fiveStarts: state.fiveStarts



}) 
 
const mapDispatchToProps = dispatch => ({})


export default connect ( mapStateToProps, mapDispatchToProps  ) (Five)
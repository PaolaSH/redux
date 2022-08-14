import React from "react";

import { connect } from "react-redux";

const Four= ({fourstarts}) => (
<section>

<h2>Fourstarts</h2>
<div className="four">

{
fourstarts.map ( P => (

<article className="four">
<div>

<img src= {P.foto} alt={P.nombre}/>
<button>X</button>
</div>

<p>{P.nombre}</p>
</article>

))


}


</div>
</section>
)
const mapStateToProps = state => ({
    novato: state.novato



}) 
 
const mapDispatchToProps = dispatch => ({})


export default connect ( mapStateToProps, mapDispatchToProps  ) (Four)
import { createStore } from "redux";
const InicialState = {
sincoestrellas : [{
    id : 1,
    nombre : "Tighnari",   
    foto : "https://cdn.donmai.us/original/6f/32/__tighnari_genshin_impact_drawn_by_dilyakum__6f32b6e8f1a87a751cacab725264fdca.jpg"
},
{
    id : 2,
    nombre : "Alhaitham",   
    foto : "https://static.zerochan.net/Alhaitham.full.3693725.jpg"
},
{
    id : 3,
    nombre : "Cyno",   
    foto : "https://cdn.donmai.us/sample/f8/2e/sample-f82ed683abad0b0b1ccf7bad89861288.jpg"
}


],

cuatroestrellas : [],
novato : [],
}

const GenchinImpact = (state = InicialState, action) => {
return state



}














export default createStore (GenchinImpact)
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Personajes from "./components/Personajes";
import EquipoSelet from "./components/Equipo";
const App = () => (
<Provider store = {store}>
<main>

  <h1>Genchin</h1>

<Personajes/>
<EquipoSelet/>
 </main>
</Provider>
)
 
export default App;
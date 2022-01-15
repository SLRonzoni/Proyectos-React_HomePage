import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Menu from './componentes/navbar/navbar';

import Acerca from './componentes/acerca/acerca';
import Antecedentes from './componentes/antecedentes/antecedentes';
import Conocimientos from './componentes/conocimientos/conocimientos';
import Curriculum from './componentes/curriculum/curriculum';
import Contacto from './componentes/contacto/contacto';


function App() {
  return ( 
    <BrowserRouter>
        <Menu />
        <Switch>
 
          <Route exact path="/acerca"> <Acerca/> </Route>

          <Route exact path="/conocimientos"><Conocimientos/> </Route>

          <Route exact path="/antecedentes"> <Antecedentes/> </Route>

          <Route exact path="/curriculum"> <Curriculum/> </Route>

          <Route exact path="/contacto">  <Contacto /> </Route>
        </Switch>

    </BrowserRouter>    
  );
}

export default App;

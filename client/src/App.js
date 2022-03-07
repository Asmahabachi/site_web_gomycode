import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Acceuil from './components/HomePage/Acceuil'
import LeylaNjim from './components/LeylaNjim/LeylaNjim';
import Prestations from './components/Prestation/Prestation';
import Forfaits from './components/Forfaits/Forfaits';
import Réalisations from './components/Réalisations/Réalisations';
import Devis from './components/Devis/Devis';
import Contacts from './components/Contacts/Contacts'
import CoursdeCoaching from './components/Cours_de_Coaching'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Enregistrer from './components/Contacts/Enregistrer'


function App() {

  return (
    <div className="App">
       <BrowserRouter> 
       <NavBar />
      <Switch>
      <Route  path="/" exact component={Acceuil} />
      <Route  path="/LeylaNjim" component={LeylaNjim} />   
      <Route  path="/Prestations" component={Prestations} />
      <Route  path="/Forfaits" component={Forfaits} />
      <Route  path="/Réalisations" component={Réalisations} />
      <Route  path="/Cours de Coaching" component={CoursdeCoaching} />
      <Route  path="/Devis" component={Devis} />
      <Route  path="/SignUP" component={Contacts} />
      <Route  path="/SingIN" component={Enregistrer} />
     </Switch>
     </BrowserRouter> 
      
      
      <Footer /> 
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar'
// import HomePage from './components/HomePage/Acceuil';
import Footer from './components/Footer'
import Acceuil from './components/HomePage/Acceuil'
import LeylaNjim from './components/LeylaNjim/LeylaNjim';
import Prestations from './components/Prestation/Prestation';
import Forfaits from './components/Forfaits/Forfaits';
import Réalisations from './components/Réalisations/Réalisations';
import Devis from './components/Devis/Devis';
import Contacts from './components/Contacts/Contacts'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Enregistrer from './components/Contacts/Enregistrer'
// import TopSection from './components/HomePage/TopSection'
// import Mobile from './components/Contacts/Mobile'
// import MiddleSection from './components/HomePage/MiddleSection'
// import {Description} from './components/HomePage/Description'
// import Card from './components/card'
// import {useState} from 'react'



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
      <Route  path="/Devis" component={Devis} />
      <Route  path="/Contacts" component={Contacts} />
      <Route  path="/Enregistrer" component={Enregistrer} />
     </Switch>
     </BrowserRouter> 
      
      {/* <HomePage /> */}
      {/* <TopSection/> */}
       {/* <Mobile/>  */}
      {/* <MiddleSection /> */}
      {/* <Card/>  */}
      <Footer /> 
    </div>
  );
}

export default App;

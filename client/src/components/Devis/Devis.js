import React,{ useState} from 'react'
// import Mobile from './Mobile'
import {Form} from "react-bootstrap"
import {singnUp} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function Devis() {
  const dispatch = useDispatch();
 
   
  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')
  const [codepostal,setCodepostal] = useState('')
  const [adress,setAdress] = useState('')
  const [superficie,setSuperficie] = useState('')
  const [ville,setVille] = useState('')
  const [délai,setDélai] = useState('')
  const [détailsduprojet,setDétailsduprojet] = useState('')
  const Envoyervotredemande = () => {
 
   dispatch(singnUp({nom,prenom,telephone,email,codepostal,adress,superficie,ville,délai,détailsduprojet}))
 }
 
 
 
   return (
     <div> 
         {/* <Mobile/> */}
         <Form className="signup">
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Nom</Form.Label>
           <Form.Control type="text" placeholder="Enter Nom" onChange={(e)=> setNom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Prenom</Form.Label>
           <Form.Control type="text" placeholder="Prenom" onChange={(e)=> setPrenom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Telephone</Form.Label>
           <Form.Control type="text" placeholder="Enter Telephone" onChange={(e)=> setTelephone(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Email</Form.Label>
           <Form.Control type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Adress</Form.Label>
           <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=> setAdress(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Code postal</Form.Label>
           <Form.Control type="text" placeholder="Enter Nom" onChange={(e)=> setCodepostal(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicPostal">
           <Form.Label>Superficie (en m²)</Form.Label>
           <Form.Control type="text" placeholder="postal" onChange={(e)=> setSuperficie(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicVille">
           <Form.Label>Ville</Form.Label>
           <Form.Control type="text" placeholder="Ville" onChange={(e)=> setVille(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicVille">
           <Form.Label>Délai</Form.Label>
           <Form.Control type="text" placeholder="Ville" onChange={(e)=> setDélai(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicVille">
           <Form.Label>Détails du projet </Form.Label>
           <Form.Control type="text" placeholder="Ville" onChange={(e)=> setDétailsduprojet(e.target.value)}/>
         </Form.Group>
         <Link style={{textDecoration: 'none'}} to={'/Contacts'} > <Form.Control onClick={()=> Envoyervotredemande()} type="text" className="btn btn-primary" defaultValue="Envoyer votre demande" /></Link>
       
         
       </Form>
     </div>
   )
 }
 
 export default Devis
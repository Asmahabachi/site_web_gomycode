import React, {useState} from 'react'
import {Card,Form, Modal, CardGroup, Button} from 'react-bootstrap'
import {addDevis} from '../redux/actions/actions'
import {useDispatch} from 'react-redux'




function Cours_de_Coaching() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const dispatch = useDispatch();
  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')
  const [adress,setAdress] = useState('')
  const [superficie,setSuperficie] = useState('')
  const [motif,setMotif] = useState('')
  const Envoyervotredemande = () => {
   dispatch(addDevis({nom,prenom,telephone,email,adress,superficie,motif}))
   alert("demande envoyee avec succes")}
  return (
    <div>
    <CardGroup>
    <Card>
      <Card.Body>
        <Card.Title>
          <h5>Cour</h5>
          <h3>DESIGN</h3>
        </Card.Title>
        <Card.Text>
         <li>DESIGN INTERRIEUR</li>
         <li>DECORATON</li>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={handleShow} variant="primary"> RESERVER</Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title>
          <h5>Cour</h5>
          <h3>DESIGN</h3>
        </Card.Title>
        <Card.Text>
         <li>DESIGN INTERRIEUR</li>
         <li>DECORATON</li>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={handleShow} variant="primary"> RESERVER</Button>
      </Card.Footer>
    </Card> <Card>
      <Card.Body>
        <Card.Title>
          <h5>Cour</h5>
          <h3>DESIGN</h3>
        </Card.Title>
        <Card.Text>
         <li>DESIGN INTERRIEUR</li>
         <li>DECORATON</li>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={handleShow} variant="primary"> RESERVER</Button>
      </Card.Footer>
    </Card>
  </CardGroup>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Please fill this form and the team team will contact you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
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
      
         <Form.Group className="mb-3" controlId="formBasicPostal">
           <Form.Label>Superficie (en m??)</Form.Label>
           <Form.Control type="text" placeholder="postal" onChange={(e)=> setSuperficie(e.target.value)}/>
         </Form.Group>
         <Form.Select onChange={(e)=> setMotif(e.target.value)} aria-label="Default select example">
  <option>Motif</option>
  <option value={'devis' }> devis</option>
  <option value={'coaching' }>coaching</option>
  <option value={'forfait' }>forfait</option>
</Form.Select>
       
            <Form.Control onClick={()=> Envoyervotredemande()} type="text" className="btn btn-primary" defaultValue="Envoyer votre demande" />
          
         
       </Form>
    </Modal.Body>
        </Modal>
  
  
  </div>
  )
}

export default Cours_de_Coaching
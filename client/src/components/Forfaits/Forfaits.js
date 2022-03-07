import React from 'react'
import {Card,CardGroup,Button} from 'react-bootstrap'


function Forfaits() {
  return (
    <div>
      <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>
        <h5>Forfait</h5>
        <h3>CHERCHE-MOI</h3>
      </Card.Title>
      <Card.Text>
       <li>Suivi de chantier</li>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">En savoir plus</Button>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>
        <h5>Forfait</h5>
        <h3>INSPIRE-MOI</h3>
      </Card.Title>
      <Card.Text>
       <li>Plan 3D</li>
       <li>Photos 3D</li>
       <li>Shopping List</li>
       {/* <li>Photos</li> */}
       <li>Images d'inspirations</li>
       <li>Prises de mesures</li>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">En savoir plus</Button>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Body>
      <Card.Title>
        <h5>Forfait</h5>
        <h3>MONTRE-MOI</h3>
      </Card.Title>
      <Card.Text>
       <li>Plan 3D</li>
       <li>Photos 3D</li>
       <li>Shopping List</li>
       <li>Vidéo lien</li>
       <li>Photos</li>
       <li>Images d'inspirations</li>
       {/* <li>Prises de mesures</li> */}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">En savoir plus</Button>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Body>
      <Card.Title>
        <h5>Forfait</h5>
        <h3>DÉVOILE-MOI</h3>
      </Card.Title>
      <Card.Text>
      <li>Plan 3D</li>
       <li>Photos 3D</li>
       {/* <li>Shopping List</li> */}
       <li>Vidéo lien</li>
       <li>Photos</li>
       <li>Visite panoramique</li>
       {/* <li>Image d'inspiration</li> */}
       <li>Prise de mesure</li>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">En savoir plus</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>
        <h5>Forfait</h5>
        <h3>ORGANISW-MOI</h3>
      </Card.Title>
      <Card.Text>
      <li>Plan 3D</li>
       <li>Photos 3D</li>
       {/* <li>Shopping List</li> */}
       <li>Vidéo lien</li>
       <li>Plan 2D mesures</li>
       <li>Plan coupes</li>
       <li>Suivie de chantier</li>
       <li>Visite panoramique</li>
       {/* <li>Image d'inspiration</li> */}
       <li>Prise de mesure</li>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">En savoir plus</Button>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  )
}

export default Forfaits
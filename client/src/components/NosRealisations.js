import React from 'react'
import img3 from './img/img3.jpg'
import img7 from './img/img7.jpg'
import img9 from './img/img9.jpg'
import {Card} from 'react-bootstrap'
import Mobile from './Contacts/Mobile'

function NosRealisations() {
  return (
    
        <div class="cards-list"  >

           <div class="card 1">
           <div class="card_image"><img src={img3} /> </div>
           <Card.Title>Decoration & aménagement</Card.Title>
          </div>

          <div class="card 2">
         <div class="card_image"><img src={img7} /></div>
          <Card.Title>Agencement locaux professionnels</Card.Title>
          </div>

           <div class="card 3">
           <div class="card_image"><img src={img9} /> </div>
           <Card.Title>Visite conseil avant achat</Card.Title> 
           </div>

    </div>
  )
}

export default NosRealisations
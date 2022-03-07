import React from 'react'
import img3 from './img/img3.jpg'
import img7 from './img/img7.jpg'
import img9 from './img/img9.jpg'


function BlocImage() {
  return (
    <div class="cards-list">
<div class="card 1">
  <div class="card_image"> <img src={img3} /> </div>
  
</div>

  <div class="card 2">
  <div class="card_image">
    <img src={img7} /> 
    </div>
  
</div>

<div class="card 3">
  <div class="card_image">
  <img src={img9} /> 
  </div>
</div>
</div>
  )
}

export default BlocImage
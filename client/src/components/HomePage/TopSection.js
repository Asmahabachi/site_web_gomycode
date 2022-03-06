import React from 'react'
import img3 from '../img/img3.jpg'
import img7 from '../img/img7.jpg'
import img9 from '../img/img9.jpg'
import {Carousel} from 'react-bootstrap'

function TopSection() {
  return (
      <div className="top-section">
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <h5 style ={{color: "black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum. </h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img7}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img9}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div class="blockentreimages">
<section class="story-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="story-text">
                                <p>“Even if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed of.”</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="story-author">
                                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/273692716_1132385904191760_5017312497319602718_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=8iWOVE9-A30AX8lMyq8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJTK4egdWgCIEtIAF39qdur2gnRQ7A41J4x-ZnsHRYA9w&oe=6243EF11" style={{width: "100px , height: 100px"}} class="" alt=""/>
                                <div class="story-content">
                                    <h5 class="story-title">Leyla Njim</h5>
                                    <p class="story-description">founder of company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>



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

<div id="bloc-1" className="section-1">  
    <div className="col1">
        <h1>Architecte d’intérieur à Sousse</h1>

        <p>Nous sommes une équipe composée d'architectes, 
           décorateurs et entrepreneurs qui pouvons faire de votre rêve une réalité 
            ! Notre principe ? Réaliser vos projets d'aménagement et décoration à Sousse en procédant à plusieurs étapes.
            Vous serez enfin satisfait de l’aménagement et de la décoration de votre nid douillet!
            Qu’attendez-vous pour nous contacter ? En effet,
            nous vous garantissons que notre intervention sera le synonyme d’un changement rapide et positif.</p>   
    </div>
    </div>
    <div class="flex-row ">
                <div class="col ">
                    <div class="title-2">1- </div>
                    <p>Une prise de rendez-vous et prise de côte</p>
                </div>

                <div class="col ">
                <i class="fa fa-chevron-circle-right"></i>
                </div>

                <div class="col">
                    <div class="title-2">2- </div>
                    <p>Une proposition de conception 3D modifiable, shopping list</p>
                </div>

                <div class="col ">
               <i class="fa fa-chevron-circle-right"></i>
                </div>
    

                <div class="col">
                    <div class="title-2">3- </div>
                    <p>Devis entrepreneurs</p>
                </div>

                <div class="col ">
               <i class="fa fa-chevron-circle-right"></i>
                </div>

                <div class="col ">
                    <div class="title-2">4- </div>
                    <p>Suivi de chantier</p>
                </div>
            </div >

            <div class="col-paragh">
            <p>Votre nid douillet est alors à votre disposition ! N'hésitez plus <a href="contact.php">contactez-nous</a>.</p>
            </div>
            


</div>

  )
}

export default TopSection
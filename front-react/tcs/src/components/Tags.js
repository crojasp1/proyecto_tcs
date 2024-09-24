import React from 'react'
import Tag from './Tag'
import image1 from '../assets/audi.jpg'
import image2 from '../assets/lambo.jpg'
import image3 from '../assets/toyota.jpg'

const tags = [
  {
    id: 1,
    title: 'Audi Visionary Drive',
    image: image1,
    url: 'https://youtube.com/fazttech',
    text: 'Audi Visionary Drive es un evento que presenta los últimos avances en tecnología, diseño y rendimiento. Los asistentes podrán conducir modelos eléctricos y deportivos en una pista diseñada para destacar su potencia, y participar en charlas innovación automotriz. ¡Los esperamos!'
  },
  {
    id: 2,
    title: 'Lamborghini Performance',
    image: image2,
    url: 'https://youtube.com/fazttech',
    text: 'Lamborghini Performance es un evento exclusivo para los amantes de la velocidad y el diseño de lujo. Los asistentes podrán probar los superdeportivos más potentes de Lamborghini en una pista, disfrutar de exposiciones sobre tecnología avanzada y conocer de cerca el futuro de la marca.'
  },
  {
    id: 3,
    title: 'Toyota Innovation Expo',
    image: image3,
    url: 'https://youtube.com/fazttech',
    text: 'Audi Visionary Drive es un evento exclusivo donde los asistentes podrán conducir los autos eléctricos y deportivos más innovadores de Audi, y participar en charlas sobre tecnología y movilidad futura.' 
  }
]

function Tags() {
  return (
    <div className="container" id='Tags-carros'>
      <div className="row">
        {
          tags.map(tag =>(
            <div className="col-md-4" key={tag.id}>
              <Tag title = {tag.title} image = {tag.image} url = {tag.url} text = {tag.text}/>
            </div> 
          ))
        }
      </div>
    </div>
  )
}

export default Tags
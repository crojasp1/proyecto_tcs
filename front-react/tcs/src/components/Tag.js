import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Tags.css'

function Tag({title, image, text, url}) {  
  return (
    <div className="card text-center bg-dark">
        <div className="overflow">
            <img src={image} alt="" className="card-img-top"/>
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
            <p className="card-text-secondary">
                {
                    text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula diam eget lacus vulputate, sed dictum magna tincidunt. Aliquam erat volutpat. Integer sodales, nisl at consectetur sagittis.' 
                }
            </p>
            <a href={url} className="btn btn-outline-secondary rounded-0">
                GO!
            </a>
        </div>
    </div>
  )
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
}

export default Tag;
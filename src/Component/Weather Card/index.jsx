import React from 'react'
import Card from 'react-bootstrap/Card';


let WeatherCard = ({date, temp, min, max ,sea, hum}) => {
  return (

      <div>

       <br></br>
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Weather Card</Card.Header>
        <Card.Body>
          <Card.Title> Temprature {temp}°C</Card.Title>
          <Card.Text>
           Minimum Temp: {min}°C <br></br>  Maximum Temp: {max}°C<br></br>
           Date: {date}
          </Card.Text>
          <h4>Sea Level {sea} </h4>
          <h5>Its Humidity {hum} </h5>
        </Card.Body>
      </Card>

      </div>
  )
}

export default WeatherCard
import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import WeatherCard from './Weather Card';



function Rb() {
const[cityName, setCityName] = useState("");
const[data, setData] = useState([]);

  let submitHandler = async (e)=>{
    e.preventDefault();
      console.log("I am submit handler function");

      try{
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=7f8dc69f7d9ceb53eb83db22c12f80ff&units=metric`)
        console.log("response:", response);
        setData(response.data.list)
      }

      catch(error){
          console.log("error in api call", error);
      }

  }
  return (
    <div>
      <h2>Weather App Home</h2>
      <form onSubmit={submitHandler} >
      <label>CityName: </label><br></br>
      <Form.Control type="text" placeholder="Enter your city name" 
       onChange={(e) =>{
        setCityName(e.target.value);
    }} /> <br></br>

      <Button variant="primary" type="submit" className='col'>
        Get Weather
      </Button>
      </form>


       {
        data.map((eachForcast , index) =>(
          <WeatherCard
          key = {index}
          date={eachForcast.dt_txt}
          temp={eachForcast.main.temp}
          min={eachForcast.main.temp_min}
          max={eachForcast.main.temp_max}
          sea={eachForcast.main.sea_level}
          hum={eachForcast.main.humidity}/>
        ))
      } 
 
   </div>
  ) 
  
}

export default Rb 
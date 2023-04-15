import React, {useState } from "react";

function App(){
  // Set our hooks
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState("cold")

  //create increment function 
  const incrementTemperature = () => {
    //limit the increase to 30
    if(temperatureValue === 30) return 
    const newTemperature = temperatureValue + 1

    if(newTemperature >= 15){
      setTemperatureColor('hot') //if the temperature is more than 15 we change the state of display to hot
    }
  
    setTemperatureValue(newTemperature)
  }

  //create drecrement function
  const decrementTemprature = () => {
    //limit the decrease till 0
    if(temperatureValue === 0) return  
    const newTemperature = temperatureValue - 1

    if(newTemperature < 15){
      setTemperatureColor('cold') //if the temperature is less than 15 we change the state of display to cold
    }

    setTemperatureValue(newTemperature)
  }

  return(
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
      <button onClick={() => incrementTemperature()}>+</button>
      <button onClick={() => {setTemperatureValue(10)}}>10</button> {/* Rest the default value wich is 10 */}
      <button onClick={() => decrementTemprature()}>-</button>
      </div>
    </div>
  )
}

export default App
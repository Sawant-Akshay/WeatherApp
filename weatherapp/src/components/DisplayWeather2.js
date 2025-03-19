import React from "react";


export const DisplayWeather2 =(props)=>{

    const {data} = props
    
    console.log(props)

    const iconurl = `https://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : ""}.png`;

    
      return(<>
            <div className='displayweather'>
        {
            data.cod !== 404 ?
            <div>
            <div className='maincard'>
          <span className='cardtitle'>
            {data.name},{data.sys.country}.Weather
          </span> <br></br>
          <span className='cardsubtitle'>
           As of {new Date().toLocaleTimeString()}
          </span>

          <div className='weather-main'>
          <h1 className='main-degree'>
              {Math.floor(data.main.temp-273.15)}
              <sup>o</sup>
          </h1>
          <img src={iconurl} className='weather-icon' alt=""/><br></br>
          <span>
             {data.weather[0].main}
          </span>
          </div>

          <div className='weather-description'>
            {data.weather[0].description}
          </div>
        
         
      </div>
          <div className='weatherdetails'>
                <div className='section1'>
                    <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4>High/Low</h4>
                            </td>
                            <td>
                                <span>
                                {Math.floor(data.main.temp_max - 273.15)}/{""}
                                {Math.floor(data.main.temp_min - 273.15)} <sup>o</sup> C
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Humidity</h4>
                            </td>
                            <td>
                                <span>
                                 {data.main.humidity} %
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Pressure</h4>
                            </td>
                            <td>
                                <span>
                                {data.main.pressure} hpa
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Visibility</h4>
                            </td>
                            <td>
                                <span>
                                {data.visibility/1000} km
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className='section2'>
                    <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4>Wind</h4>
                            </td>
                            <td>
                                <span>
                                {Math.floor(data.wind.speed*18)/5} km/hr  </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Wind Direction</h4>
                            </td>
                            <td>
                                <span>
                                 {data.wind.deg} <sup>o</sup>deg
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunrise</h4>
                            </td>
                            <td>
                                <span>
                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Sunset</h4>
                            </td>
                            <td>
                                <span>
                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            
            
               </div>
            </div>
            : <div className='maincard'>
               <h2>{data.message}</h2>
              </div>
        }
        </div>

            

             
      


      </>)
}
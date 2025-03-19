import React, {  useState } from 'react';
import { DisplayWeather2 } from '../components/DisplayWeather2';
import '../components/weather2.css';


export const Weather2=()=>{ 
      
     const [form,setForm]=useState({
        city:"",
        country:""
    })

  const APIKEY = "fdf82ec15ef6eef7905f71e5452d75ee"

  const [weather,setWeather] = useState([])  

  const getWeatherData = async (e)=>{
             
            e.preventDefault()
            
            const data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`)
            .then((jaba)=>(jaba.json())).then((sawant)=>(sawant))
      
            setWeather({
               data:data
            });

       
   }

   const handleSubmit = (e)=>{
         let name = e.target.name
         let value = e.target.value

         if (name === "city"){
            setForm({...form,city:value})
         }
         else if (name === "country"){
            setForm ({...form,country:value})

         }
         // console.log(form.city,form.country)
   }


     return (<>
             

            <div className='container'>
               <h1 className='text-center'>Weather App</h1>
               <form>
               <input type="text" name='city' placeholder="City" className='ms-5' onChange={e=>handleSubmit(e)}></input>
               <input type="text" name='country' placeholder="Country" className='ms-5' onChange={e=>handleSubmit(e)}></input>
               <button onClick={e=>getWeatherData(e)}>Submit</button>
               </form>

               {
                   weather.data !== undefined ?
                   
                   <div>
                   <DisplayWeather2 data = {weather.data}/>
                   </div>

                   : null
               }
            </div>
            
     </>)
}
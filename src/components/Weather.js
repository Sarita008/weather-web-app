import React, { useEffect, useState } from 'react';
import "./css/style.css";
import axios from 'axios';

import i200 from "./icons/200.png";
import i201 from "./icons/201.png";
import i202 from "./icons/202.png";
import i230 from "./icons/230.png";
import i231 from "./icons/231.png";
import i232 from "./icons/232.png";
import i233 from "./icons/233.png";
import i300 from "./icons/300.png";
import i301 from "./icons/301.png";
import i302 from "./icons/302.png";
import i500 from "./icons/500.png";
import i501 from "./icons/501.png";
import i502 from "./icons/502.png";
import i511 from "./icons/511.png";
import i520 from "./icons/520.png";
import i521 from "./icons/521.png";
import i522 from "./icons/522.png";
import i600 from "./icons/600.png";
import i601 from "./icons/601.png";
import i602 from "./icons/602.png";
import i610 from "./icons/610.png";
import i611 from "./icons/611.png";
import i612 from "./icons/612.png";
import i621 from "./icons/621.png";
import i622 from "./icons/622.png";
import i623 from "./icons/623.png";
import i700 from "./icons/700.png";
import i711 from "./icons/711.png";
import i721 from "./icons/721.png";
import i731 from "./icons/731.png";
import i741 from "./icons/741.png";
import i751 from "./icons/751.png";
import i800 from "./icons/800.png";
import i801 from "./icons/801.png";
import i802 from "./icons/802.png";
import i803 from "./icons/803.png";
import i804 from "./icons/804.png";
import i900 from "./icons/900.png";
import idef from "./icons/idef.png";
import sun1 from "./icons/sunrise.png";
import set1 from "./icons/sunset.png";


const Weather = () => {

   const [weather, setWeather] = useState([]);   //(API se data milrha h usko whether ke ander store kraynge. (jb bhi hum input box m city name dalnge API se hume max temp, min temp, humidity, hourly forecast etc... sbhi ka data mil jaye.))
   const [cityName, setCityName] = useState("");    //(input ke adner ki value ko cityName m store kra rhe h. (Jb bhi hum input box m city name search kre wo city name mil jaye.. ))
   const [city, setCity] = useState("- -");       //(Jb hum form submit krrhe h hme cityName ka data city ke ander dalna h. and city ka use hmne error ko avoid krne ke liye bhi kiya h(Jb bhi hum kuch likhte the tb haar onchange hone pr error aata tha))
   
   // OnChange
    const onChangeHandler = (e) => {
       setCityName(e.target.value)    //(e.target.value means input ke ander ki value .)
    }

   // OnSubmit
      const onSubmitHandler = (e) =>{
         e.preventDefault()      //(Submit krne ke baad refresh ho jata h usko avoid krne ke liye e.preventDefault ka use krte h)
       setCity(cityName)       // (jb bhi hum submit krnge cityName ki value city ke ander store ho jayege....city ki value update krre h Jo setCity ki madad se ho rhe h)
         
        console.log(city);
      }
     

   useEffect(() =>{
     axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=2cf317f73a4840fa84ab0dde0e395ace`)
     .then((climateCondition)=>{    //(Jo API se response milra h usko hum climateConsition ke ander store kra rhe h..)
      setWeather(climateCondition.data);     //(api se jo data milra h use weather k andr store krra re h... Climate.data ke ander data store h wo weather ke ander store kra rhe h)
      console.log(weather);
      })
      .catch(err=>console.log(err))
   },[city])  


   // Temperature
   const temp = (i)=>{
      if(weather.data){
         return weather?.data[i]?.temp
      }else{
         return "--"
      }
   }

   //min Temp
   const minTemp = (i)=>{
      if(weather.data){
         return weather?.data[i]?.min_temp
      }else{
         return "--"
      }
   }

   //max Temp
   const maxTemp = (i)=>{
      if(weather.data){
         return weather?.data[i]?.max_temp
      }else{
         return "--"
      }
   }

    //Sun rise
    const sunrise = (i)=>{
      if (weather.data) {
         // Create a Date object from the Unix timestamp
         const date = new Date (weather?.data[i]?.sunrise_ts * 1000);
 
         // Hours part from the timestamp
         const hours = date.getHours ();
 
         // Minutes part from the timestamp
         const minutes = "0" + date.getMinutes ();
 
         // Seconds part from the timestamp
         const seconds = "0" + date.getSeconds ();
 
         // Will display time in 10:30:23 format
         const sunriseTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 
         return sunriseTime
       }else{
         return "--"
       }
     }
    

     //Sun set
     const sunset = (i)=>{
      if (weather.data) {
        // Create a Date object from the Unix timestamp
        const date = new Date (weather?.data[i]?.sunset_ts * 1000);

        // Hours part from the timestamp
        const hours = date.getHours ();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes ();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds ();

        // Will display time in 10:30:23 format
        const sunsetTime = hours + ':' + minutes.substr (-2) + ':' + seconds.substr (-2);

        return sunsetTime
      }else{
        return "--"
      }
    }

      //Humidity
      const humidity = (i)=>{
         if (weather.data) {
          return weather?.data[i]?.pop
         }else{
          return "--"
        }
      }

       //Wind Speed
       const wind_speed = (i)=>{
         if (weather.data) {
          return weather?.data[i]?.pop
         }else{
          return "--"
        }
      }

      //Date
     const date = (i)=>{
     if (weather.data) {
     return weather?.data[i]?.datetime
     }else{
     return "--"
   }
 }

     //Day
      const day = (i)=>{
     if (weather.data) {
     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     const orgDate = weather?.data[i]?.datetime;
     const newDate = orgDate.replaceAll("-","/")
     const d = new Date(newDate);
     let day = weekday[d.getDay()];
     return day
     }else{
     return "--"
   }
 }
       //Rain
       const rain = (i)=>{
       if (weather.data) {
        return weather?.data[i]?.pop
       }else{
        return "--"
      }
    }

   //Weather Description
   const description = (i)=>{
      if (weather.data) {
        return weather?.data[i]?.weather?.description
      }else{
        return "--"
      }
    }

    //Weather code
    const imgCode = (i)=>{
      if (weather.data) {
        const code = weather?.data[i]?.weather?.code
        switch (code) {
          case 200:
            return i200
            break;
          
          case 201:
            return i201
            break;
          
          case 202:
              return i202
              break;

          case 230:
              return i230
              break;

          case 231:
              return i231
              break;

          case 232:
              return i232
              break;

          case 233:
              return i233
              break;

          case 300:
              return i300
              break;

          case 301:
              return i301
              break;

          case 302:
              return i302
              break;

          case 500:
              return i500
              break;

          case 501:
              return i501
              break;

          case 502:
              return i502
              break;

          case 511:
              return i511
              break;

              case 520:
              return i520
              break;
          case 521:
              return i521
              break;

          case 522:
              return i522
              break;

          case 600:
              return i600
              break;

          case 601:
              return i601
              break;

          case 602:
              return i602
              break;
          
          case 610:
              return i610
              break;

          case 611:
              return i611
              break;

          case 612:
              return i612
              break;

          case 621:
              return i621
              break;
          
          case 622:
              return i622
              break;
          
          case 623:
              return i623
              break;

          case 700:
              return i700
              break;

          case 711:
              return i711
              break;

          case 721:
              return i721
              break;

            case 731:
              return i731
              break;

            case 741:
              return i741
              break;

            case 751:
              return i751
              break;

            case 800:
              return i800
              break;

            case 801:
                return i801
                break;

            case 802:
                return i802
                break;
            
            case 803:
                return i803
                break;

            case 804:
                return i804
                break;

            case 900:
                  return i900
                  break;

          default:
            return idef
            break;
        }
      }else{
        return idef
      }
    }

     //Background color
     const bgColor = (i)=>{
      if (weather.data) {
        const code = weather?.data[i]?.weather?.code;
        switch (code) {
          case 200:
            return "rgba(94,132,154,255)";       
            break;
          
          case 201:
            return "rgba(94,132,154,255)";       
            break;
          
          case 202:
            return "rgba(94,132,154,255)";
            break;
            
          case 230:
              return "rgba(94,132,154,255)";
              break;
              
          case 231:
              return "rgba(94,132,154,255)";
              break;
              
          case 232:
              return "rgba(94,132,154,255)";
              break;
              
          case 233:
              return "rgba(94,132,154,255)";
              break;
              
          case 300:
              return "rgba(94,132,154,255)";
              break;

          case 301:
              return "rgba(94,132,154,255)";
              break;

          case 302:
              return "rgba(94,132,154,255)";
              break;

          case 500:
              return "rgba(94,132,154,255)";
              break;

          case 501:
              return "rgba(94,132,154,255)";
              break;

          case 502:
              return "rgba(94,132,154,255)";
              break;

              case 511:
               return "rgba(94,132,154,255)";
               break;

          case 520:
              return "rgba(62,171,228,255)";
              break;

          case 521:
              return "rgba(62,171,228,255)";
              break;

          case 522:
              return "rgba(94,132,154,255)";
              break;

          case 600:
              return "rgba(62,171,228,255)";
              break;

          case 601:
              return "rgba(94,132,154,255)";
              break;

          case 602:
              return "rgba(94,132,154,255)";
              break;
          
          case 610:
              return "rgba(94,132,154,255)";
              break;

          case 611:
              return "rgba(94,132,154,255)";
              break;

          case 612:
              return "rgba(94,132,154,255)";
              break;

          case 621:
              return "rgba(62,171,228,255)";
              break;
          
          case 622:
              return "rgba(94,132,154,255)";
              break;
          
          case 623:
              return "rgba(94,132,154,255)";
              break;

          case 700:
              return "rgba(62,171,228,255)";
              break;

          case 711:
              return "rgba(62,171,228,255)";
              break;

          case 721:
              return "rgba(62,171,228,255)";
              break;

            case 731:
              return "rgba(62,171,228,255)";
              break;

            case 741:
              return "rgba(62,171,228,255)";
              break;

            case 751:
              return "rgba(62,171,228,255)";
              break;

            case 800:
              return "rgba(62,171,228,255)";
              break;

            case 801:
                return "rgba(62,171,228,255)";
                break;

            case 802:
                return "rgba(62,171,228,255)";
                break;
            
            case 803:
                return "rgba(94,132,154,255)";
                break;

            case 804:
                return "rgba(94,132,154,255)";
                break;

            case 900:
                  return "rgba(94,132,154,255)";
                  break;

          default:
            return "rgb(37, 88, 255)"
            break;
        }
      }else{
        return "rgb(37, 88, 255)" 
      }
    }
    
    //Overflow initial
    const overFlow = ()=>{
      if(!weather.data){
        return "{overflow = 'none';}"
      }
    }

  return (
    <>
    <div  className='container'>
     <div className='subContainer1'>
        <form onSubmit={onSubmitHandler} className="inputData">
          <input 
          className="inputField"
          type="text" 
          placeholder="Enter City Name"  
          value={cityName}
          name='city'
          onChange= {onChangeHandler} />
        </form>
     
        <div className='time'>
          <p>{date(0)}, {day(0)}</p>
        </div>

          <div className="location">
            <img src={imgCode(0)} alt="" />  {city}
          </div>
          
          <div className='temp'>
            <div className='maxTemp'>
                <h3>Max Temp  <i className="fa-solid fa-temperature-arrow-up"></i></h3>
                <p>{maxTemp(0)}°C </p>
            </div>

            <div className='minTemp'>
                <h3>Min Temp  <i className="fa-solid fa-temperature-arrow-down"></i></h3>
                <p>{minTemp(0)}°C</p>
            </div>
          </div>
         
         <div className='humiditySpeed'>
          <div className='humidity'>
              <h3>Humidity <i className="fa-solid fa-droplet"></i> </h3>
              <p>{humidity(0)}%</p>
          </div>

          <div className='speed'>
              <h3>Wind Speed  <i className="fa-solid fa-wind"></i></h3>
              <p>{wind_speed(0)}%</p>
          </div>
         </div>

         <div className='sun'>
          <div className='rise'>
              <h3>Sun Rise <img style={{width:"2em"}}  src= {sun1} alt="" /> </h3>
              <p>{sunrise(0)}am</p>
          </div>

          <div className='set'>
              <h3>Sun Set  <img style={{width:"2em"}}  src= {set1} alt="" /> </h3>
              <p>{sunset(0)}pm</p>
          </div>
        </div>
      </div>
     

      <div className='subContainer2'>
          <div className='temperature'>

              <i className="fa-solid fa-temperature-half"> {temp(0)}°C</i>  
          
              {/* <h3>Rain</h3> */}
              <i className="fa-solid fa-cloud-rain"> {rain(0)}%</i> 
          </div>


          <div className='weekly'>
              <p>Weekly Forecast</p>
          </div>
          <hr />
          <hr />

          <div className='weekly1'>
              <div style={{background: bgColor(1)}} className="nextDayForecastCard">
                <p>{day(1)}</p>
                <img src={imgCode(1)} alt="" />               
                <p>{temp(1)}°C</p>
              </div>

              <div style={{background: bgColor(2)}} className="nextDayForecastCard">
                <p>{day(2)}</p>
                <img src={imgCode(2)} alt="" />
                <p>{temp(2)}°C</p>
              </div>

              <div style={{background: bgColor(3)}} className="nextDayForecastCard">
                <p>{day(3)}</p>
                <img src={imgCode(3)} alt="" />
                <p>{temp(3)}°C</p>
              </div>

              <div style={{background: bgColor(4)}} className="nextDayForecastCard">
                <p>{day(4)}</p>
                <img src={imgCode(4)} alt="" />
                <p>{temp(4)}°C</p>
              </div>
          </div>

            <div className='weekly2'>        
                <div style={{background: bgColor(5)}} className="nextDayForecastCard">
                  <p>{day(5)}</p>
                  <img src={imgCode(5)} alt="" />
                  <p>{temp(5)}°C</p>
                </div>

                <div style={{background: bgColor(6)}} className="nextDayForecastCard">
                  <p>{day(6)}</p>
                  <img src={imgCode(6)} alt="" />
                  <p>{temp(6)}°C</p>
                </div>

                <div style={{background: bgColor(7)}} className="nextDayForecastCard">
                  <p>{day(7)}</p>
                  <img src={imgCode(7)} alt="" />
                  <p>{temp(7)}°C</p>
                </div>

                <div style={{background: bgColor(8)}} className="nextDayForecastCard">
                  <p>{day(8)}</p>
                  <img src={imgCode(8)} alt="" />
                  <p>{temp(8)}°C</p>
                </div>
          </div>
      </div> 
    </div>
    </>
  )
}

export default Weather;



































// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import "./css/style.css";

// const Weather = () => {
//       const [weather, setWeather] = useState([]);     //(API se data milrha h usko whether ke ander store kraynge)
//       const [cityName, setCityName] = useState("");  //(input ke adner ki value ko cityName m store kra rhe h)
//       const [city, setCity] = useState("");   //(Jb hum form submit krrhe h hme cityName ka data city ke ander dalna h. and city ka use hmne error ko avoid krne ke liye bhi kiya h(Jb bhi hum kuch likhte the tb haar onchange hone pr error aata tha))

//       //onChange
//       const onChangeHandler = (e) => {
//         setCityName(e.target.value)    //(e.target.value means input ke ander ki value)
//       }
//       //onSubmit
//       const onSubmitHandler = (e) =>{
//         e.preventDefault()      //(Submit krne ke baad refresh ho jata h usko avoid krne ke liye e.preventDefault ka use krte h)
//         setCity(cityName);     //(city ki value update krre h Jo setCity ki madad se ho rhe h)
//         // console.log(weather);
//         // console.log(cityName);
//       }

//     useEffect(() =>{
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=09aa4a81aa95b8f88bf7d79c8a0de281`)
//       .then((climateCondition)=>{
//         setWeather(climateCondition.data);     //(api se jo data milra h use weather k andr store krra re h.)
//         // console.log(climateCondition); 
//       })
//       .catch(err=>console.log(err))
//     }, [city])



    
//   return (
//       <>
//       <div className="box">
//       <form onSubmit={onSubmitHandler} className="inputData">
//       <input 
//       className="inputField"
//       type="text" 
//       value={cityName}
//       placeholder="Enter City Name" 
//       onChange= {onChangeHandler}  />
//       </form>

//       <div className="img">
//         <img src="https://th.bing.com/th/id/OIP.Pe0P_X1a01hXWiV5NieYKAHaJ3?pid=ImgDet&w=600&h=799&rs=1"/>
//       </div>

//       <div className="info">
//         <h2 className="location">
//         <i className="fa-solid fa-street-view"></i>{city}
//         </h2>
//        <h1 className="temp">
//           {weather.main ? (weather?.main?.temp):("...")}°C    {/*(If weather.main true h then hume temp mil jayega(means weather?.main?.temp) otherwise else m hmne ... dal diya h)  */}
//        </h1>
//        <p className="tempmin_max">Min: {weather.main? (weather?.main?.temp_min):("...")}°C| Max: {weather.main? (weather?.main?.temp_max): ("...")}°C </p>
//       </div>

//      <div className = "wave-one"></div>
//      <div className = "wave-two"></div>
//      <div className = "wave-three"></div>

//       </div>
//       </>
//   )
// }

// export default Weather;
      
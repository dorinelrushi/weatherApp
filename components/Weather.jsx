import React from 'react'
import Image from "next/image";
function Weather({data}) {
  return (
    <div className='box'>
      <div className='inside-box'>
      <p>{data.name},{data.sys.country}</p>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
  
      <h1>{data.weather[0].main}</h1>
      <p>{data.main.feels_like.toFixed(0)}&#176;</p>
      </div>
      
    </div>
  )
}

export default Weather

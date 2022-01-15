import React, {useState, useEffect} from 'react'

function WeatherAppUseEffect() {
    const [city, setCity]= useState(null);
    const [search, setSearch] = useState("Mumbai");
    const [idFromButtonClick, setIdFromButtonClick] = useState()

    const handleClick = () => {
        setIdFromButtonClick(search)
    }

    const fetchApi = async() => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%20&units=metric&appid=52f3732401ccef1bfce4368000d14b22`);
    
    const data= await response.json();
       console.log(data);
         setCity (await response.json()); 
      
    }

    useEffect(() => {
      fetchApi();
    },[idFromButtonClick]);
    return (
        <div className="card">
        <div className="search mt-5">
            <input type="text" className="search-bar" placeholder="Search"  value={city} onChange={e => {setSearch(e.target.value)}} />
            <button className="button" onClick={ handleClick }  >Click</button>
            
        </div> 
        
        { !city ? (
                <p>No Data Found</p>
            ) : (
                <div>
             <div className="weather ">
            <h2 className="city"> Weather in {city.name}</h2>
            <h1 className="temp">{city.main.temp}</h1>
            {/* <!-- <img src="" alt="" className="icon"> --> */}
            
            <div className="pressure">Pressure:{city.main.pressure}</div>
            <div className="wind">Wind speed: {city.wind.speed}</div>
             </div>
                </div>
            )
        }
       
       

    </div>
    )
}

export default WeatherAppUseEffect

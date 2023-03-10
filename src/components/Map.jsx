import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { getRestaurantsData } from '../api';


const Map = () => {
    const [restaurants , setRestaurants] = useState([])
    const coordinates = {lat: 0 , lng: 0}


    // invoking 
    useEffect(() => {
        getRestaurantsData()
        .then((data) => {
            setRestaurants(data)
        })
    } , [])


    return (
        <div className="flex-[2] min-h-screen">
            <GoogleMapReact
            bootstrapURLKeys={{key: import.meta.env.VITE_GOOGLE_MAP_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={""}
            onChange={""}
            onChildClick={""}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { getRestaurantsData } from '../api';


const Map = () => {
    const [restaurants , setRestaurants] = useState([])
    const [coordinates , setCoordinates] = useState({lat: 0 , lng: 0})
    const [bounds , setBounds] = useState(null)



    // invoking 
    useEffect(() => {
        console.log(coordinates , bounds);
        getRestaurantsData()
        .then((data) => {
            setRestaurants(data)
        })
    } , [coordinates , bounds])


    return (
        <div className="flex-[2] min-h-screen">
            <GoogleMapReact
            bootstrapURLKeys={{key: import.meta.env.VITE_GOOGLE_MAP_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={""}
            onChange={e => {
                setCoordinates({lat: e.center.lat , lng: e.center.lng})
                setBounds({ne: e.marginBounds.ne , sw: e.marginBounds.sw})
                
            }}
            onChildClick={""}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;
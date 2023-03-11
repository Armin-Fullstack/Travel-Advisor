import GoogleMapReact from 'google-map-react';
import { useEffect } from 'react';
import { getRestaurantsData } from '../api';


const Map = ({setCoordinates , coordinates , bounds , setRestaurants, setBounds}) => {


    // get user's position 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude , longitude}}) => {
            setCoordinates({lat: latitude , lng: longitude})
        })
    } , [])

    // invoking the function from api
    useEffect(() => {
        getRestaurantsData(bounds.sw , bounds.ne)
        .then((data) => {
            console.log(data);
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
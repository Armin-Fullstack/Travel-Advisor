import GoogleMapReact from 'google-map-react';
const Map = () => {
    const coordinates = {lat: 0 , lng: 0}
    return (
        <div className="flex-1 min-h-screen">
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
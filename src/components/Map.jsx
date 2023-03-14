import GoogleMapReact from "google-map-react";
import { useEffect } from "react";
import { getRestaurantsData } from "../api";
import { useMediaQuery } from "@chakra-ui/react";
import { Rate } from "antd";

const Map = ({
  setCoordinates,
  coordinates,
  bounds,
  restaurants,
  setRestaurants,
  setBounds,
  setChildclicked
}) => {
  const [isDesktop] = useMediaQuery("(min-width: 600px)");
console.log(restaurants);
  // get user's position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // invoking the function from api
  useEffect(() => {
    getRestaurantsData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setRestaurants(data);
    });
  }, [coordinates, bounds]);

  return (
    <div className="flex-[2] h-[80vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildclicked(child) }
      >
        {restaurants?.map((element , i) => (
          
          <div lat={Number(element.latitude)} lng={Number(element.longitude)} key={i}>
            {!isDesktop ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            ) : (
              <div className="w-full shadow-xl p-2 bg-white">
                <h5 className="font-bold">{element.name}</h5>
                <img
        src={
          element.photo
            ? element.photo.images.large.url
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marsh.com%2Fvn%2Fen%2Findustries%2Fhospitality.html&psig=AOvVaw3ti2GxEhgT4OytnKBKy2uc&ust=1678729106405000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDhlbT31v0CFQAAAAAdAAAAABAE"
        }
        alt={element.name}
        className="rounded-t-md h-[50px] w-full cursor-pointer"
      />
                <Rate value={element.rating} disabled className="flex text-sm"/>
              </div>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

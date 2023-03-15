import { useEffect, useState } from "react";
const useGetUserCurrentPosition = () => {
  const [userPosition, setUserPosition] = useState({});
  // get user's position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setUserPosition({ lat: latitude, lng: longitude });
    });
  }, []);

  return userPosition;
};

export default useGetUserCurrentPosition;

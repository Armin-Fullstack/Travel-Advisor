import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

 export const getRestaurantsData = async (sw , ne) => {
    try {
        const {data: {data}} = await axios.get(URL , {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'ad5b64410amsh91940b17be18b2fp18c98ajsn7228e707eb7d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}


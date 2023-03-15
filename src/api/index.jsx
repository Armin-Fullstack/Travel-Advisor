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
            'X-RapidAPI-Key': 'a4063121b9msh7f604ae91e710ecp1111a4jsn875306f487c1',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}


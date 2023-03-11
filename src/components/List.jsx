import { useState } from "react";
import PlaceDetails from "./PlaceDetails";

const List = ({restaurants}) => {
    console.log(restaurants);
    const [type , setType] = useState("Restaurant")
    const [rating , setRating] = useState("All")
    return (
        <div className="flex flex-col flex-1">
            <h4 className="text-center mt-5 font-bold tracking-wide">Restaurants, Hotels & Attractions around you</h4>
            {/* forms container  */}
            <div className="flex justify-evenly space-x-10 mt-4">

                <form className="flex flex-col space-y-1">
                    <label htmlFor="places" className="text-xs text-stone-500">Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)} name="places" className="text-xs focus:outline-none pr-3 pb-1 border-b border-slate-400">
                        <option value="Restaurants">Restaurants</option>
                        <option value="Hotels">Hotels</option>
                        <option value="Attractions">Attractions</option>
                    </select>
                </form>

                <form className="flex flex-col space-y-1">
                    <label htmlFor="places" className="text-xs text-stone-500">Rating</label>
                    <select value={rating} onChange={e => setRating(e.target.value)} name="places" className="text-xs focus:outline-none pr-3 pb-1 border-b border-slate-400">
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>
            </div>

            <>
                {restaurants?.map((restaurant) => {
                    return (
                        
                        <PlaceDetails restaurant={restaurant}/>
                     
                    )
                })}
            </>
        </div>
    )
}

export default List;
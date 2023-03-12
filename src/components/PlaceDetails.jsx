import {Rate} from "antd";


const PlaceDetails = ({restaurant}) => {
    return (
        
            // card container 
            <div className="w-full border rounded-t-md shadow-md space-y-1">
                <img src={restaurant.photo ? restaurant.photo.images.large.url : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marsh.com%2Fvn%2Fen%2Findustries%2Fhospitality.html&psig=AOvVaw3ti2GxEhgT4OytnKBKy2uc&ust=1678729106405000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDhlbT31v0CFQAAAAAdAAAAABAE"} alt={restaurant.name} className="rounded-t-md h-[350px] w-full"/>
                {/* content container  */}
                <div className="space-y-2 p-2">
                    <h5>{restaurant.name}</h5>
                     {/* rating container  */}
                     <div className="flex justify-between">
                        <Rate value={restaurant.rating} disabled/>
                        <p className="text-xs">out of {restaurant.num_reviews}</p>
                    </div>
                    {/* price container  */}
                    <div className="flex justify-between">
                        <span className="text-xs">Price</span>
                        <span className="text-xs">{restaurant.price_level}</span>
                    </div>
                     {/* Ranking container  */}
                     <div className="flex justify-between">
                        <span className="text-xs">Ranking</span>
                        <span className="text-xs">{restaurant.ranking}</span>
                    </div>
                    
                    {restaurant?.awards?.map((element) => (
                        // certificate container 
                        <div className="flex justify-between space-y-1">
                            <img src={element.image.small} alt={element.display_name} />
                            <p className="text-gray-400">{element.display_name}</p>
                        </div>
                    ))}

                        {/* cuisine container  */}
                    <div className="flex gap-1 flex-wrap">
                         {restaurant?.cuisine?.map(({name}) => (
                        
                        <span className="bg-gray-300 px-2 py-1 rounded-full text-xs">{name}</span>
                    
                         ) )}
                    </div>
                    
                </div>
            </div>

    )
}

export default PlaceDetails;
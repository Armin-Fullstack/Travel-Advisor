
const PlaceDetails = ({restaurant}) => {
    return (
        
            // card container 
            <div className="w-full border rounded-t-md shadow-md space-y-1">
                <img src={restaurant.photo ? restaurant.photo.images.large.url : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marsh.com%2Fvn%2Fen%2Findustries%2Fhospitality.html&psig=AOvVaw3ti2GxEhgT4OytnKBKy2uc&ust=1678729106405000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDhlbT31v0CFQAAAAAdAAAAABAE"} alt={restaurant.name} className="rounded-t-md h-[350px] w-full"/>
                {/* content container  */}
                <div className="space-y-2 p-2">
                    <h5>{restaurant.name}</h5>
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
                </div>
            </div>

    )
}

export default PlaceDetails;
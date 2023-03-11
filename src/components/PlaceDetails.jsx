
const PlaceDetails = ({restaurant}) => {
    return (
        
        // cards container 
        <div className="flex flex-col space-y-3 mt-4">
            {/* card container  */}
            <div className="w-full border rounded-t-md shadow-md space-y-1">
                <img src={restaurant.photo ? restaurant.photo.images.large.url : ""} alt="" className="rounded-t-md h-[350px] w-full"/>
                {/* content container  */}
                <div className="space-y-2 p-2">
                    <h5>{restaurant.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails;
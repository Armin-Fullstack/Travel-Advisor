
const PlaceDetails = ({restaurant}) => {
    return (
        
        // cards container 
        <div className="flex flex-col space-y-3 mt-4 bg-slate-400">
            {/* card container  */}
            <div className="w-full space-y-3">
                <img src={restaurant.photo ? restaurant.photo.images.large.url : ""} alt="" className="h-[350px] w-full"/>
            </div>
        </div>
    )
}

export default PlaceDetails;
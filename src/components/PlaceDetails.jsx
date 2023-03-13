import { Rate } from "antd";

const PlaceDetails = ({ restaurant }) => {
  return (
    // card container
    <div className="w-full border rounded-t-md shadow-md space-y-1">
      <img
        src={
          restaurant.photo
            ? restaurant.photo.images.large.url
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.marsh.com%2Fvn%2Fen%2Findustries%2Fhospitality.html&psig=AOvVaw3ti2GxEhgT4OytnKBKy2uc&ust=1678729106405000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDhlbT31v0CFQAAAAAdAAAAABAE"
        }
        alt={restaurant.name}
        className="rounded-t-md h-[350px] w-full"
      />
      {/* content container  */}
      <div className="space-y-2 p-2">
        <h5>{restaurant.name}</h5>
        {/* rating container  */}
        <div className="flex justify-between">
          <Rate value={restaurant.rating} disabled />
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
          {restaurant?.cuisine?.map(({ name }) => (
            <span className="bg-gray-300 px-2 py-1 rounded-full text-xs">
              {name}
            </span>
          ))}
        </div>

        {restaurant?.address && (
            //  Address container  
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
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
            <p className="text-gray-400 text-xs">{restaurant.address}</p>
          </div>
        )}

        {restaurant?.phone && (
            // phone container
          <div className="flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <p className="text-gray-400 text-xs">{restaurant.phone}</p>
          </div>
        )}

         {restaurant?.web_url || restaurant?.website ? (
            <div className="space-x-4 ml-4">
                <button className="text-xs text-blue-700" onClick={() => window.open(restaurant.web_url , "_blank")}>TRIP ADVISOR</button>
                <button className="text-xs text-blue-700" onClick={() => window.open(restaurant.website , "_blank")}>WEBSITE</button>
            </div>
         ) : ""}
        
      </div>
    </div>
  );
};

export default PlaceDetails;

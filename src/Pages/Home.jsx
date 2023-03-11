import List from "../components/List";
import Map from "../components/Map";
import { useState } from "react";

const Home = () => {
    const [restaurants , setRestaurants] = useState([])
    const [coordinates , setCoordinates] = useState({})
    const [bounds , setBounds] = useState({})
    return (
        <main>
            {/* main container  */}
            <div className="main-container">
                {/* content container  */}
                <div className="flex space-x-3">
                <List restaurants={restaurants}/>
                <Map coordinates={coordinates} bounds={bounds} setBounds={setBounds} setCoordinates={setCoordinates} restaurants={restaurants}  setRestaurants={setRestaurants}/>
                </div>
            </div>
        </main>
    )
}

export default Home;
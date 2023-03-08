import List from "../components/List";
import Map from "../components/Map";

const Home = () => {
    return (
        <main>
            {/* main container  */}
            <div className="main-container">
                {/* content container  */}
                <div className="flex space-x-3">
                <List/>
                <Map/>
                </div>
            </div>
        </main>
    )
}

export default Home;
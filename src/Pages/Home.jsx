import List from "../components/List";

const Home = () => {
    return (
        <main>
            {/* main container  */}
            <div className="main-container">
                {/* content container  */}
                <div className="flex space-x-3">
                <List/>
                </div>
            </div>
        </main>
    )
}

export default Home;
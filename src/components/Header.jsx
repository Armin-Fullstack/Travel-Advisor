
const Header = () => {
    return (
        // Header
        <header className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white">
            {/* main container  */}
            <div className="container mx-auto px-6 py-2">
                {/* Navbar */}
                <nav className="flex justify-between items-center">
                    {/* Logo  */}
                    <h5>Travel Advisor</h5>
                    {/* content container  */}
                    <div className="flex items-center space-x-3">
                    </div>

                </nav>
            </div>

        </header>
    )
}

export default Header;
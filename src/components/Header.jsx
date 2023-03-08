
const Header = () => {
    return (
        // Header
        <header className="bg-gradient-to-r from-violet-700 to-indigo-600 text-white">
            {/* main container  */}
            <div className="main-container">
                {/* Navbar */}
                <nav className="flex justify-between items-center">
                    {/* Logo  */}
                    <h5>Travel Advisor</h5>
                    {/* content container  */}
                    <div className="flex items-center space-x-3">
                        {/* content */}
                        <h6 className="text-sm">Explore new places</h6>
                        <from className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-0 top-1/2 translate-x-1/2 -translate-y-1/2 font-bold w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        <input type="text" placeholder="Search..." className="w-40 md:w-52 p-1 pl-8  bg-gradient-to-r from-indigo-400 to-indigo-500 focus:outline-none placeholder:text-sm placeholder:text-stone-300 rounded-md text-sm"/>

                        </from>

                    </div>

                </nav>
            </div>

        </header>
    )
}

export default Header;
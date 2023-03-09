
const List = () => {
    return (
        <div className="flex flex-col flex-1">
            <h4 className="text-center mt-5 font-bold tracking-wide">Restaurants, Hotels & Attractions around you</h4>
            {/* forms container  */}
            <div className="flex justify-evenly space-x-10 mt-4">
                <form className="flex flex-col space-y-1">
                    <label htmlFor="places" className="text-xs text-stone-500">Type</label>
                    <select name="places" className="text-sm focus:outline-none pr-3 pb-1 border-b border-slate-400">
                        <option value="Restaurants">Restaurants</option>
                        <option value="Restaurants">Hotels</option>
                        <option value="Restaurants">Attractions</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default List;
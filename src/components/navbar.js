import Profile from "../images/profile.png";

function Navbar() {
    return (
        <div className="flex justify-between text-[25px] mx-[-80px]">
            <div className="flex space-x-12 items-center">
                <h1 className="brand">AdSpot</h1>
                <p>Dashboard</p>
                <p>Messages</p>
            </div>
            <div className="flex space-x-6 items-center">
                <button className="bg-purple text-[white] rounded-lg px-6 py-1 m-1">Search</button>
                <button className="bg-purple text-[white] rounded-lg px-6 py-1 m-1">Post +</button>
                <img src={Profile} className="h-10 w-10"/>
            </div>
        </div>
    )
}

export default Navbar;
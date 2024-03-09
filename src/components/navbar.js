import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Profile from "../images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logout');
    };

    const handleSettings = () => {
        navigate('/settings');
    };

    const redirectToSearch = () => {
        navigate('/search');
    };

    return (
        <div className="flex justify-between text-[25px] mx-[-80px]">
            <div className="flex space-x-12 items-center">
                <h1 className="brand">AdSpot</h1>
                <p><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'text-[black]' : 'hover:text-[black]')}>Dashboard</NavLink></p>
                <p><NavLink to="/messages" className={({ isActive }) => (isActive ? 'text-[black]' : ' hover:text-[black]')}>Messages</NavLink></p>
            </div>
            <div className="flex space-x-6 items-center">
                <button 
                    className="bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                    onClick={redirectToSearch}
                >
                    Search
                </button>
                <button className="bg-purple text-[white] rounded-lg px-6 py-1 m-1">Post +</button>
                <div className="relative">
                    <img src={Profile} className="h-10 w-10 cursor-pointer" onClick={togglePopup}/>
                    {showPopup && (
                        <div className="absolute bg-white border rounded-lg shadow-lg py-2 w-40 right-0 mt-2">
                            <button 
                                className="block mx-auto px-4 py-1 hover:bg-gray-100" 
                                onClick={handleSettings}
                            >
                                <FontAwesomeIcon 
                                    className="pr-1"
                                    icon={faGear}
                                />
                                Settings
                            </button>
                            <button className="block mx-auto bg-purple text-[white] rounded-lg px-6 py-1 m-1" onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
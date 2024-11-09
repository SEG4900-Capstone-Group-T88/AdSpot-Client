import {useContext, useState} from 'react'
import {useNavigate, NavLink, Link} from 'react-router-dom'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {UserContext} from './UserContext'
import CreateListing from './CreateListing'

function Navbar() {
    const navigate = useNavigate()
    const [showPopup, setShowPopup] = useState(false)
    const {user, setUser} = useContext(UserContext)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
    }

    const handleSettings = () => {
        navigate('/settings')
    }

    const redirectToSearch = () => {
        navigate('/search')
    }

    function userIcon() {
        if (user) {
            return (
                <div
                    className="h-10 w-10 border-2 border-current rounded-full cursor-pointer text-center"
                    onClick={togglePopup}
                >
                    {user?.firstName.charAt(0).toUpperCase()}
                </div>
            )
        } else {
            return (
                <img
                    src={Profile}
                    className="h-10 w-10 cursor-pointer"
                    onClick={togglePopup}
                />
            )
        }
    }

    return (
        <div className="flex justify-between text-[25px] mx-[-80px]">
            <div className="flex space-x-12 items-center">
                <NavLink to="/">
                    <h1 className="brand">AdSpot</h1>
                </NavLink>
                {user && (
                    <p>
                        <NavLink
                            to="/dashboard"
                            className={({isActive}) =>
                                isActive ? 'text-[black]' : 'hover:text-[black]'
                            }
                        >
                            Dashboard
                        </NavLink>
                    </p>
                )}
                {user && (
                    <p>
                        <NavLink
                            to="/messages"
                            className={({isActive}) =>
                                isActive ? 'text-[black]' : ' hover:text-[black]'
                            }
                        >
                            Messages
                        </NavLink>
                    </p>
                )}
            </div>
            <div className="flex space-x-6 items-center">
                <button
                    className="bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                    onClick={redirectToSearch}
                >
                    Explore
                </button>
                <CreateListing />
                <div className="relative">
                    {userIcon()}
                    {showPopup && (
                        <div className="absolute bg-white border rounded-lg shadow-lg py-2 w-40 right-0 mt-2">
                            {user && (
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
                            )}
                            {!user && (
                                <button className="block mx-auto bg-purple text-[white] rounded-lg px-6 py-1 m-1">
                                    <Link to="/login">Login</Link>
                                </button>
                            )}
                            {user && (
                                <button
                                    className="block mx-auto bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar

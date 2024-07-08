import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSackDollar, faStar} from '@fortawesome/free-solid-svg-icons'
import Requests from '../components/Requests'
import Orders from '../components/Orders'
import {useContext} from 'react'
import {UserContext} from '../components/UserContext'
import UserListings from '../components/UserListings'

function Dashboard() {
    const {user} = useContext(UserContext)

    return (
        <div>
            <Navbar />
            <div className="flex gap-16 items-center my-16">
                <img
                    src={Profile}
                    className="h-30 w-30"
                />
                <div>
                    <h2>Hello {user?.firstName},</h2>
                    <h4>Welcome back to AdSpot!</h4>
                    <div className="flex gap-16 text-purple text-[25px]">
                        <div className="flex gap-2">
                            <FontAwesomeIcon
                                icon={faStar}
                                size="lg"
                            />
                            <p>You've sold 1 promo</p>
                        </div>
                        <div className="flex gap-2">
                            <FontAwesomeIcon
                                icon={faSackDollar}
                                size="lg"
                            />
                            <p>You've made $10</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>My Listings</h3>
            <UserListings />

            <Requests />

            <Orders />

            <Footer />
        </div>
    )
}

export default Dashboard

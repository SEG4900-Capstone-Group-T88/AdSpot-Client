import Navbar from "../components/Navbar"
import { SocialIcon } from "react-social-icons"

function ConnectedAccounts() {
    return (
        <>
            <Navbar/>
            <div className="flex items-center my-16">
                <div>
                    <h2>Your Connected Accounts</h2>
                </div>
            </div>
            <div className="flex items-center my-16">
                <div>
                    <h2>Connect a Social Media Account</h2>
                    <div className="flex items-center my-3">
                        <a className="instagram-connect mx-5">
                            <SocialIcon network="instagram" url="https://api.instagram.com/oauth/authorize?client_id=3649610268617265&redirect_uri=https://localhost:5173&scope=user_profile,user_media&response_type=code"/>
                        </a>
                        <a className="twitter-connect mx-5">
                            <SocialIcon network="twitter"/>
                        </a>
                        <a className="youtube-connect mx-5">
                            <SocialIcon network="youtube"/>
                        </a>
                        <a className="facebook-connect mx-5">
                            <SocialIcon network="facebook" url="https://www.facebook.com/v19.0/dialog/oauth?client_id=948021529632543&redirect_uri=https://localhost:5173" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectedAccounts
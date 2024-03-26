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
                            <SocialIcon className="mx-5" network="instagram" url="https://api.instagram.com/oauth/authorize?client_id=3649610268617265&redirect_uri=https://localhost:5173/settings/connectInstagramAccount&scope=user_profile,user_media&response_type=code"/>
                            <SocialIcon className="mx-5" network="twitter"/>
                            <SocialIcon className="mx-5" network="youtube"/>
                            <SocialIcon className="mx-5" network="facebook" url="https://www.facebook.com/v19.0/dialog/oauth?client_id=948021529632543&redirect_uri=https://localhost:5173" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectedAccounts
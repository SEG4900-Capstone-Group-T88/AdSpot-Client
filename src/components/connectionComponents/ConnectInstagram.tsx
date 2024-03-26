import { useSearchParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

function ConnectInstagram() {
    const [searchParams] = useSearchParams(); 

    useEffect(() => {
        const authCode = searchParams.get("code");
        if (authCode) {
            const accessTokenRequestURL = "https://api.instagram.com/oauth/access_token"
            const requestParams = {
                client_id: "3649610268617265",
                client_secret: "f3e68e552fad3d31536f85a39c85b7c7",
                code: {authCode},
                grant_type: "authorization_code",
                redirect_uri: "https://localhost:5173/settings/connectInstagramAccount",
            }
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify( requestParams )
            }

            fetch( accessTokenRequestURL, requestOptions )
        }

        
    })

    return (
        <>  
            <div>
                <h2>Connecting your Instagram Account...</h2>
                <CircularProgress />
            </div>
        </>
    )
}

export default ConnectInstagram
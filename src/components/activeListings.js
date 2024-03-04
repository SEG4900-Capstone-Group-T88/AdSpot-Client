import Profile from "../images/profile.png"

function ActiveListings() {
    return(
        <div>
            <h2>Active listings</h2>
            <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
                <h3>Retweet on X</h3>
                <div className="flex gap-36">
                    <div className="flex gap-4 items-center">
                        <img src={Profile} className="h-12 w-12"/>
                        <div>
                            <h4>John Doe - 1 Retweet for $10</h4>
                            <p className="text-purple text-[20px]">@johndoe123</p>
                        </div>
                    </div>
                    <p className="text-[20px]">20k followers</p>
                </div>
            </div>
            <div className="text-center mt-6 mb-12"><a className="text-purple underline text-[20px]">View all</a></div>
        </div>
    );
}

export default ActiveListings;
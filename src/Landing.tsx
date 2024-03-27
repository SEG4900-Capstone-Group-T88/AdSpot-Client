import landingImage from '../src/images/landingImage.png'
import textBubble from '../src/images/textBubble.png'
import promoIcon from '../src/images/promoIcon.png'
import postIcon from '../src/images/postIcon.png'
import Footer from './components/Footer'

function Landing() {
    return (
        <div className="bg-purple h-[38rem] -mx-[20px] md:-mx-[120px] -my-[30px]">
            <div className="px-20 py-6">
                <div>
                    <h1 className="text-[white] font-black text-[40px]">AdSpot</h1>
                </div>
                <img
                    className="mx-auto mt-4 w-96"
                    src={landingImage}
                />
            </div>
            <div className="grid xl:grid-cols-2">
                <div className="relative mx-auto">
                    <img
                        className="mx-auto w-[33rem] h-56 xl:mx-none"
                        src={textBubble}
                    />
                    <div className="absolute inset-0 flex items-center justify-center mb-16 mr-6">
                        <img
                            className="w-24 border-black rounded-full border-[12px] mr-4"
                            src={promoIcon}
                        />
                        <h2 className="xl:text-3xl">Search promotions</h2>
                    </div>
                </div>
                <div className="relative mx-auto">
                    <img
                        className="mx-auto w-[33rem] h-56 xl:mx-none"
                        src={textBubble}
                    />
                    <div className="absolute inset-0 flex items-center justify-center mb-16 mr-4">
                        <img
                            className="w-24 border-black rounded-full border-[12px] mr-4"
                            src={postIcon}
                        />
                        <h2 className="xl:text-3xl">Post promotion</h2>
                    </div>
                </div>
            </div>
            <div className="mt-10 bg-white mx-[20px] md:mx-[120px] py-[30px] px-[60px] rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Want an Audience?</h2>
                        <ul className="list-disc pl-8 mb-8 text-lg">
                            <li>Become a famous influencer</li>
                            <li>Promote your products and services</li>
                            <li>Connect with big influencers</li>
                            <li>Select the niche you want to target</li>
                            <li>Collaborate with other content creators</li>
                            <li>Build your personal or brand identity</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Have an Audience?</h2>
                        <ul className="list-disc pl-8 mb-8 text-lg">
                            <li>Monetize your social media influence</li>
                            <li>Set up diverse revenue streams</li>
                            <li>Partner with customers that fit your niche</li>
                            <li>Get compensated fairly for your reach</li>
                            <li>Accept or reject promotion offers</li>
                            <li>Join a community of successful creators</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 max-w-xl mx-auto">
                    <div className="flex items-center justify-center gap-4">
                        <input
                            id="email"
                            type="email"
                            className="border-2 border-gray-300 rounded-l-md w-full px-4 h-12 text-lg font-medium focus:outline-none focus:border-purple-500"
                            placeholder="Email address"
                        />

                        <button className=" bg-purple text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-purple-700 transition-colors whitespace-nowrap">
                            Join Beta
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Landing

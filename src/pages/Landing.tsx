import landingImage from '../images/landingImage.png'
import textBubble from '../images/textBubble.png'
import promoIcon from '../images/promoIcon.png'
import postIcon from '../images/postIcon.png'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <div className="bg-purple h-[57rem] -mx-[20px] md:-mx-[120px] -my-[30px]">
            <div className="px-[60px] py-[30px]">
                <div>
                    <h1 className="text-[white] font-black text-[40px]">AdSpot</h1>
                </div>
                <img
                    className="mx-auto mt-20"
                    src={landingImage}
                />
            </div>
            <div className="grid xl:grid-cols-2">
                <div className="relative mx-auto">
                    <img
                        className="mx-auto w-[35rem] xl:w-[42rem] xl:mx-none"
                        src={textBubble}
                    />
                    <Link to="/search">
                        <div className="absolute inset-0 flex items-center justify-center mb-20 mr-6">
                            <img
                                className="w-28 border-black rounded-full border-[12px] mr-4"
                                src={promoIcon}
                            />
                            <h2 className="xl:text-[2.7rem]">Search promotions</h2>
                        </div>
                    </Link>
                </div>
                <div className="relative mx-auto">
                    <img
                        className="mx-auto w-[35rem] xl:w-[42rem] xl:mx-none"
                        src={textBubble}
                    />
                    <div className="absolute inset-0 flex items-center justify-center mb-20 mr-4">
                        <img
                            className="w-28 border-black rounded-full border-[12px] mr-4"
                            src={postIcon}
                        />
                        <h2 className="xl:text-[2.7rem]">Post promotion</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing

import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const SettingsPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-8 relative w-full max-w-md ">
                    <button className="absolute top-0 right-0 mt-6 mr-6 text-lg text-[black] font-bold ">
                        Close settings
                    </button>
                    <ul className="mt-10 space-y-4 text-[black] font-semibold">
                        <li className="">
                            <a
                                href="/payment"
                                className="text-[black] flex justify-between items-center p-3 hover:bg-gray-100 rounded text-lg transition duration-150 ease-in-out"
                            >
                                Payment information
                                <span className="text-gray-500 text-xl">&gt;</span>
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a
                                href="#"
                                className="flex justify-between items-center p-3 hover:bg-gray-100 rounded text-lg transition duration-150 ease-in-out"
                            >
                                Transaction history
                                <span className="text-gray-500 text-xl">&gt;</span>
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a
                                href="/settings"
                                className="flex justify-between items-center p-3 hover:bg-gray-100 rounded text-lg transition duration-150 ease-in-out"
                            >
                                Account
                                <span className="text-[gray] text-xl">&gt;</span>
                            </a>
                        </li>
                        <hr />
                        <li>
                            {/* <a
                                href="/settings/connectedAccounts"
                                className="flex justify-between items-center p-3 hover:bg-gray-100 rounded text-lg transition duration-150 ease-in-out"
                            > */}
                            <Link
                                to="/settings/connectedAccounts"
                                className="flex justify-between items-center p-3 hover:bg-gray-100 rounded text-lg transition duration-150 ease-in-out"
                            >
                                Connected Accounts
                                <span className="text-[gray] text-xl">&gt;</span>
                            </Link>
                            {/* </a> */}
                        </li>
                        <hr />
                    </ul>
                    <button className="mt-6 w-full text-left p-3 text-[red] font-bold hover:bg-gray-100 rounded transition duration-150 ease-in-out text-lg">
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default SettingsPage

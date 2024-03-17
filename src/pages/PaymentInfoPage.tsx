import Sidebar from '../components/Sidebar'
import PaymentMethodCard from '../components/PaymentMethodCard'

const PaymentInfoPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex w-full max-w-4xl p-6">
                {/* Sidebar Component */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex flex-col w-full bg-white rounded-lg p-6">
                    <h2 className="text-2xl font-semibold  mb-4">Payment information</h2>
                    <p className="text-sm font-semibold mb-6">Current payment methods</p>

                    {/* Payment Method Card Component */}
                    <PaymentMethodCard
                        cardType="Visa"
                        lastFourDigits="1234"
                        expiryDate="01/2024"
                    />

                    <button className="text-sm text-[red] transition-colors">Delete</button>

                    {/* Add Payment Method Button */}
                    <button className="mt-4 px-6 py-2 bg-purple text-white rounded hover:bg-myPurpleHover transition-colors">
                        Add a payment method
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfoPage

interface NotificationProps {
    notification: {primary: string; secondary: string[]}
}

export default function Notification({notification}: NotificationProps) {
    return (
        <div
            className="bg-customOrange-100 border-l-4 border-customOrange-500 text-customOrange-700 p-4"
            role="alert"
        >
            <p className="font-bold text-3xl mb-3">{notification.primary}</p>
            <div className="flex font-semibold justify-center text-left ">
                <ul className="text-xl md:grid md:grid-cols-2 ">
                    {notification.secondary.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

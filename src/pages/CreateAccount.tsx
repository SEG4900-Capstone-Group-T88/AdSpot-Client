import Notification from '../components/Notification'

import {useState} from 'react'
import UserInput from '../components/UserInput' // Import UserInput component

function CreateAccount() {
    const [successfulFields, SetSuccessfulFields] = useState(false)
    const [notification, setNotification] = useState<{primary: string; secondary: string[]} | null>(
        null,
    )
    const [termsAndConditions, setTermsAndConditions] = useState(false)

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: '',
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    function CheckBoolean() {
        const missing: string[] = []

        // Check conditions

        if (termsAndConditions === false) {
            missing.push('Terms & Conditions')
        }

        if (formValues.firstName === '') {
            missing.push('First name')
        }
        if (formValues.lastName === '') {
            missing.push('Last name')
        }
        if (formValues.email === '') {
            missing.push('Email')
        } else if (!formValues.email.includes('@')) {
            missing.push('Email')
        } else if (!formValues.email.includes('.')) {
            missing.push('Email')
        }
        if (formValues.phoneNumber === '') {
            missing.push('Phone number')
        } else {
            const cleanPhoneNumber = formValues.phoneNumber.replace(/-/g, '')
            if (cleanPhoneNumber.length !== 10) {
                missing.push('Invalid phone number')
            }
        }

        if (formValues.password === '' || formValues.confirmPassword === '') {
            missing.push('Password')
        } else if (formValues.password.length < 5 || formValues.confirmPassword.length < 5) {
            missing.push('Password must be at least 5 characters long')
        } else if (formValues.password !== formValues.confirmPassword) {
            missing.push("Passwords don't match")
        }

        // END OF Check conditions

        // Check Boolean
        if (missing.length > 0) {
            SetSuccessfulFields(false)

            setNotification({
                primary: 'Oops! Missing fields',
                secondary: missing,
            })
        } else {
            setNotification(null)
            SetSuccessfulFields(true)
            // createAccount(formValues);
        }
    }

    return (
        <>
            <h1>Create Account</h1>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <UserInput
                    myLabel="First name"
                    value={formValues.firstName}
                    name="firstName"
                    type="text"
                    id="first_name"
                    placeholder="John"
                    onChange={handleInputChange}
                />
                <UserInput
                    myLabel="Last name"
                    name="lastName"
                    value={formValues.lastName}
                    type="text"
                    id="last_name"
                    placeholder="Doe"
                    onChange={handleInputChange}
                />
                <UserInput
                    myLabel="Company"
                    type="text"
                    id="company"
                    placeholder="Adspot"
                    onChange={handleInputChange}
                />
                <UserInput
                    myLabel="Phone number"
                    type="tel"
                    id="phoneNumberInput"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                    name="phoneNumber"
                    placeholder="123-45-678"
                />
            </div>
            <UserInput
                myLabel="Email address"
                value={formValues.email}
                name="email"
                type="email"
                id="email"
                placeholder="john.doe@company.com"
                onChange={handleInputChange}
            />
            <UserInput
                myLabel="Password"
                name="password"
                value={formValues.password}
                type="password"
                id="password"
                placeholder="•••••••••"
                onChange={handleInputChange}
            />
            <UserInput
                myLabel="Confirm password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                type="password"
                id="confirm_password"
                placeholder="•••••••••"
                onChange={handleInputChange}
            />
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        onChange={() => setTermsAndConditions(!termsAndConditions)}
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    I agree with the{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                    .
                </label>
            </div>

            <div className="text-center my-10">
                {notification && <Notification notification={notification} />}
                <button
                    className="btn btn-orange uppercase mt-5 font-bold"
                    onClick={CheckBoolean}
                >
                    {!successfulFields && 'Submit Registration'}
                    {successfulFields && <div className="lds-dual-ring"></div>}
                </button>
            </div>
        </>
    )
}

export default CreateAccount

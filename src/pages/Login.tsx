import {graphql} from '../gql'
import {useMutation} from 'urql'
import {useContext} from 'react'
import {UserContext} from '../components/UserContext'
import Navbar from '../components/Navbar'
import {Input, Typography} from '@material-tailwind/react'
import {useNavigate} from 'react-router-dom'
import {saveAuthData} from '../authStore'
import {UserContextInfoFragment} from '../gql/graphql'

const LoginMutationDocument = graphql(`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            user {
                ...UserContextInfo
            }
            token
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

function Login() {
    const [, login] = useMutation(LoginMutationDocument)
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const onSubmitLogin = (event: React.FormEvent) => {
        event.preventDefault()
        const data = new FormData(event.target as HTMLFormElement)
        const email = data.get('email')?.toString() ?? ''
        const password = data.get('password')?.toString() ?? ''

        login({input: {email, password}}).then((result) => {
            const errors = result.data?.login.errors ?? []

            if (errors.length === 0 && result.data) {
                saveAuthData(result.data.login.token ?? '')

                if (result.data.login.user) {
                    const currentUser = result.data.login.user as UserContextInfoFragment
                    setUser(currentUser)

                    localStorage.setItem('userId', currentUser?.userId.toString() ?? '')
                    localStorage.setItem('userEmail', currentUser?.email ?? '')
                    localStorage.setItem('userFName', currentUser?.firstName ?? '')
                    localStorage.setItem('userLName', currentUser?.lastName ?? '')

                    navigate('/dashboard')
                }
            } else {
                alert(errors.map((error) => error.message).join('\n'))
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="xl:grid xl:grid-cols-2 xl:items-center gap-[200px] text-center text-[black] text-[25px] font-semibold">
                <div>
                    <h1 className="brand">AdSpot</h1>
                    <p className="text-bold text-[40px] mt-[-20px] mb-[30px] xl:mb-0">
                        Catchy catch phrase
                    </p>
                </div>
                <div className="w-[450px] m-auto xl:m-0">
                    <h1 className="font-bold text-[40px]">Welcome back!</h1>
                    <Typography
                        color="gray"
                        className="mt-1 font-normal"
                        placeholder=""
                    >
                        Enter your credentials to continue
                    </Typography>
                    <form
                        className="mt-8 mb-2 w-[450px]"
                        onSubmit={onSubmitLogin}
                    >
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                                placeholder=""
                            >
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: 'before:content-none after:content-none',
                                }}
                                crossOrigin={undefined}
                                name="email"
                            />
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3"
                                placeholder=""
                            >
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: 'before:content-none after:content-none',
                                }}
                                crossOrigin={undefined}
                                name="password"
                            />
                        </div>
                        <button
                            className="bg-purple text-[white] rounded-lg px-6 py-2 mt-8 w-[450px]"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal"
                            placeholder=""
                        >
                            Don't have an account?{' '}
                            <a
                                href="/signup"
                                className="font-medium text-gray-900"
                            >
                                Sign Up
                            </a>
                        </Typography>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login

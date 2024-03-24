import {useMutation, gql} from 'urql'
import {useCallback, useContext} from 'react'
import {UserContext} from '../components/UserContext'
import Navbar from '../components/Navbar'
import { Input, Typography } from '@material-tailwind/react'

const LoginMutationDocument = gql(`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            user {
                userId
                email
                firstName
                lastName
            }
        }
    }
`)

function Login() {
    const [state, login] = useMutation(LoginMutationDocument)
    const {user, setUser} = useContext(UserContext)

    const variables = {
        input: {
            email: 'matt',
            password: 'matt',
        },
    }

    const submit = useCallback(() => {
        login(variables).then((result) => {
            setUser(result.data?.login.user ?? null)
            console.log(user)
        })
    }, [state, login, variables])

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
                        <Typography color="gray" className="mt-1 font-normal" placeholder="">
                            Enter your credentials to continue
                        </Typography>
                        <form className="mt-8 mb-2 w-[450px]">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder="">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                    crossOrigin={undefined}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder="">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                    crossOrigin={undefined}
                                />
                            </div>
                            <button
                                className="bg-purple text-[white] rounded-lg px-6 py-2 mt-8 w-[450px]"
                                onClick={submit}
                            >
                                Sign In
                            </button>
                            <Typography color="gray" className="mt-4 text-center font-normal" placeholder="">
                            Don't have an account?{" "}
                            <a href="/signup" className="font-medium text-gray-900">
                                Sign Up
                            </a>
                            </Typography>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Login;

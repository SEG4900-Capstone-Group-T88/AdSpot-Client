import {graphql} from '../gql'
import {useMutation} from 'urql'
import {useCallback, useContext} from 'react'
import {UserContext} from '../components/UserContext'
import Navbar from '../components/Navbar'
import { Checkbox, Input, Typography } from '@material-tailwind/react'

const LoginMutationDocument = graphql(`
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

function SignUp() {
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
                    <h1 className="font-bold text-[40px]">Create an account</h1>
                        <Typography color="gray" className="mt-1 font-normal" placeholder="">
                            Nice to meet you! Enter your details to register.
                        </Typography>
                        <form className="mt-8 mb-2 w-[450px]">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder="">
                                    Your Name
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
                            <Checkbox
                                label={
                                    <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                    placeholder=""
                                    >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                                crossOrigin={undefined}
                            />
                            <button
                                className="bg-purple text-[white] rounded-lg px-6 py-2 w-[450px]"
                                onClick={submit}
                            >
                                Sign Up
                            </button>
                            <Typography color="gray" className="mt-4 text-center font-normal" placeholder="">
                            Already have an account?{" "}
                            <a href="/login" className="font-medium text-gray-900">
                                Sign In
                            </a>
                            </Typography>
                        </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;

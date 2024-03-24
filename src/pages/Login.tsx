import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXTwitter, faGoogle, faMeta} from '@fortawesome/free-brands-svg-icons'
import {graphql} from '../gql'
import {useMutation} from 'urql'
import {useCallback, useContext} from 'react'
import {UserContext} from '../components/UserContext'
import Navbar from '../components/Navbar'

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
                    <h1 className="font-bold text-[40px]">Create an account</h1>
                    <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
                        Sign up as John Doe <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <br />
                    <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
                        <FontAwesomeIcon icon={faXTwitter} /> Sign up with X
                    </button>
                    <br />
                    <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
                        <FontAwesomeIcon icon={faMeta} /> Sign up with Meta
                    </button>
                    <p className="mb-3 mt-8">Already have an account?</p>
                    <button
                        className="bg-purple text-[white] rounded-lg px-6 py-2 w-[450px]"
                        onClick={submit}
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login
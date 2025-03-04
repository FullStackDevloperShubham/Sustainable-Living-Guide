import { useAuth0 } from '@auth0/auth0-react'
const LogOut = () => {
    const { logout } = useAuth0();

    

    return (
        <button className="px-6 py-3 mt-10 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 absolute top-0 right-0 m-4 flex space-x-2 mr-28"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
    )
}

export default LogOut;
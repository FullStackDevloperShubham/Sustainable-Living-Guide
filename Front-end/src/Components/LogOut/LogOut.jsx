import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
const LogOut = () => {
    const { logout } = useAuth0();

    return (
        <>
            {/* dashboard button */}
            <div className="absolute top-0 right-0 m-4 flex space-x-4">
                
                <Link to='/dashboard'>
                <button
                    className="hover:cursor-pointer px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                    >
                    Dashboard
                </button>
                
                    </Link>
                <button
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                    Log Out
                </button>
            </div>

        </>
    )
}

export default LogOut;
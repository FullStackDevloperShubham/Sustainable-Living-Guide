import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {

    const {user ,loginWithRedirect} = useAuth0();
    // redirect the use after login to learn more page
    if(user){
        window.location.href = "/LearnMore";
    }

    return (
        <button  className="px-6 py-3 mt-10 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 absolute top-0 right-0 m-4 flex space-x-2" onClick={event => loginWithRedirect()}>logIn</button>
    )
}

export default LogIn;
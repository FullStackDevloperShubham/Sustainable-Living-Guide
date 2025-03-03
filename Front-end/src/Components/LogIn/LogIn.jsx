import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {

    const {user ,loginWithRedirect} = useAuth0();
    console.log(user)

    return (
        <button onClick={event => loginWithRedirect()}>loginWithRedirect</button>
    )
}

export default LogIn;
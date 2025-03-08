import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import Dashboard from '../Dashboard/Dashboard';
import {useAuth0} from '@auth0/auth0-react';
const Home = () => {

    // Check if user is authenticated
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="bg-green-50 min-h-screen flex flex-col items-center justify-center text-center px-6">
            {/* Hero Section */}
            <h1 className="text-5xl font-bold text-green-700 mb-4">
                Welcome to Sustainable Living Guide 🌿
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
                Learn how to live an eco-friendly life, reduce waste, and adopt
                sustainable habits for a greener future.
            </p>

            {/* more things */}
            <Link to='https://www.stthomas.edu/_media-library/_documents/residence-life/guide-to-sustainable-living.pdf' target='_blank' rel='noreferrer'>
                <button className="px-6 py-3 mt-10 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                    Guide
                </button>
            </Link>

            {
                isAuthenticated? (
                    <Dashboard />
                ) : (
                    <LogIn />
                )
            }
            

            
              


        </div>
    );
}

export default Home;
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";

const Dashboard = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <p>Loading...</p>;


    // State to store post count
    const [postCount, setPostCount] = useState(0)

    // Fetch the document count
    useEffect(() => {
        fetch('http://localhost:5000/countOfDocuments')
            .then((res) => res.json())
            .then((data) => setPostCount(data))
            .catch((error) => console.log("Error fetching the data:", error.message))
    }, [])  // Added dependency array to prevent unnecessary re-fetching

    return (
        <>

            {/* create small card which contain user email */}

            <div className="absolute  right-0 p-4 text-white rounded-lg shadow-md w-64 ">
                <p className="text-lg font-semibold truncate">{user.email}</p>
            </div>

            {/* Dashboard layout */}
            <div className="absolute  flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 p-6">
                <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 bg-gradient-to-br from-gray-100 to-gray-300">
                    <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
                    <p className="text-lg text-gray-600">Manage your activities, track progress, and stay updated.</p>

                    <div className="mt-6 flex gap-6">
                        {/* Example Stats Cards */}
                        <div className="bg-white shadow-md p-4 rounded-xl text-center w-40">
                            <h2 className="text-xl font-bold text-gray-800">Sustainable Living Guide</h2>
                        </div>
                        <div className="bg-white shadow-md p-4 rounded-xl text-center w-40">
                            <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
                            <p className="text-2xl font-semibold text-green-600">{postCount}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        {/* Example Action Buttons */}
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                            View Reports
                        </button>
                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                            <Link to='/LearnMore'>
                                Main Page
                            </Link>
                        </button>
                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                            <Link to='/createpost'>
                                Create Post
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Dashboard;

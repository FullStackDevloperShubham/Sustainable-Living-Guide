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

            <div className="absolute right-0 p-4 text-white rounded-lg shadow-md w-64 ">
                <p className="text-lg font-semibold truncate">{user.email}</p>
            </div>

            {/* Dashboard layout */}
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                <div className="flex flex-col items-center justify-center w-3/4 h-3/4 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-row w-full h-full">

                        {/* Sidebar */}
                        <div className="flex flex-col w-1/4 h-full bg-gray-300 border border-gray-400">
                            <div className="flex flex-col items-center justify-center w-full h-1/6">
                                <h1 className="text-black text-xl font-semibold">{user.name} <br /> Time :{user.updated_at}</h1>
                            </div>
                            <div className="flex flex-col gap-5 items-center pt-4 w-full h-5/6 bg-gray-300 border">
                                <Link to='/LearnMore'>
                                    <Button className="bg-gray-300 text-black hover:bg-gray-400 hover:text-white">Home</Button>
                                </Link>
                                <Link to='/createpost'>
                                    <Button className="bg-gray-300 text-black hover:bg-gray-400 hover:text-white">Create Post</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col w-3/4 h-full bg-gray-200 border border-gray-400">

                            {/* Header */}
                            <div className="flex flex-col items-center justify-center w-full h-1/6 bg-gray-300 relative">
                                <h1 className="text-xl font-semibold">User ID :{user.sub}</h1>

                                {/* Total Posts Count - Positioned at the Top */}
                                <div className="absolute top-35 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl px-6 py-2">
                                    <h2 className="text-xl font-semibold text-gray-800">Total Posts: <span className="font-bold text-blue-600">{postCount}</span></h2>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col items-center justify-center w-full h-5/6 bg-gradient-to-br from-gray-100 to-gray-300">
                                <h1 className="text-2xl text-gray-700">Welcome to the Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;

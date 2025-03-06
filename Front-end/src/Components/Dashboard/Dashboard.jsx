import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import axios from 'axios';

const Dashboard = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <p>Loading...</p>;


    // State to store post count
    const [postCount, setPostCount] = useState(0)

    // useState for display the title of post
    const [posts, setPosts] = useState();

    // display components when click on view report
    const [isVisible, setIsVisible] = useState(true)

    // delete the post 
    const handleDelete = async(clickedPostId) => {
        console.log("Delete post at index:", clickedPostId);

        try {
            // sending the clicked post id 
            // for backend
            await axios.delete(`http://localhost:5000/api/delete/${clickedPostId}`)
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== clickedPostId));

        } catch (error) {
            console.log(error.message)
        }
      };
      

    // Fetch the document count the post
    useEffect(() => {
        axios.get('http://localhost:5000/countOfDocuments')
            .then((res) => res.json)
            .then((data) => setPostCount(data))
            .catch((error) => console.log("Error fetching the data:", error.message))
    }, [])  // Added dependency array to prevent unnecessary re-fetching

    // useEffect for display the title only 
    useEffect(() => {
        axios
            .get("http://localhost:5000/") // Ensure backend is running
            .then((response) => {
                const {data} = response
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <>
            {/* Dashboard layout */}
            <div className="absolute  flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 p-6">
                <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 bg-gradient-to-br from-gray-100 to-gray-300">
                    <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Dashboard</h1>
                    <p className="text-lg text-gray-600">Manage your activities, track progress, and stay updated.</p>

                    <div className="mt-6 flex gap-6">
                        {/* Example Stats Cards */}
                        <div className="bg-white    shadow-md p-4 rounded-xl text-center w-full">
                            <h2 className="text-xl font-bold text-gray-800">Sustainable Living <br />{user.email}</h2>
                        </div>
                        <div className="bg-white shadow-md p-4 rounded-xl text-center w-40">
                            <h2 className="text-xl font-bold text-gray-800">Tasks</h2>
                            <p className="text-2xl font-semibold text-green-600">{postCount}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        {/* Example Action Buttons */}
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                            View Report
                        </button>

                        {!isVisible && (
                            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 bg-white shadow-lg rounded-lg p-4 border 
                  max-h-100 overflow-y-auto">
                                <h2 className="text-lg font-bold mb-2">Latest Posts</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {posts.length > 0 ? (
                                        posts.slice().reverse().map((post, index) => (
                                            <div key={post._id}className="relative bg-gray-100 p-3 rounded-lg shadow-md border">
                                                <button
                                                    onClick={() => handleDelete(post._id)}
                                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                                >
                                                    <X size={18} />
                                                </button>
                                                <h3 className="text-gray-700 font-semibold">{post.title}</h3>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 col-span-3 text-center">No posts available</p>
                                    )}
                                </div>
                            </div>
                        )}

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

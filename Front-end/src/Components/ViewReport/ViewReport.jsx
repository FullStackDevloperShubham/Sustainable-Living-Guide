import { useState } from "react"

const ViewReports = () => {

    // State to store post count
    const [postTitle, setPostTitle] = useState()

    // Fetch the document count
    useEffect(() => {
        fetch('http://localhost:5000/countOfDocuments')
            .then((res) => res.json())
            .then((data) => setPostTitle(data))
            .catch((error) => console.log("Error fetching the data:", error.message))
    }, [])  // Added dependency array to prevent unnecessary re-fetching

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 bg-white shadow-lg rounded-lg p-4 border">
            <h2 className="text-lg font-bold mb-2">Latest Posts</h2>
            <ul className="space-y-1">
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <li key={index} className="text-gray-700 border-b last:border-none pb-1">
                            {postTitle.title}
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No posts available</p>
                )}
            </ul>
        </div>
    )
}

export default ViewReports
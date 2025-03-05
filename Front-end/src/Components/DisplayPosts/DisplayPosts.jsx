import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:5000/") // Ensure backend is running
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setError("Error fetching posts");
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
            <div className="flex flex-wrap justify-center">
                { posts ? posts.map((post) => (
                    <Card key={post._id} className="w-full md:w-1/2 lg:w-1/3 m-4 shadow-lg border border-gray-300">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{post.description}</p>
                            <p className="text-sm text-gray-400 mt-2">
                                Posted on: {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </CardContent>
                    </Card>
                )) : <p className="text-center text-gray-500">No posts available</p>}
            </div>
        </div>
    );
};

export default DisplayPosts;

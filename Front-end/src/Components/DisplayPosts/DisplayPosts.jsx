import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DisplayPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editPostId, setEditPostId] = useState(null); // Track the post being edited
    const [editedData, setEditedData] = useState({ title: "", description: "" });

    // Fetch posts
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

    // Handle Modify Click (Enable Editing Mode)
    const handleModifyClick = (post) => {
        setEditPostId(post._id);
        setEditedData({ title: post.title, description: post.description });
    };

    // Handle Input Change
    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    // Handle Save (Update Backend & UI)
    const handleSave = async () => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/updatepost/${editPostId}`,
                editedData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Post updated successfully!");
                setPosts(posts.map(post => 
                    post._id === editPostId ? { ...post, ...editedData } : post
                ));
                setEditPostId(null);
            } else {
                alert("Failed to update post");
            }
        } catch (error) {
            console.error("Error updating post:", error);
            alert("Something went wrong");
        }
    };

    // Handle Cancel (Exit Edit Mode)
    const handleCancel = () => {
        setEditPostId(null);
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

    return (
        <div className="container max-w-full mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Card key={post._id} className="w-full shadow-lg border border-gray-300 p-4">
                            <CardHeader>
                                {editPostId === post._id ? (
                                    <input
                                        type="text"
                                        name="title"
                                        value={editedData.title}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded text-xl font-semibold"
                                    />
                                ) : (
                                    <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                                )}
                            </CardHeader>
                            <CardContent>
                                {editPostId === post._id ? (
                                    <textarea
                                        name="description"
                                        value={editedData.description}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                    />
                                ) : (
                                    <p className="text-gray-600">{post.description}</p>
                                )}
                                <p className="text-sm text-gray-400 mt-2">
                                    Posted on: {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                                <div className="flex justify-end mt-4 space-x-2">
                                    {editPostId === post._id ? (
                                        <>
                                            <button
                                                onClick={handleSave}
                                                className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="px-3 py-1 text-sm text-white bg-gray-500 rounded hover:bg-gray-600"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => handleModifyClick(post)}
                                            className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                        >
                                            Modify
                                        </button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-3">No posts available</p>
                )}
            </div>
        </div>
    );
};

export default DisplayPosts;

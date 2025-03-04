import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Post = () => {
    const [formData, setFormData] = useState({ title: "", description: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/post", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                alert("Post created successfully!");
                setFormData({ title: "", description: "" });
            } else {
                alert("Failed to create post");
            }
        } catch (error) {
            console.error("Error submitting post:", error);
            alert("Something went wrong");
        }
    };

    return (

        <>
            <section className=" bg-green-100 py-20 px-6 md:px-12 lg:px-20 flex items-center justify-center text-center">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
                        Embrace Sustainable Living 🌿
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Sharing thoughts on sustainable living is crucial for building a
                        greener future. By raising awareness, we inspire individuals and
                        communities to adopt eco-friendly habits that protect our planet,
                        conserve resources, and foster collective action.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Let’s work together to create a healthier environment and a
                        thriving community for future generations. 🌍💚
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-green-200 opacity-50 rounded-lg -z-10"></div>
            </section>

            <Card className="max-w-lg w-full mx-auto mt-10 shadow-lg p-6 h-auto min-h-[450px]">
                <CardHeader>
                    <CardTitle>Create a Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            name="description"
                            placeholder="Enter description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="min-h-[150px]"
                        />
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* create a previous page button */}
            <div className="flex justify-center mt-6">
                <Button
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    Previous Page
                </Button>
            </div>
            
        </>
    );
};

export default Post;

 import  { Link } from 'react-router-dom';

const Home = () => {
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
            <Link to ='/LearnMore'>
            <button className="px-6 py-3 mt-10 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Learn More
            </button>
            </Link>
        </div>
    );
}

export default Home;
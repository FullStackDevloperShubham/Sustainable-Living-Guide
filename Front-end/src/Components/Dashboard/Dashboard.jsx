import {Link} from 'react-router-dom'
import { Button } from "@/components/ui/button";


const Dashboard = () => {
    return (
        <>
            {/* dashboard using shadcn and tailwind css */}
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                <div className="flex flex-col items-center justify-center w-3/4 h-3/4 bg-white shadow-lg rounded-lg">
                    {/* create a side bar */}
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-1/4 h-full bg-gray-300 border border-gray-400">
                            <div className="flex flex-col items-center justify-center w-full h-1/6 ">
                                <h1 className="text-black">Dashboard</h1>
                            </div>
                            <div className="flex flex-col gap-5 items-center pt-4  w-full h-5/6 bg-gray-300 border ">

                                <Link to='/LearnMore'>
                                    <Button className="bg-gray-300 text-black hover:text-white hover:cursor-pointer">Home</Button>
                                </Link>

                                <Link to='/createpost'>
                                <Button className="bg-gray-300 text-black hover:text-white hover:cursor-pointer">Create Post</Button>
                                </Link>
                                
                                {/* <Button className="bg-gray-300 text-black hover:text-white hover:cursor-pointer">Settings</Button>  */}
                                <Button className="bg-gray-300 text-black hover:text-white hover:cursor-pointer">Logout</Button>
                            </div>
                        </div>
                        {/* create a main content */}
                        <div className="flex flex-col w-3/4 h-full bg-gray-200 border border-gray-400">
                            <div className="flex flex-col items-center justify-center w-full h-1/6 bg-gray-300">
                                <h1>Home</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-5/6 bg-gray-200">
                                <h1>Content</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
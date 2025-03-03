import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const LearnMore = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center text-center px-6">
            {/* Heading at the Top */}
            <div className="mt-10">
                <h1 className="text-4xl font-bold text-green-700 mb-4">
                    Learn More About Sustainable Living 🌱
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Sustainable living is about reducing waste, conserving natural
                    resources, and making eco-friendly choices to protect our planet
                    for future generations. Start your journey today!
                </p>
            </div>

            {/* Spacer - Pushes button to bottom */}
            {/* key fetures added with their names */}
            <div className="flex-grow">
                {/* Sustainability Tips: */}
                <div className="text-gray-900 mt-4 w-full max-w-2xl mx-auto">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h4 className="text-2xl font-semibold cursor-pointer text-green-600">
                                    Sustainability Tips
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                    <li>Reduce single-use plastic by switching to reusable alternatives.</li>
                                    <li>Save water by fixing leaks and using water-efficient appliances.</li>
                                    <li>Use public transport, cycle, or carpool to reduce carbon emissions.</li>
                                    <li>Opt for renewable energy sources like solar panels.</li>
                                    <li>Support eco-friendly brands and products.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* second section */}
                    {/* eco tools */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h4 className="text-2xl font-semibold cursor-pointer text-green-600">
                                    Eco-Tools
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                    <h5 className="text-xl font-semibold text-green-700 mt-4">Interactive Eco-Tools:</h5>
                                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                        <li>🌍 <a href="https://www.carbonfootprint.com/calculator.aspx" className="text-blue-600 underline">Carbon Footprint Calculator</a> – Track your CO₂ emissions.</li>
                                        <li>⚡ <a href="https://www.fusioncharts.com/demos/dashboards/smart-energy-monitoring-dashboard/" className="text-blue-600 underline">Energy Usage Tracker</a> – Monitor your household energy consumption.</li>
                                        <li>🚗 <a href="https://www.carboncare.org/en/co2-emissions-calculator" className="text-blue-600 underline">Transport Emission Calculator</a> – Compare different travel methods.</li>
                                        <li>💧 <a href="https://ics-asso.org/wp-content/uploads/2018/04/Chap-3_Water-use_How-to-monitor-the-water-consumption_factsheet.pdf" className="text-blue-600 underline">Water Consumption Monitor</a> – Check your daily water usage.</li>
                                    </ul>
                                    <li>Support eco-friendly brands and products.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* third section */}
                    {/* Resource Library: Curated articles, videos, and guides on sustainable practices. */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h4 className="text-2xl font-semibold cursor-pointer text-green-600">
                                    Resource Library
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                    <h5 className="text-xl font-semibold text-green-700 mt-4">Curated Articles:</h5>
                                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                        <li>📚 <a href="https://www.nationalgeographic.com/environment/article/what-is-sustainability" className="text-blue-600 underline">What is Sustainability?</a> – National Geographic</li>
                                        <li>🌱 <a href="https://www.greenpeace.org/usa/sustainable-living/" className="text-blue-600 underline">Sustainable Living Guide</a> – Greenpeace</li>
                                        <li>🌍 <a href="https://www.wwf.org.uk/thingsyoucando" className="text-blue-600 underline">Sustainable Living Tips</a> – WWF UK</li>
                                        <li>🌿 <a href="https://www.earthday.org/earth-day-tips/" className="text-blue-600 underline">Earth Day Tips</a> – Earth Day</li>
                                    </ul>
                                    <li>Support eco-friendly brands and products.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* forth section */}
                    {/* Personalized Recommendations: Tailored suggestions based on user habits and */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h4 className="text-2xl font-semibold cursor-pointer text-green-600">
                                    Personalized Recommendations
                                </h4>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                    <h5 className="text-xl font-semibold text-green-700 mt-4">Tailored Suggestions:</h5>
                                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                                        <li>📊 Analyze your daily habits and environmental impact.</li>
                                        <li>🌿 Receive personalized tips and eco-friendly recommendations.</li>
                                        <li>🌱 Track your progress and set sustainability goals.</li>
                                        <li>🌍 Join a community of like-minded individuals and share your journey.</li>
                                    </ul>
                                    <li>Support eco-friendly brands and products.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>



            {/* Back to Home Button at the Bottom */}
            <div className="mb-10">
                <Link to="/">
                    <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LearnMore;

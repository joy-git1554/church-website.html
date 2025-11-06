import React from 'react'
import logo from '../assets/logo.png'
import backgroundImage from '../assets/fgck background image.avif'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen mt-15 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header className="w-full py-8 bg-blue-900 text-white text-center shadow-lg flex flex-col items-center">
                <img src={logo} alt="Full Gospel Churches of Kenya Logo" className="h-24 w-auto mb-4 rounded-full shadow-lg bg-white" />
                <h1 className="text-4xl font-bold mb-2">Welcome to Full Gospel Churches of Kenya Machakos</h1>
                <p className="text-lg">A place to worship, connect, and grow in faith</p>
            </header>
            <main className="flex-1 w-full max-w-3xl px-2 sm:px-4 py-8">

                <section className="mb-8 text-center">
                    <p className="text-white text-4xl font-bold mb-16">We welcome everyone to join our ministries.</p>
                    <p className="text-white text-4xl font-bold mb-16">We love visitors.</p>


                    <h2 className="text-2xl font-bold mb-6 text-center text-4xl text-white underline">Order of Our Services</h2>
                    <div className="mb-6 overflow-x-auto">
                        <h3 className="text-4xl font-bold mb-2 text-white">Sunday Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-lg sm:text-xl md:text-2xl mb-8">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-r">Time</th>
                                    <th className="py-2 px-4 border-b border-r">Activity</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">7:45 AM - 9:00 AM</td>
                                    <td className="py-2 px-4 border-b border-r">1st Service</td>

                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">9:00 AM - 10:00 AM</td>
                                    <td className="py-2 px-4 border-b border-r">Prayer Session & Sunday School Session in Progress</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">10:00 AM - 1:00 PM</td>
                                    <td className="py-2 px-4 border-b border-r">2nd Service</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto">
                        <h3 className="text-4xl font-bold mb-2 text-white">Mid-Week Services</h3>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow text-lg sm:text-xl md:text-2xl mb-8">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-r">Day</th>
                                    <th className="py-2 px-4 border-b border-r">Time</th>
                                    <th className="py-2 px-4 border-b">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">    Wednesday</td>
                                    <td className="py-2 px-4 border-b border-r">6:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Bible Study (Church Hall)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Thursday</td>
                                    <td className="py-2 px-4 border-b border-r">7:00 PM - 8:00 PM</td>
                                    <td className="py-2 px-4 border-b">Home Fellowships</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Friday</td>
                                    <td className="py-2 px-4 border-b border-r">6:00 PM - 7:30 PM</td>
                                    <td className="py-2 px-4 border-b">Evening Prayers (Church Hall)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-r">Saturday</td>
                                    <td className="py-2 px-4 border-b border-r">4:00 PM - 6:00 PM</td>
                                    <td className="py-2 px-4 border-b">Praise and Worship Practice</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Thursday Fellowships details */}
                        <section className="bg-white rounded-lg shadow p-6 mb-8">
                            <h4 className="text-2xl font-bold mb-3 text-blue-900">Thursday Home Fellowships</h4>
                            <p className="mb-4 text-gray-700">We warmly welcome all members and visitors to join our Thursday home fellowships. These meetings are a space for prayer, sharing, worship and growth in the Word. Whether you are new or have been with us for years, you are welcome — come as you are and be blessed.</p>

                            <h5 className="text-xl font-semibold mb-2">Order of Fellowships</h5>
                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-gray-50 border border-gray-200 rounded-lg text-base">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-3 border-b text-left whitespace-nowrap">Week</th>
                                            <th className="py-2 px-3 border-b text-left whitespace-nowrap">Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-3 border-b whitespace-nowrap">1st Week</td>
                                            <td className="py-2 px-3 border-b whitespace-nowrap truncate">Word</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 border-b whitespace-nowrap">2nd Week</td>
                                            <td className="py-2 px-3 border-b whitespace-nowrap truncate">Hymn</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 border-b whitespace-nowrap">3rd Week</td>
                                            <td className="py-2 px-3 border-b whitespace-nowrap truncate">Prayers</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-3 whitespace-nowrap">4th Week</td>
                                            <td className="py-2 px-3 whitespace-nowrap truncate">Sharing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="text-xl font-semibold mb-2">Home Fellowships</h5>
                            <p className="mb-2 text-gray-700">These are the Thursday Home Fellowships:</p>
                            <ul className="list-disc list-inside text-gray-800 mb-4">
                                <li>Katelembo</li>
                                <li>Miwani-Kenya Israel</li>
                                <li>Mumbuni</li>
                                <li>Kaani-Kaseve</li>
                                <li>Eastleigh</li>
                                <li>Church</li>
                                <li>Katoloni</li>
                            </ul>
                            <p className="text-gray-600">If you'd like to join a home fellowship or have questions about meeting locations and hosts, please contact our church office or speak to one of the elders after service. We look forward to fellowshipping with you.</p>
                        </section>
                    </div>
                </section>
            </main>
            <footer className="w-full py-4 bg-gray-800 text-white text-center">
                &copy; 2025 Full Gospel Churches of Kenya Machakos. All rights reserved.
            </footer>
        </div>
    );
}

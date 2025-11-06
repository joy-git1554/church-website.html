import React from 'react';
import logo from '../assets/logo.png'

function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center max-w-xl mb-4">
                We'd love to hear from you! For any inquiries
                or information about our church, please reach out using the contacts below.
            </p>
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-md text-center">
                <p className="text-xl font-semibold mb-2">Phone:</p>
                <p className="text-100-900 text-lg mb-4">0720401458</p>
                <p className="text-100-900 text-lg mb-4">0723071030</p>
                <p className="text-gray-700" />
            </div>
            <div className='bg-blue-800 rounded-lg shadow p-6 w-full max-w-md text-center mt-4'>
                <p className='text-white text-lg'> To connect with  pastor, call 0728812436.</p>
            </div>

        </div>

    );
}

export default Contact;

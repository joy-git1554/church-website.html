import React from 'react'

const Gallery = () => {
    const youtubeUrl = 'http://www.youtube.com/@machakosfullgospelchurch220' // <-- replace with your channel URL

    return (
        <div className="max-w-4xl mx-auto p-6 mt-24">
            <h1 className="text-3xl font-bold mb-4">Gallery</h1>
            <p className="mb-6">Welcome to our gallery. Check out our videos and subscribe to our YouTube channel for more updates.</p>

            <div className="mb-6">
                <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
                >
                    Visit our YouTube channel
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Placeholder images/videos - replace with real gallery items */}
                <div className="bg-gray-100 p-4 rounded shadow">Photo / Video 1</div>
                <div className="bg-gray-100 p-4 rounded shadow">Photo / Video 2</div>
                <div className="bg-gray-100 p-4 rounded shadow">Photo / Video 3</div>
                <div className="bg-gray-100 p-4 rounded shadow">Photo / Video 4</div>
            </div>
        </div>
    )
}

export default Gallery

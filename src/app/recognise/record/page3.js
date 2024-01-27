'use client';
import React, { useState } from 'react';

const FileUploadButton = () => {
    const [audioData, setAudioData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // e.target.result contains the audio data
                console.log(e.target.result);
                setAudioData(e.target.result);
            };

            // Use readAsDataURL for a data URL or readAsArrayBuffer for an ArrayBuffer
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        // You can now use the audioData variable as needed
        if (audioData) {
            console.log('Audio data:', audioData);
            // Perform additional processing or send to the server
        } else {
            console.log('No audio data available');
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
            />
            <p>Selected Audio: {audioData ? 'Available' : 'None'}</p>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploadButton;

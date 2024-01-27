'use client';
import React from "react";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/app/components/navbar";
import RINGS from 'vanta/src/vanta.net'
import Chat from "@/app/components/chat";
import Upload from "./upload";
const Record = () => {



    // const handleFileChange = (event) => {
    //     console.log("hi");
    const sendmsg = async () => {
        try {
            console.log("send msg");
            const res = await fetch("http://127.0.0.1:5000/upload", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify("hi i am your msg"),
            });
            if (res.ok) {
                // const resData = await res.json();
                console.log(res);
            }
            else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
        // const file = event.target.files[0];
        // if (file) {
        //     const reader = new FileReader();
        //     reader.onload = (e) => {
        //         // e.target.result contains the audio data
        //         setAudioData(e.target.result);

        //         // Call handleUpload immediately upon selecting the file
        //         handleUpload(e.target.result);
        //     };
        //     // Use readAsDataURL for a data URL or readAsArrayBuffer for an ArrayBuffer
        //     reader.readAsDataURL(file);
        //}
        //}
        ;

    const handleUpload = (dataURL) => {
        // Convert audioData to a base64-encoded string
        const base64AudioData = dataURL.split(',')[1];

        // Create a JSON object with the audio data
        const jsonPayload = {
            audioData: base64AudioData,
            fileName: 'your_audio_file_name', // You can customize the file name
        };

        // Send the JSON object to the Flask backend
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonPayload),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>

            <Navbar />
            <div className="flex flex-col p-8 " id="vanta">
                {/* Phone */}
                <div className="flex flex-row ">
                    <div className="mockup-phone border-primary ring-2">
                        <div className="camera"></div>
                        <div className="display ">
                            <div className="artboard artboard-demo phone-1 flex flex-col justify-start space-y-4 bg-white">
                                <div ><img src="/wait.jpg " /></div>

                                <div className="flex flex-row justify-center">
                                    <progress className="progress  progress-primary w-56"></progress>
                                </div>
                                <Chat />
                                <Upload />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );

}
export default dynamic(() => Promise.resolve(Record), { ssr: false });

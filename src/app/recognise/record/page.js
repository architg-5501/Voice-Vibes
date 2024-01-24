'use client';
import React from "react";
import { useState } from "react";
import dynamic from 'next/dynamic';
import Navbar from "@/app/components/navbar";
const Record = () => {
    const [audioFile, setAudioFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(file);
    }
    return (
        <div>

            <Navbar />
            <div className="p-8">
                {/* Phone */}
                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display ">
                        <div className="artboard artboard-demo phone-1 flex flex-col justify-start space-y-4 bg-white">
                            <div ><img src="/wait.jpg " /></div>
                            <div className="flex flex-row justify-center">
                                <progress className="progress  progress-primary w-56"></progress>
                            </div>
                            {/* Chat */}


                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src="/mic.jpg" />
                                    </div>
                                </div>
                                <div className="chat-bubble bg-purple-400 text-md font-sans font-semibold text-white">"Ready to make your voice heard? Simply upload your audio file, and let's bring your words to life!"</div>
                            </div>

                            <button className="btn btn-primary w-56 text-black font-sans font-extrabold bg-purple-200 hover:bg-purple-400">Record Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

                        </div>
                    </div>
                </div>
                {/* Upload button */}

            </div>
        </div>
    );

}
export default dynamic(() => Promise.resolve(Record), { ssr: false });

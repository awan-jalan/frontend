'use client'
import React, {useEffect, useRef, useState} from 'react';
import ImageWithPredictions from "@/components/ImageWithPredictions";

const Page = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const [frames, setFrames] = useState([]);
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setVideoFile(selectedFile);
    };
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

    },[frames])
    const handleExtractFrames = async () => {
        if (videoFile) {
            const video = videoRef.current;
            video.src = URL.createObjectURL(videoFile);

            await new Promise((resolve) => {
                video.onloadedmetadata = resolve;
            });

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const frameWidth = video.videoWidth;
            const frameHeight = video.videoHeight;

            canvas.width = frameWidth;
            canvas.height = frameHeight;

            const extractedFrames = [];
            const totalFrames = Math.floor(video.duration * video.getAttribute('fps'));
            for (let i = 0; i < totalFrames; i++) {
                video.currentTime = i / video.getAttribute('fps');
                await new Promise((resolve) => {
                    video.onseeked = resolve;
                });
                context.drawImage(video, 0, 0, frameWidth, frameHeight);

                const frameDataURL = canvas.toDataURL('image/png');
                extractedFrames.push(frameDataURL);
                console.log(frameDataURL.toString())
            }

            setFrames(extractedFrames);
        }
    };

    return (
        <div className="min-w-full mt-20">
            <input type="file" accept="video/*" id="videoInput" onChange={handleFileChange} />

            {/* Video element with dynamic source based on the selected file */}
            <video ref={videoRef as any} fps="30" />
            <canvas ref={canvasRef as any} style={{ display: 'none' }} />
            <button onClick={handleExtractFrames}>Extract Frames</button>

            {frames.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>Frame</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {frames.map((frameDataURL, index) => (
                        <tr key={index}>
                            <td>Frame {index + 1}</td>
                            <td>
                                <ImageWithPredictions base64Image={frameDataURL} predicString={""} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Page;

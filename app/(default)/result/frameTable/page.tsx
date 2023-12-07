'use client'
import React, { useRef, useState } from 'react';

const Page = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [frames, setFrames] = useState([]);

    const handleExtractFrames = () => {
        const video = videoRef.current;
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
            context.drawImage(video, 0, 0, frameWidth, frameHeight);

            const frameDataURL = canvas.toDataURL('image/png');
            extractedFrames.push(frameDataURL);
        }

        setFrames(extractedFrames);
    };

    return (
        <div>
            <video ref={videoRef} src="path/to/video.mp4" fps="30" controls />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
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
                                <img src={frameDataURL} alt={`Frame ${index + 1}`} />
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

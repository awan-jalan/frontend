// components/ImageWithPredictions.js
import { useEffect, useRef } from 'react';

const ImageWithPredictions = ({ base64Image, predicString }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if(predicString === undefined || predicString.length === 2 || predicString === ""){
            return
        }

        const predictionsObject = JSON.parse(JSON.parse(predicString))
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const image = new Image();
        image.src = base64Image;

        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;

            // Draw the image
            ctx.drawImage(image, 0, 0);

            // Draw bounding boxes and labels
            predictionsObject.predictions[0].ids.forEach((prediction, index) => {
                const [x, y, width, height] = predictionsObject.predictions[0].bboxes[index];
                const confidence = predictionsObject.predictions[0].confidences[index];
                const label = predictionsObject.predictions[0].displayNames[index];
                // Draw bounding box
                let color = 'black'
                if(label === "retak panjang"){
                    color = 'red'
                }else if(label === "sambungan aspal"){
                    color = 'blue'
                }else if(label === "retak melintang"){
                    color = '#09B121'
                }else if(label === "retak buaya"){
                    color = '#B1097B'
                }else if(label === "lubang"){
                    color = '#B109B1'
                }else if(label === "sambungan aspal"){
                    color = '#B16409'
                }
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.strokeRect(x * image.width, y * image.height, width * image.width, height * image.height);

                // Display label and confidence
                ctx.fillStyle = color;
                ctx.font = '16px Arial';
                ctx.fillText(`${label} (${(confidence * 100).toFixed(2)}%)`, x * image.width, y * image.height - 5);
            });
        };
    }, [base64Image, predicString]);

    return <canvas ref={canvasRef as any} />;
};

export default ImageWithPredictions;
